"use client";

import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { useEffect, useState } from "react";
import { Color } from "three";

function useFluidPointerEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const syncEnabledState = () => {
      setEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    syncEnabledState();

    reducedMotionQuery.addEventListener("change", syncEnabledState);
    finePointerQuery.addEventListener("change", syncEnabledState);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncEnabledState);
      finePointerQuery.removeEventListener("change", syncEnabledState);
    };
  }, []);

  return enabled;
}

export function PointerTrail() {
  const enabled = useFluidPointerEnabled();

  if (!enabled) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-fluid-layer">
      <Canvas
        className="pointer-fluid-canvas"
        dpr={1}
        gl={{
          alpha: true,
          antialias: false,
          depth: false,
          powerPreference: "high-performance",
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new Color(0x000000), 0);
        }}
      >
        <EffectComposer autoClear={false} depthBuffer={false} multisampling={0}>
          <Fluid
            blend={8}
            curl={2.4}
            densityDissipation={0.965}
            distortion={0.38}
            force={1.7}
            intensity={4.2}
            radius={0.2}
            rainbow
            showBackground={false}
            swirl={2}
            velocityDissipation={0.985}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
