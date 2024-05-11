import React from 'react';
import classNames from 'classnames'
import Sample from '../../assets/container.mp4';
import SampleMOV from '../../assets/container.mov';
import Container from '../../assets/img/container.jpg';
import styles from './index.less'

const VideoBanner = () => {
  const pageStyles = classNames(
    styles.videoBannerWrapper,
    styles.videoBannerPage
  )

  return (
    <section id="video-banner" className={pageStyles}>
      {
        Sample
          ? <video width="100%" height="100%" autoPlay muted loop playsInline poster={Container} src={Sample} >
            <source src={Sample} type="video/mp4" />
            <source src={SampleMOV} type="video/mov" />
            <source src={Container} type="image/jpg" />
            Your browser does not support HTML5 video.
          </video>
          : <img src={Container} width="100%" height="100%" />
      }
      
    </section>
  );
}

export default VideoBanner
