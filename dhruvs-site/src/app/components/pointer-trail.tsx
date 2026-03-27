"use client";

import type { CSSProperties, MutableRefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

type PointerTrailPattern = "orb";

type PointerTrailLayerConfig = {
  key: string;
  className: string;
  size: number;
  opacity: number;
  easing: number;
  velocityScaleBoost: number;
};

type PointerTrailPatternConfig = {
  maxVelocity: number;
  velocityDamping: number;
  settleDistancePx: number;
  layers: ReadonlyArray<PointerTrailLayerConfig>;
};

const SELECTED_POINTER_TRAIL_PATTERN: PointerTrailPattern = "orb";

const POINTER_TRAIL_PATTERNS = {
  orb: {
    maxVelocity: 1.2,
    velocityDamping: 0.84,
    settleDistancePx: 0.45,
    layers: [
      {
        key: "orb-main",
        className: "pointer-trail-orb pointer-trail-orb-main",
        size: 24,
        opacity: 0.52,
        easing: 0.28,
        velocityScaleBoost: 0.18,
      },
      {
        key: "orb-echo-one",
        className: "pointer-trail-orb pointer-trail-orb-echo-one",
        size: 42,
        opacity: 0.18,
        easing: 0.18,
        velocityScaleBoost: 0.12,
      },
      {
        key: "orb-echo-two",
        className: "pointer-trail-orb pointer-trail-orb-echo-two",
        size: 64,
        opacity: 0.08,
        easing: 0.11,
        velocityScaleBoost: 0.08,
      },
    ],
  },
} satisfies Record<PointerTrailPattern, PointerTrailPatternConfig>;

function getOrbLayerStyle(layer: PointerTrailLayerConfig): CSSProperties {
  return {
    "--pointer-orb-size": `${layer.size}px`,
  } as CSSProperties;
}

function PointerTrailOrb({
  layerRefs,
  layers,
}: {
  layerRefs: MutableRefObject<Array<HTMLSpanElement | null>>;
  layers: ReadonlyArray<PointerTrailLayerConfig>;
}) {
  return (
    <div aria-hidden="true" className="pointer-trail-layer" data-pattern="orb">
      {layers.map((layer, index) => (
        <span
          key={layer.key}
          ref={(element) => {
            layerRefs.current[index] = element;
          }}
          className={layer.className}
          style={getOrbLayerStyle(layer)}
        />
      ))}
    </div>
  );
}

function PointerTrailRenderer({
  layerRefs,
  pattern,
}: {
  layerRefs: MutableRefObject<Array<HTMLSpanElement | null>>;
  pattern: PointerTrailPattern;
}) {
  switch (pattern) {
    case "orb":
      return (
        <PointerTrailOrb
          layerRefs={layerRefs}
          layers={POINTER_TRAIL_PATTERNS.orb.layers}
        />
      );
  }
}

function usePointerTrailMotion(pattern: PointerTrailPattern) {
  const [enabled, setEnabled] = useState(false);

  const layerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const animationFrameRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const isActiveRef = useRef(false);
  const targetPointRef = useRef<Point | null>(null);
  const renderedPointsRef = useRef<Point[]>([]);
  const lastMoveRef = useRef<{ point: Point; time: number } | null>(null);
  const velocityTargetRef = useRef(0);
  const displayedVelocityRef = useRef(0);

  const patternConfig = POINTER_TRAIL_PATTERNS[pattern];
  const { layers, maxVelocity, velocityDamping, settleDistancePx } = patternConfig;

  const applyLayerStyles = useCallback(() => {
    const hasActiveTarget = isActiveRef.current && targetPointRef.current !== null;

    layers.forEach((layer, index) => {
      const element = layerRefs.current[index];

      if (!element) {
        return;
      }

      const point = renderedPointsRef.current[index];
      const x = point?.x ?? -9999;
      const y = point?.y ?? -9999;
      const velocity = displayedVelocityRef.current;
      const opacity = hasActiveTarget
        ? layer.opacity * (0.88 + velocity * 0.12)
        : 0;
      const scale = hasActiveTarget
        ? 1 + velocity * layer.velocityScaleBoost
        : 0.82;

      element.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      element.style.opacity = opacity.toFixed(3);
    });
  }, [layers]);

  const stopAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    isAnimatingRef.current = false;
  }, []);

  const resetTrail = useCallback(() => {
    stopAnimation();
    isActiveRef.current = false;
    targetPointRef.current = null;
    renderedPointsRef.current = [];
    lastMoveRef.current = null;
    velocityTargetRef.current = 0;
    displayedVelocityRef.current = 0;
    applyLayerStyles();
  }, [applyLayerStyles, stopAnimation]);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const syncEnabledState = () => {
      const shouldEnable =
        finePointerQuery.matches && !reducedMotionQuery.matches;

      setEnabled(shouldEnable);

      if (!shouldEnable) {
        resetTrail();
      }
    };

    syncEnabledState();

    reducedMotionQuery.addEventListener("change", syncEnabledState);
    finePointerQuery.addEventListener("change", syncEnabledState);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncEnabledState);
      finePointerQuery.removeEventListener("change", syncEnabledState);
      resetTrail();
    };
  }, [resetTrail]);

  useEffect(() => {
    if (!enabled) {
      resetTrail();
      return;
    }

    const animateTrail = () => {
      const targetPoint = targetPointRef.current;

      if (!isActiveRef.current || !targetPoint) {
        stopAnimation();
        applyLayerStyles();
        return;
      }

      displayedVelocityRef.current +=
        (velocityTargetRef.current - displayedVelocityRef.current) * 0.18;
      velocityTargetRef.current *= velocityDamping;

      let furthestDistance = 0;

      layers.forEach((layer, index) => {
        const currentPoint = renderedPointsRef.current[index] ?? targetPoint;
        const nextPoint = {
          x: currentPoint.x + (targetPoint.x - currentPoint.x) * layer.easing,
          y: currentPoint.y + (targetPoint.y - currentPoint.y) * layer.easing,
        };

        renderedPointsRef.current[index] = nextPoint;
        furthestDistance = Math.max(
          furthestDistance,
          Math.hypot(targetPoint.x - nextPoint.x, targetPoint.y - nextPoint.y),
        );
      });

      applyLayerStyles();

      if (
        furthestDistance > settleDistancePx ||
        displayedVelocityRef.current > 0.02
      ) {
        animationFrameRef.current = window.requestAnimationFrame(animateTrail);
        return;
      }

      stopAnimation();
    };

    const ensureAnimation = () => {
      if (isAnimatingRef.current) {
        return;
      }

      isAnimatingRef.current = true;
      animationFrameRef.current = window.requestAnimationFrame(animateTrail);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const nextPoint = {
        x: event.clientX,
        y: event.clientY,
      };
      const now = performance.now();
      const lastMove = lastMoveRef.current;

      if (lastMove) {
        const elapsedMs = Math.max(now - lastMove.time, 1);
        const distance = Math.hypot(
          nextPoint.x - lastMove.point.x,
          nextPoint.y - lastMove.point.y,
        );

        velocityTargetRef.current = Math.min(
          distance / elapsedMs / maxVelocity,
          1,
        );
      }

      lastMoveRef.current = {
        point: nextPoint,
        time: now,
      };
      targetPointRef.current = nextPoint;

      if (!isActiveRef.current) {
        isActiveRef.current = true;
        renderedPointsRef.current = layers.map(() => nextPoint);
        applyLayerStyles();
      }

      ensureAnimation();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        resetTrail();
      }
    };

    const handleWindowExit = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        resetTrail();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", resetTrail);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mouseout", handleWindowExit);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetTrail);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mouseout", handleWindowExit);
      resetTrail();
    };
  }, [
    applyLayerStyles,
    enabled,
    layers,
    maxVelocity,
    resetTrail,
    settleDistancePx,
    stopAnimation,
    velocityDamping,
  ]);

  return {
    enabled,
    layerRefs,
  };
}

export function PointerTrail() {
  const pattern = SELECTED_POINTER_TRAIL_PATTERN;
  const { enabled, layerRefs } = usePointerTrailMotion(pattern);

  if (!enabled) {
    return null;
  }

  return <PointerTrailRenderer layerRefs={layerRefs} pattern={pattern} />;
}
