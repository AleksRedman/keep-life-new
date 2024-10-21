import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark5Banner from '../../../assets/img/kl-mark5/kl5_6.jpg';
import KLMark5Img1 from '../../../assets/img/kl-mark5/kl5_1.jpg';
import KLMark5Img2 from '../../../assets/img/kl-mark5/kl5_3.jpg';
import KLMark5Img3 from '../../../assets/img/kl-mark5/kl5_4.jpg';
import KLMark5Img4 from '../../../assets/img/kl-mark5/kl5_5.jpg';
import KLMark5Img5 from '../../../assets/img/kl-mark5/kl5_13.jpg';
import KLMark5Img6 from '../../../assets/img/kl-mark5/kl5_14.jpg';

import KLMark5Img7 from '../../../assets/img/kl-mark5/kl5_9.jpg';
import KLMark5Img8 from '../../../assets/img/kl-mark5/kl5_10.jpg';
import KLMark5Img9 from '../../../assets/img/kl-mark5/kl5_11.jpg';
import KLMark5Img10 from '../../../assets/img/kl-mark5/kl5_12.jpg';

import styles from './index.less';

 




const langCollection = {
  UA: {
    p1: "П’ята модель Keep Life найбільш подібна до другої моделі – 20-футового контейнера з розкладними конструкціями. Втім, його найбільшою перевагою стала безпека – модуль затягнений арамідною тканиною (кевларом), а також має засоби радіоелектронної боротьби (РЕБ).",
    p2: "Окрім того, контейнери цієї моделі утеплюються пінополіуретаном (ППУ), що у 2,5 рази ефективніший мінеральної вати, екологічно чистий, шумоізолюючий та має термін експлуатації 50+ років.",
    p3: "Як і четверта модель, ці Keep Life обладнані акумуляторами, які забезпечують функціонування модуля протягом 8 годин після від’єднання від електромережі."
  },
  EN: {
    p1: "The fifth model of Keep Life is most similar to the second model – a 20-foot container with folding structures. However, its greatest advantage has become safety – the module is covered with aramid fabric (Kevlar) and also has electronic warfare (EW) capabilities.",
    p2: "Additionally, containers of this model are insulated with polyurethane foam (PUF), which is 2.5 times more effective than mineral wool, environmentally friendly, soundproof, and has a service life of 50+ years.",
    p3: "Like the fourth model, these Keep Life units are equipped with batteries that provide module operation for up to 8 hours after disconnecting from the power grid."
  },
};

const KLMark1Report = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.klMark5ReportSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="klMark5Report" className={styles.klMark5Report}>
      <div className={styles.klMark5ReportWrap}>
        <div className={styles.klMark5ReportBanner}>
          <img alt={'KL Mark5 Report Banner'} src={KLMark5Banner} style={{ width: '100%' }} className={styles.klMark5ReportBannerImg} />
        </div>

        <h1 className={styles.klMark5ReportTitle}>Keep Life Mark 5</h1>
        
        <div className={styles.klMark5ReportText}>
          <p>{langCollection[`${lang}`].p1}</p>
        </div>
        <div className={styles.klMark5ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={isMobile ? 1 : 2}
            className={styles.klMark5ReportCarousel}
          >
            
            {slide(KLMark5Img3, 'KLMark5Img3')}
            {slide(KLMark5Img4, 'KLMark5Img4')}
            {slide(KLMark5Img1, 'KLMark5Img1')}
            {slide(KLMark5Img2, 'KLMark5Img2')}
            {slide(KLMark5Img5, 'KLMark5Img5')}
            {slide(KLMark5Img6, 'KLMark5Img6')}
          </Carousel>
        </div>
        <div className={styles.klMark5ReportText}>
          <p>{langCollection[`${lang}`].p2}</p>
        </div>
        <div className={styles.klMark5ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={1}
            className={styles.klMark5ReportCarousel}
          >
            {slide(KLMark5Img7, 'KLMark5Img7')}
            {slide(KLMark5Img8, 'KLMark5Img8')}
            {slide(KLMark5Img9, 'KLMark5Img9')}
            {slide(KLMark5Img10, 'KLMark5Img10s')}
          </Carousel>
        </div>
        <div className={styles.klMark5ReportText}>
          <p>{langCollection[`${lang}`].p3}</p>
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
