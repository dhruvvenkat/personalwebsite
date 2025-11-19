"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only track if not in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      setTypedText((prev) => {
        const newText = (prev + e.key).toLowerCase().slice(-10); // Keep last 10 chars
        
        if (newText.includes("waterloo")) {
          setIsOpen(true);
          return "";
        }
        
        return newText;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>🦢 Go Waterloo! 🦢</DialogTitle>
              <DialogDescription>
                You found the Easter egg! Here&apos;s a special message for you.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                className="text-center text-6xl mb-4"
              >
                🦢
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center text-muted-foreground"
              >
                University of Waterloo pride! 🎓
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex justify-center"
              >
                <Button onClick={() => setIsOpen(false)}>Close</Button>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

