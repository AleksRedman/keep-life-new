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
import GalleryImgNew1 from '../../../assets/img/gallery_new_1.jpg';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: "Місія Keep Life",
    p1: "Забезпечити можливість оперативно надавати екстрену медичну допомогу постраждалим в зонах активних бойових дій, не втрачаючи час на їх транспортування",
  },
  EN: {
    h1: "Keep Life Mission",
    p1: "Provide the ability to quickly provide emergency medical care to victims in active combat zones, without losing time for their transportation",
  },
};

const Mission = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.missionSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.missionWrap}>
        <div className={styles.missionDescrBlock}>
          <div className={styles.missionDescr}>
            <h3>{langCollection[`${lang}`].h1}</h3>
            <p>{langCollection[`${lang}`].p1}</p>
          </div>
          <div className={styles.missionSlidesSmall}>
            <Carousel
              infinite
              autoplay
              autoplaySpeed={2500}
              arrows
              nextArrow={<RightOutlined />}
              prevArrow={<LeftOutlined />}
              slidesPerRow={1}
              className={styles.missionSlidesSmallCarousel}
            >
              {slide(MissionSlide1, 'MissionSlide1')}
              {slide(MissionSlide2, 'MissionSlide2')}
              {/* {slide(MissionSlide3, 'MissionSlide3')} */}
              {slide(MissionSlide4, 'MissionSlide4')}
              {slide(MissionSlide5, 'MissionSlide5')}
              {slide(MissionSlide6, 'MissionSlide6')}
            </Carousel>
          </div>
        </div>
        <div className={styles.missionSlidesBig}>
          <Carousel
            infinite
            autoplay
            autoplaySpeed={3000}
            arrows
            slidesPerRow={1}
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            className={styles.missionSlidesBigCarousel}
          >
            {slide(GalleryImgNew1, 'GalleryImgNew1')}
            {slide(Gallery9Img, 'Gallery9Img')}
            {slide(Gallery3Img, 'Gallery3Img')}
            {slide(Gallery4Img, 'Gallery4Img')}
            {slide(Gallery7Img, 'Gallery7Img')}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

Mission.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile,
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(Mission)
