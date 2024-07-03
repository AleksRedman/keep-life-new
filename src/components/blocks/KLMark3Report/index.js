import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark3Banner from '../../../assets/img/kl-mark3/kl3_4.jpg';
import KLMark3Img1 from '../../../assets/img/kl-mark3/SquareImgs/kl3_1.jpg';
import KLMark3Img2 from '../../../assets/img/kl-mark3/SquareImgs/kl3_2.jpg';
import KLMark3Img3 from '../../../assets/img/kl-mark3/SquareImgs/kl3_3.jpg';
import KLMark3Img4 from '../../../assets/img/kl-mark3/SquareImgs/kl3_4.jpg';

import KLMark3Img16 from '../../../assets/img/kl-mark3/SquareImgs/kl3_16.jpg';
import KLMark3Img17 from '../../../assets/img/kl-mark3/SquareImgs/kl3_17.jpg';
import KLMark3Img18 from '../../../assets/img/kl-mark3/SquareImgs/kl3_18.jpg';

import KLMark3Img5 from '../../../assets/img/kl-mark3/SquareImgs/kl3_5.jpg';
import KLMark3Img6 from '../../../assets/img/kl-mark3/SquareImgs/kl3_6.jpg';
import KLMark3Img7 from '../../../assets/img/kl-mark3/SquareImgs/kl3_7.jpg';
import KLMark3Img8 from '../../../assets/img/kl-mark3/SquareImgs/kl3_8.jpg';
import KLMark3Img9 from '../../../assets/img/kl-mark3/SquareImgs/kl3_9.jpg';
import KLMark3Img10 from '../../../assets/img/kl-mark3/SquareImgs/kl3_10.jpg';
import KLMark3Img11 from '../../../assets/img/kl-mark3/SquareImgs/kl3_11.jpg';
import KLMark3Img12 from '../../../assets/img/kl-mark3/SquareImgs/kl3_12.jpg';

import styles from './index.less';

const langCollection = {
  UA: {
    p1: "Третя модель Keep Life, на відміну від попередніх двох, розрахована більше на цивільне населення прифронтових регіонів. Наразі мобільна терапія та гінекологія вже працюють в областях, де є проблеми з медичними закладами.",
    p2: "Ця модель створена на базі 20-футового контейнера, однак не має розсувних конструкцій, що робить її найкомпактнішою з усіх. Всередині розміщені коридор, приймальня, оглядова гінекологічна кімната та санвузол.",
    p3: "Також ми врахували, що ця модель здебільшого використовуватиметься в населених пунктах, тому ми провели каналізацію з контейнера. Змін зазнав і зовнішній пандус. Тут він складається з двох частин, опускається та піднімається за допомогою механічної лебідки.",
    p4: "Головною перевагою третьої моделі стала вантажівка MAN з подвійним рядом сидінь в кабіні. Це дозволить всій команді медиків безперешкодно пересуватися між точками призначення.",
  },
  EN: {
    p1: "The third model of Keep Life, unlike the previous two, is designed more for the civilian population in frontline regions. Currently, mobile therapy and gynecology services are already operating in areas with medical facility issues.",
    p2: "This model is based on a 20-foot container but does not have sliding structures, making it the most compact of all. Inside, it features a corridor, reception area, gynecological examination room, and a bathroom.",
    p3: "We also took into account that this model will mostly be used in populated areas, so we installed sewage from the container. The external ramp was also modified; it now consists of two parts and can be lowered and raised using a mechanical winch.",
    p4: "The main advantage of the third model is the MAN truck with a double row of seats in the cab. This allows the entire medical team to move seamlessly between destinations.",
  },
};

const KLMark1Report = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.klMark3ReportSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="klMark3Report" className={styles.klMark3Report}>
      <div className={styles.klMark3ReportWrap}>
        <div className={styles.klMark3ReportBanner}>
          <img alt={'KL Mark4 Report Banner'} src={KLMark3Banner} style={{ width: '100%' }} className={styles.klMark3ReportBannerImg} />
        </div>

        <h1 className={styles.klMark3ReportTitle}>Keep Life Mark 3</h1>
        
        <div className={styles.klMark3ReportText}>
          <p>{langCollection[`${lang}`].p1}</p>
          <p>{langCollection[`${lang}`].p2}</p>
        </div>

        <div className={styles.klMark3ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={2}
            className={styles.klMark3ReportCarousel}
          >
            
            {slide(KLMark3Img4, 'KLMark4Img4')}
            {slide(KLMark3Img16, 'KLMark4Img16')}
            {slide(KLMark3Img2, 'KLMark4Img2')}
            {slide(KLMark3Img17, 'KLMark4Img17')}
            {slide(KLMark3Img3, 'KLMark4Img3')}
            {slide(KLMark3Img18, 'KLMark4Img18')}
            {/* {slide(KLMark3Img1, 'KLMark4Img1')} */}
          </Carousel>
        </div>

        <div className={styles.klMark3ReportText}>
          <p>{langCollection[`${lang}`].p3}</p>
        </div>
        <div className={styles.klMark3ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={2}
            className={styles.klMark3ReportCarousel}
          >
            {slide(KLMark3Img5, 'KLMark4Img5')}
            {slide(KLMark3Img12, 'KLMark4Img12')}
            {slide(KLMark3Img10, 'KLMark4Img10')}
            {slide(KLMark3Img11, 'KLMark4Img11')}
            {slide(KLMark3Img6, 'KLMark4Img6')}
            {slide(KLMark3Img7, 'KLMark4Img7')}
            {slide(KLMark3Img9, 'KLMark4Img9')}
            {slide(KLMark3Img1, 'KLMark4Img1')}
          </Carousel>
        </div>
        <div className={styles.klMark3ReportText}>
          <p>{langCollection[`${lang}`].p4}</p>
        </div>
      </div>
    </section>
  );
}

KLMark1Report.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile,
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(KLMark1Report)
