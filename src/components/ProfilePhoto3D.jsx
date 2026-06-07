import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { assetUrl } from "../lib/assetUrl";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isCoarsePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(pointer: coarse)").matches;

const isSmallViewport = () =>
  typeof window !== "undefined" && window.innerWidth <= 768;

export const ProfilePhoto3D = ({
  src = "picofme.png",
  className = "",
  fallbackAlt = "Portrait",
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isWebglActive, setIsWebglActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Keep the experience light only on touch-centric small screens.
    if (isCoarsePointer() && isSmallViewport()) return;

    setIsWebglActive(true);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const group = new THREE.Group();
    scene.add(group);

    const loader = new THREE.TextureLoader();
    let photoTexture = null;
    let disposed = false;

    const circleGeo = new THREE.CircleGeometry(1, 96);

    const photoMat = new THREE.MeshBasicMaterial();

    const photoMesh = new THREE.Mesh(circleGeo, photoMat);
    group.add(photoMesh);

    const ringGeo = new THREE.RingGeometry(1.02, 1.1, 96);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.z = -0.01;
    group.add(ringMesh);

    const shadowGeo = new THREE.CircleGeometry(1.08, 96);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.35,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.z = -0.12;
    shadowMesh.scale.set(1.05, 0.9, 1);
    group.add(shadowMesh);

    const url = assetUrl(src);
    loader.load(
      url,
      (tex) => {
        if (disposed) return;
        photoTexture = tex;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        photoMat.map = tex;
        photoMat.needsUpdate = true;

      },
      undefined,
      () => {
        // Ignore load errors and keep a blank material.
      },
    );

    const state = {
      targetRotX: 0,
      targetRotY: 0,
      rotX: 0,
      rotY: 0,
      t: 0,
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      state.targetRotY = (x - 0.5) * 0.35;
      state.targetRotX = (y - 0.5) * 0.22;
    };

    const handlePointerLeave = () => {
      state.targetRotX = 0;
      state.targetRotY = 0;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    const ro = new ResizeObserver(() => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      renderer.setSize(w, h, false);
      const size = Math.min(w, h);
      const vpX = (w - size) / 2;
      const vpY = (h - size) / 2;
      renderer.setViewport(vpX, vpY, size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    let raf = 0;
    const animate = () => {
      raf = window.requestAnimationFrame(animate);

      const reduce = prefersReducedMotion();

      state.t += reduce ? 0 : 0.012;

      state.rotX += (state.targetRotX - state.rotX) * 0.07;
      state.rotY += (state.targetRotY - state.rotY) * 0.07;

      group.rotation.x = state.rotX + (reduce ? 0 : Math.sin(state.t) * 0.03);
      group.rotation.y = state.rotY + (reduce ? 0 : Math.cos(state.t) * 0.05);
      group.position.y = reduce ? 0 : Math.sin(state.t) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);

      circleGeo.dispose();
      ringGeo.dispose();
      shadowGeo.dispose();
      photoMat.dispose();
      ringMat.dispose();
      shadowMat.dispose();
      if (photoTexture) photoTexture.dispose();
      renderer.dispose();

      setIsWebglActive(false);
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-square w-full overflow-hidden rounded-full border border-white/10 bg-black/20 ${className}`}
    >
      <img
        src={assetUrl(src)}
        alt={fallbackAlt}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isWebglActive ? "opacity-0" : "opacity-100"
        }`}
        loading="eager"
        decoding="async"
      />

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
          isWebglActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
