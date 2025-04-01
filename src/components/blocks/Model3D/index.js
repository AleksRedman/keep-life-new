import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { Canvas } from 'react-three-fiber';
// import { OrbitControls, useGLTF } from 'drei';
import TestModel from '../../../assets/klModel.glb';
// import TestModel from '../../../assets/testModel.glb';
// import TestModel from '../../../assets/cmprsd_klModel2.glb';

// import styles from './index.less';

// const langCollection = {
//   UA: {
//     h2: 'ПАРТНЕРИ'
//   },
//   EN: {
//     h2: 'PARTNERS'
//   },
// };

// const Model = ({ path }) => {
//   const { scene } = useGLTF('../../../assets/klModel.glb'); // Load the GLB file
//   return <primitive object={scene} />;
// };

// {/* <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
//   {/* Lighting */}
//   <ambientLight intensity={0.5} />
//   <directionalLight position={[5, 5, 5]} intensity={1} />

//   {/* Load the Model */}
//   <Suspense fallback={null}>
//     <Model path="/path/to/your/model.glb" />
//   </Suspense>

//   {/* Controls for rotating the model */}
//   <OrbitControls />
// </Canvas> */}

// scene.background = new THREE.Color(0x505050)
// new THREE.Box3().setFromObject(gltf.scene)

function Model3D() {
  const mountRef = useRef(null); // Reference to the DOM element where the scene will be mounted

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    

    // Set up the camera
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(0, 2, 10); // Adjusted for better view
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    const camera = new THREE.PerspectiveCamera();
    // 0.1 is the near plane, 10000 is the far plane
    camera.position.set(0, 500, 1000); // Position the camera further back
    // camera.position.set(0, 200, 500);
    // camera.near = 0.1; // Clipping plane
    // camera.far = 1000; // Clipping plane
    // camera.updateProjectionMatrix();
    // camera.lookAt(scene.position);

    camera.position.set(0, 5, 20); // Adjust as needed based on your scene
    camera.lookAt(0, -12, -5);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft light
    // scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Bright directional light
    // directionalLight.position.set(5, 5, 5).normalize();
    // scene.add(directionalLight);
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.position.set(5, 5, 5);
    // scene.add(directionalLight);
    // Ambient light (provides global lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light (simulates sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    scene.background = new THREE.Color(0x87ceeb);
    // renderer.setClearColor(0x000000); // Set background color to black

    const loader = new GLTFLoader();
    console.log('TestModel', TestModel)
    loader.load(
      TestModel, // Replace with your model's path
      (gltf) => {
        const model = gltf.scene;
        // gltf.scene.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
        // gltf.scene.position.set(0, -1, 0); // Center the model
        // model.traverse((child) => {
        //   if (child.isMesh) {
        //     console.log('child', child)
        //     // Replace the material with a red MeshBasicMaterial
        //     child.material = new THREE.MeshBasicMaterial({ color: 'green' });
        //   }
        // });
        // model.scale.set(0.1, 0.1, 0.1); // Scale down the model
        // gltf.scene.scale.set(2, 2, 2)
        // model.scale.set(10, 10, 10); // Scale up by a factor of 100
        // model.position.set(20, -125, 10); // Center the model
        // gltf.scene.scale.set(1.1, 1.1, 1.1)
        model.scale.set(1000, 1000, 1000);
        // model.position.set(0.082, 0.027, 0.047)
        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = boundingBox.getCenter(new THREE.Vector3());
        model.position.sub(center);
        scene.add(model);
        // scene.add(gltf.scene.children[2])
        // const boundingBox = new THREE.Box3().setFromObject(model);
        // console.log('Bounding box size:', boundingBox.getSize(new THREE.Vector3()));

        console.log('Model position:', model.position);

        const axesHelper = new THREE.AxesHelper(10); // Axis size 10 units
        scene.add(axesHelper);
      },
      // (xhr) => {
      //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      //     console.log('loaded', { loaded: xhr.loaded, total: xhr.total });
      // },
      // (error) => {
      //     console.log( 'An error happened' );
      // }
    );

    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // Add OrbitControls
    // const controls = new OrbitControls(camera, renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; // Enable zoom
    controls.minDistance = 10; // Minimum zoom distance
    controls.maxDistance = 5000; // Maximum zoom distance
    controls.update();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Enable interactive camera movement
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}

Model3D.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Model3D)
