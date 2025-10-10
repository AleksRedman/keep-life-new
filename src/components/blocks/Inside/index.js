import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import MissionSlide1 from '../../../assets/img/mission-slide1.jpg'
import MissionSlide2 from '../../../assets/img/mission-slide2.jpg'
// import MissionSlide3 from '../../../assets/img/mission-slide3.jpg'
import MissionSlide4 from '../../../assets/img/mission-slide4.jpg'
import MissionSlide5 from '../../../assets/img/mission-slide5.jpg'
import MissionSlide6 from '../../../assets/img/mission-slide6.jpg'
import Gallery3Img from '../../../assets/img/gallery3.jpg';
import Gallery4Img from '../../../assets/img/gallery4.jpg';
import Gallery7Img from '../../../assets/img/gallery7.jpg';
import Gallery9Img from '../../../assets/img/gallery9.jpg';

import InsideImg from '../../../assets/img/inside.jpg';
import Inside1Img from '../../../assets/img/inside1.jpg';
import Inside2Img from '../../../assets/img/inside2.jpg';
import Inside3Img from '../../../assets/img/inside3.jpg';
import Inside4Img from '../../../assets/img/inside4.jpg';
import Inside5Img from '../../../assets/img/inside5.jpg';
import GalleryImgNew1 from '../../../assets/img/gallery_new_1.jpg';

import InsideGalImg1 from '../../../assets/img/inside-imgs-gal/inside-img-gal1.png';
import InsideGalImg2 from '../../../assets/img/inside-imgs-gal/inside-img-gal2.png';
import InsideGalImg3 from '../../../assets/img/inside-imgs-gal/inside-img-gal3.png';
import InsideGalImg4 from '../../../assets/img/inside-imgs-gal/inside-img-gal4.png';
import InsideGalImg5 from '../../../assets/img/inside-imgs-gal/inside-img-gal5.png';
import InsideGalImg6 from '../../../assets/img/inside-imgs-gal/inside-img-gal6.png';
import InsideGalImg7 from '../../../assets/img/inside-imgs-gal/inside-img-gal7.png';
import InsideGalImg8 from '../../../assets/img/inside-imgs-gal/inside-img-gal8.png';
import InsideGalImg9 from '../../../assets/img/inside-imgs-gal/inside-img-gal9.png';
import InsideGalImg10 from '../../../assets/img/inside-imgs-gal/inside-img-gal10.png';

import styles from './index.less';

const Inside = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.insideSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.insideSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="inside" className={styles.inside}>
      <div className={styles.insideWrap}>
        <Carousel
          infinite
          // autoplay
          // autoplaySpeed={3000}
          arrows
          slidesPerRow={1}
          nextArrow={<RightOutlined />}
          prevArrow={<LeftOutlined />}
          className={styles.insideSlidesBigCarousel}
        >
          {/* {slide(Inside5Img, 'Inside5Img')} */}
          {/* {slide(Inside1Img, 'Inside1Img')} */}
          {/* {slide(Inside2Img, 'Inside2Img')}
          {slide(Inside4Img, 'Inside4Img')}
          {slide(Inside3Img, 'Inside3Img')}
          {slide(InsideImg, 'InsideImg')} */}
          {slide(InsideGalImg1, 'InsideGalImg1')}
          {/* {slide(InsideGalImg2, 'InsideGalImg2')} */}
          {slide(InsideGalImg3, 'InsideGalImg3')}
          {slide(InsideGalImg4, 'InsideGalImg4')}
          {slide(InsideGalImg5, 'InsideGalImg5')}
          {slide(InsideGalImg6, 'InsideGalImg6')}
          {slide(InsideGalImg7, 'InsideGalImg7')}
          {slide(InsideGalImg8, 'InsideGalImg8')}
          {slide(InsideGalImg9, 'InsideGalImg9')}
          {slide(InsideGalImg10, 'InsideGalImg10')}
        </Carousel>
      </div>
    </section>
  );
}

Inside.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(Inside)
