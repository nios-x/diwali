// components/ThreeModel.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeModel = ({ modelPath }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);

    let model; // To reference the loaded model for rotation

    // Load the .glb model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        scene.add(model);

        // Traverse and hide the bottom part if needed
        model.traverse((child) => {
          if (child.isMesh) {
            if (child.position.y < 0) {
              child.visible = false; // Hide the bottom part based on position
            }
          }
        });

        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model', error);
      }
    );

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        // Rotate the model on the Y axis
        model.rotation.y += 0.01; // Adjust the speed of rotation here
      }

      renderer.render(scene, camera);
    };

    // Clean up on unmount
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of the renderer to free up memory
      renderer.dispose();
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeModel;
