import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeAuraBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isLight =
      document.documentElement.dataset.theme === "light";

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "default",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(6, 32, 32);

    const colors = isLight
      ? [0x93c5fd, 0x60a5fa, 0x3b82f6]
      : [0x1e3a8a, 0x1d4ed8, 0x1e40af];

    const material1 = new THREE.MeshBasicMaterial({ color: colors[0] });
    const material2 = new THREE.MeshBasicMaterial({ color: colors[1] });
    const material3 = new THREE.MeshBasicMaterial({ color: colors[2] });

    const sphere1 = new THREE.Mesh(geometry, material1);
    const sphere2 = new THREE.Mesh(geometry, material2);
    const sphere3 = new THREE.Mesh(geometry, material3);

    scene.add(sphere1, sphere2, sphere3);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const t = clock.getElapsedTime();

      sphere1.position.x = Math.sin(t * 0.3) * 12;
      sphere1.position.y = Math.cos(t * 0.4) * 8;
      sphere1.position.z = Math.sin(t * 0.2) * 5;

      sphere2.position.x = Math.cos(t * 0.25) * 15;
      sphere2.position.y = Math.sin(t * 0.35) * 10;
      sphere2.position.z = Math.cos(t * 0.15) * -5;

      sphere3.position.x = Math.sin(t * 0.35) * -10;
      sphere3.position.y = Math.cos(t * 0.2) * -12;
      sphere3.position.z = Math.sin(t * 0.25) * 5;

      sphere1.scale.setScalar(1 + Math.sin(t * 0.5) * 0.2);
      sphere2.scale.setScalar(1 + Math.cos(t * 0.4) * 0.2);
      sphere3.scale.setScalar(1 + Math.sin(t * 0.6) * 0.2);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material1.dispose();
      material2.dispose();
      material3.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full scale-125 opacity-30 blur-[100px] sm:blur-[140px]"
    />
  );
};
