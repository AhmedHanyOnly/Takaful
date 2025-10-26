"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollSmoother);

    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        smooth: 1.2, 
        effects: true,
        smoothTouch: 0.1,
      });
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
