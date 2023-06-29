import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import earthTexture from '../../public/earth.png';

const Earth = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const earthSizeRef = useRef<number>(3);

  useEffect(() => {
    let earthSize = 3;

    const handleResize = () => {
      if (window.innerWidth <= 480) {
        earthSize = 2;
      } else if (window.innerWidth <= 768) {
        earthSize = 2.5;
      } else if (window.innerWidth <= 1024) {
        earthSize = 2.8;
      } else {
        earthSize = 3;
      }

      earthSizeRef.current = earthSize;

      if (containerRef.current) {
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const geometry = new THREE.SphereGeometry(earthSize, 64, 64);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(earthTexture.src as string);
        const material = new THREE.MeshStandardMaterial({ map: texture });
        const moon = new THREE.Mesh(geometry, material);

        scene.add(moon);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        scene.add(light);

        const rendererRender = () => {
          requestAnimationFrame(rendererRender);
          moon.rotation.y += 0.001;
          renderer.render(scene, camera);
        };

        const rendererResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', rendererResize);

        rendererRender();
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Earth;
