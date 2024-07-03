import React from 'react';
import { connect } from 'dva'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import Gallery2Img from '../../../assets/img/gallery2.jpg';
import Gallery5Img from '../../../assets/img/gallery5.jpg';
import Gallery6Img from '../../../assets/img/gallery6.jpg';
import Gallery8Img from '../../../assets/img/gallery8.jpg';

import styles from './index.less';

const langCollection = {
  UA: {
    h2: 'ПАРТНЕРИ'
  },
  EN: {
    h2: 'PARTNERS'
  },
};

const Dev = ({ isMobile, lang }) => {
  const slide = (image, url, key) => {
    return (
      <div className={styles.devCarouselItem}>
        <div className={styles.devCarouselItemWrap}>
          <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.devCarouselItemImg} />
        </div>
      </div>
    )
  }
  return (
    <section id="dev" className={styles.dev}>
      <div className={styles.devWrap}>
        <Carousel
          infinite
          autoplay
          arrows
          adaptiveHeight
          slidesPerRow={isMobile ? 1 : 4}
          nextArrow={<RightOutlined />}
          prevArrow={<LeftOutlined />}
          className={styles.devCarousel}
        >
          {slide(Gallery8Img, '#', 'Gallery8Img')}
          {slide(Gallery2Img, '#', 'Gallery2Img')}
          {slide(Gallery5Img, '#', 'Gallery5Img')}
          {slide(Gallery6Img, '#', 'Gallery6Img')}
          {slide(Gallery8Img, '#', 'Gallery8Img')}
          {slide(Gallery2Img, '#', 'Gallery2Img')}
          {slide(Gallery5Img, '#', 'Gallery5Img')}
          {slide(Gallery6Img, '#', 'Gallery6Img')}
          {/* {slide(Gallery8Img, '#', 'Gallery8Img')}
          {slide(Gallery2Img, '#', 'Gallery2Img')}
          {slide(Gallery5Img, '#', 'Gallery5Img')}
          {slide(Gallery6Img, '#', 'Gallery6Img')} */}
        </Carousel>
      </div>
    </section>
  );
}

Dev.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Dev)
