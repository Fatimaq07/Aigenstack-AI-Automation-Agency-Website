import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MorphingSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    // Optimized Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2)); // limit pixel ratio
    renderer.setSize(width, height, false);
    mount.appendChild(renderer.domElement);

    // *** OPTIMIZED GEOMETRY ***
    const geometry = new THREE.IcosahedronGeometry(1.3, 6); 
    // subdivision reduced from 20 → 6 (massive speed boost)

    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 1.0 } },
      vertexShader: `
        uniform float time;
        varying vec3 vNormal;

        void main() {
          vec3 p = position + 0.18 * sin(time + position.y * 3.0) * normal;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float glow = pow(0.85 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
          vec3 color = vec3(0.0, 0.85, 1.0);
          gl_FragColor = vec4(color * glow, 1.0);
        }
      `,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const clock = new THREE.Clock();
    let lastTime = 0;

    // Optimized Animation Loop
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      if (t - lastTime > 0.018) { // ~55 FPS cap for smoothness
        material.uniforms.time.value = t;
        sphere.rotation.y += 0.004;
        sphere.rotation.x += 0.002;
        renderer.render(scene, camera);
        lastTime = t;
      }
    };

    animate();

    // Optimized Resize
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
