import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark4Banner from '../../../assets/img/kl-mark4/kl4_7.jpg';
import KLMark4Img1 from '../../../assets/img/kl-mark4/kl4_1.jpg';
import KLMark4Img2 from '../../../assets/img/kl-mark4/kl4_2.jpg';
import KLMark4Img3 from '../../../assets/img/kl-mark4/kl4_3.jpg';
import KLMark4Img4 from '../../../assets/img/kl-mark4/kl4_4.jpg';

import styles from './index.less';

const langCollection = {
  UA: {
    p1: "Четверта модель Keep Life стала першим кроком до серійного виробництва мобільних шпиталів. Ми розробили всі необхідні креслення та запустили виробництво на заводі. До цього всі модулі ми збирали самостійно у непризначених для цього місцях. Це важливо, бо так ми можемо мінімізувати час на виготовлення кожного контейнера та швидше забезпечити ними усі ділянки фронту.",
    p2: "У цій моделі ми збільшили каркас на 50 см, а також врахували побажання медиків щодо комфортної висоти контейнера. Окрім того, модуль буде затягнений арамідною тканиною (кевларом), яка забезпечує захист від дрібних уламків.",
    p3: "Щодо внутрішнього оснащення, ми додали ще одну мийку та сейф, замість балонів встановили додатковий кисневий концентратор. Також ми посилили автономність модуля за рахунок акумулятора, який забезпечує функціонування ще протягом 8 годин після від’єднання від електромережі."
  },
  EN: {
    p1: "The fourth model of Keep Life marks the first step towards serial production of mobile hospitals. We developed all the necessary blueprints and launched production at a factory. Previously, we assembled all the modules ourselves in locations not suited for this purpose. This is important because it allows us to minimize the manufacturing time for each container and more quickly supply them to all frontline areas.",
    p2: "In this model, we increased the frame by 50 cm and considered the medics' requests for a comfortable container height. Additionally, the module will be covered with aramid fabric (Kevlar), which provides protection against small fragments.",
    p3: "Regarding internal equipment, we added an extra sink and a safe, and instead of cylinders, we installed an additional oxygen concentrator. We also enhanced the module's autonomy with a battery that ensures operation for another 8 hours after being disconnected from the power grid."
  },
};

const KLMark1Report = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.klMark4ReportSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="klMark4Report" className={styles.klMark4Report}>
      <div className={styles.klMark4ReportWrap}>
        <div className={styles.klMark4ReportBanner}>
          <img alt={'KL Mark4 Report Banner'} src={KLMark4Banner} style={{ width: '100%' }} className={styles.klMark4ReportBannerImg} />
        </div>

        <h1 className={styles.klMark4ReportTitle}>Keep Life Mark 4</h1>
        
        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p1}</p>
          <p>{langCollection[`${lang}`].p2}</p>
        </div>

        <div className={styles.klMark4ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={isMobile ? 1 : 2}
            className={styles.klMark4ReportCarousel}
          >
            {slide(KLMark4Img1, 'KLMark4Img1')}
            {slide(KLMark4Img2, 'KLMark4Img2')}
            {slide(KLMark4Img3, 'KLMark4Img3')}
            {slide(KLMark4Img4, 'KLMark4Img4')}
          </Carousel>
        </div>

        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p3}</p>
        </div>
        <div className={styles.klMark4ReportText}>
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
