import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scene Setup
    const scene = new THREE.Scene();
    // A very deep, almost black background to match the image
    const backgroundColor = 0x020203; 
    scene.background = new THREE.Color(backgroundColor);
    // Dark fog to fade out distant particles
    scene.fog = new THREE.FogExp2(backgroundColor, 0.003);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 4. Create a soft, circular texture for the particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    // Group to hold our particle layers
    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);

    // 5. Function to generate layers for depth
    const createParticleLayer = (count: number, size: number, opacity: number, color: number) => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < count; i++) {
        // Wide spread for an immersive feel
        const x = (Math.random() - 0.5) * 250;
        const y = (Math.random() - 0.5) * 250;
        const z = (Math.random() - 0.5) * 250;
        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      const material = new THREE.PointsMaterial({
        size,
        color,
        map: particleTexture,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false, // Prevents particles from clipping into each other
      });

      const points = new THREE.Points(geometry, material);
      particlesGroup.add(points);
      return points;
    };

    // SUBTLETY TWEAK 1: Reduced opacity across all layers so they aren't overly bright
    const layer1 = createParticleLayer(2500, 0.3, 0.15, 0x88aaff); 
    const layer2 = createParticleLayer(1000, 0.6, 0.3, 0xeeeeff); 
    const layer3 = createParticleLayer(300, 1.2, 0.5, 0xffffff); 

    // 6. Mouse Interaction Variables for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    window.addEventListener('mousemove', onDocumentMouseMove);

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // SUBTLETY TWEAK 2: Halved the mouse input multiplier
      targetX = mouseX * 0.0005; 
      targetY = mouseY * 0.0005;
      
      // Move camera smoothly based on mouse. 
      // Reduced the travel distance multiplier from 15 to 5.
      camera.position.x += (targetX * 5 - camera.position.x) * 0.02;
      camera.position.y += (-targetY * 5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // SUBTLETY TWEAK 3: Drastically slowed down the rotation (drift) animation
      layer1.rotation.y -= 0.00005;
      layer2.rotation.y -= 0.0001;
      layer2.rotation.x += 0.00003;
      layer3.rotation.y -= 0.0002;
      layer3.rotation.x -= 0.00005;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      particleTexture.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default Background;