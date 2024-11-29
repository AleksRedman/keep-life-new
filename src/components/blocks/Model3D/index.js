import React, { Suspense } from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
// import { Canvas } from 'react-three-fiber';
// import { OrbitControls, useGLTF } from 'drei';
import KLModel from '../../../assets/klModel.glb';

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

const Model3D = () => {
  return (
    <>
      
    </>
  );
};

Model3D.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Model3D)
