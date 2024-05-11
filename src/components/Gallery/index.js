import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import Gallery1Img from '../../assets/img/gallery1.png';
import Gallery2Img from '../../assets/img/gallery2.jpg';
import Gallery3Img from '../../assets/img/gallery3.jpg';
import Gallery4Img from '../../assets/img/gallery4.jpg';
import Gallery5Img from '../../assets/img/gallery5.jpg';
import Gallery6Img from '../../assets/img/gallery6.jpg';
import Gallery7Img from '../../assets/img/gallery7.jpg';
import Gallery8Img from '../../assets/img/gallery8.jpg';
import Gallery9Img from '../../assets/img/gallery9.jpg';
import GalleryImgNew1 from '../../assets/img/gallery_new_1.jpg';
import GalleryImgNew2 from '../../assets/img/gallery_new_2.jpg';
import GalleryImgNew3 from '../../assets/img/gallery_new_3.jpg';
import GalleryImgNew4 from '../../assets/img/gallery_new_4.jpg';
import GalleryImgNew5 from '../../assets/img/gallery_new_5.jpg';
import styles from './index.less';

const langCollection = {
  UA: {
    h2: 'ПАРТНЕРИ'
  },
  EN: {
    h2: 'gallery'
  },
};

const Gallery = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.galleryCarouselItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.galleryCarouselItemImg} />
      </div>
    )
  }
  return (
    <section id="gallery" className={styles.gallery}>
      <Carousel
        infinite
        autoplay
        autoplaySpeed={2500}
        arrows
        // adaptiveHeight
        slidesPerRow={isMobile ? 1 : 2}
        className={styles.galleryCarousel}
      >
        {slide(GalleryImgNew1, 'GalleryImgNew1')}
        {slide(Gallery9Img, 'Gallery9Img')}
        {slide(Gallery3Img, 'Gallery3Img')}
        {slide(Gallery4Img, 'Gallery4Img')}
        {slide(Gallery7Img, 'Gallery7Img')}
        {slide(GalleryImgNew2, 'GalleryImgNew2')}
        {slide(GalleryImgNew3, 'GalleryImgNew3')}
        {slide(GalleryImgNew4, 'GalleryImgNew4')}
        {slide(Gallery8Img, 'Gallery8Img')}
        {/* {slide(Gallery1Img, 'Gallery1Img')} */}
        {slide(Gallery2Img, 'Gallery2Img')}
        {slide(Gallery5Img, 'Gallery5Img')}
        {slide(Gallery6Img, 'Gallery6Img')}
      </Carousel>
    </section>
  );
}

Gallery.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Gallery)
