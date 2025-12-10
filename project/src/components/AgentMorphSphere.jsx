import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AgentMorphSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // --- Geometry ---
    const sphereGeometry = new THREE.IcosahedronGeometry(1.4, 20);

    // AI Agent Symbol (Hexagon) Geometry
    const hexShape = new THREE.Shape();
    const sides = 6;
    const radius = 1.2;

    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      i === 0 ? hexShape.moveTo(x, y) : hexShape.lineTo(x, y);
    }
    hexShape.closePath();

    const hexGeometry = new THREE.ExtrudeGeometry(hexShape, {
      depth: 0.3,
      bevelEnabled: false,
    });

    // Match vertex counts to morph correctly
    hexGeometry.scale(1, 1, 0.2);
    hexGeometry.center();
    THREE.BufferGeometryUtils = await import("three/examples/jsm/utils/BufferGeometryUtils.js");
    const morphed = THREE.BufferGeometryUtils.mergeVertices(hexGeometry);

    // --- Shader Material ---
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        morphProgress: { value: 0.0 },
      },
      vertexShader: `
        uniform float time;
        uniform float morphProgress;
        attribute vec3 morphTarget0;
        varying vec3 vNormal;

        void main() {
          vec3 morphedPos = mix(position, morphTarget0, morphProgress);
          vec3 p = morphedPos + 0.22 * sin(time + morphedPos.y * 3.0) * normal;

          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float glow = pow(0.8 - dot(vNormal, vec3(0,0,1.0)), 4.0);
          vec3 color = vec3(0.0, 0.85, 1.0);
          gl_FragColor = vec4(color * glow, 1.0);
        }
      `,
      morphTargets: true,
    });

    // Mesh
    const mesh = new THREE.Mesh(sphereGeometry, material);
    mesh.geometry.morphAttributes.position = [morphed.getAttribute("position")];
    scene.add(mesh);

    const clock = new THREE.Clock();

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth morphing cycle: sphere -> hexagon -> sphere
      material.uniforms.morphProgress.value = (Math.sin(t * 1.2) + 1) / 2;

      material.uniforms.time.value = t;
      mesh.rotation.y += 0.006;
      mesh.rotation.x += 0.003;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
