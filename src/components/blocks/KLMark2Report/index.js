import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark2Img1 from '../../../assets/img/kl-mark2/kl2_1.jpg';
import KLMark2Img2 from '../../../assets/img/kl-mark2/kl2_2.jpg';
import KLMark2Img3 from '../../../assets/img/kl-mark2/kl2_3.jpg';
import KLMark2Img4 from '../../../assets/img/kl-mark2/kl2_4.jpg';
import KLMark2Img5 from '../../../assets/img/kl-mark2/kl2_5.jpg';
import KLMark2Img6 from '../../../assets/img/kl-mark2/kl2_6.jpg';
import KLMark2Img7 from '../../../assets/img/kl-mark2/kl2_7.jpg';
import KLMark2Img8 from '../../../assets/img/kl-mark2/kl2_8.jpg';
import KLMark2Img9 from '../../../assets/img/kl-mark2/kl2_9.jpg';
import KLMark2Img10 from '../../../assets/img/kl-mark2/kl2_10.jpg';
import KLMark2Img11 from '../../../assets/img/kl-mark2/kl2_11.jpg';
import KLMark2Img12 from '../../../assets/img/kl-mark2/kl2_12.jpg';

import styles from './index.less';

const langCollection = {
  UA: {
    p1: "Друга вдосконалена модель Keep Life була створена на базі вдвічі меншого 20-футового контейнера з розкладними конструкціями, що дозволило зберегти внутрішню робочу площу та розмістити там два робочі місця для хірургів, щоб проводити кілька операцій одночасно. Таким чином, пропускна можливість пункту збільшилася і медики можуть врятувати більше життів.",
    p2: "Також для другої моделі встановили потужнішу вентиляцію, завдяки цьому в контейнері одночасно можуть перебувати до 13 осіб, та збільшили об’єм баку для води до 600 літрів. Окрім того, два генератори замінили на один з більшими технічними можливостями.",
    p3: "Цей проект був запущений, враховуючи побажання та зауваження медиків, які працюють на передовій. Основними вимогами до стабпункту залишилися мобільність, автономність, швидке розгортання та безпека. Однак, основною перевагою моделі є автономність контейнера від автівки. Модуль можна зняти та встановити його в будь-якому доступному для цього місці.",
  },
  EN: {
    p1: "The second improved model of Keep Life was created based on a container that is twice as small, a 20-foot container with folding structures. This allowed for maintaining the internal working area and accommodating two workstations for surgeons, enabling multiple surgeries to be performed simultaneously. Thus, the throughput of the unit increased, allowing medical personnel to save more lives.",
    p2: "Additionally, the second model features a more powerful ventilation system, allowing up to 13 people to be inside the container at the same time. The water tank capacity was also increased to 600 liters. Moreover, two generators were replaced with one that has greater technical capabilities.",
    p3: "This project was launched taking into account the wishes and comments of medics working on the front lines. The main requirements for the mobile unit remained mobility, autonomy, quick deployment, and safety. However, the main advantage of the model is the container's independence from the vehicle. The module can be removed and installed in any suitable location.",
  },
};







const KLMark1Report = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.klMark2ReportSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="klMark2Report" className={styles.klMark2Report}>
      <div className={styles.klMark2ReportWrap}>
        <div className={styles.klMark2ReportBanner}>
          <img alt={'KL Mark2 Report Banner'} src={KLMark2Img2} style={{ width: '100%' }} className={styles.klMark2ReportBannerImg} />
        </div>

        <h1 className={styles.klMark2ReportTitle}>Keep Life Mark 2</h1>
        
        <div className={styles.klMark2ReportText}>
          <p>{langCollection[`${lang}`].p1}</p>
        </div>

        <div className={styles.klMark2ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={1}
            className={styles.klMark2ReportCarousel}
          >
            {slide(KLMark2Img12, 'KLMark2Img12')}
            {slide(KLMark2Img3, 'KLMark2Img3')}
            {slide(KLMark2Img4, 'KLMark2Img4')}
            {slide(KLMark2Img5, 'KLMark2Img5')}
          </Carousel>
        </div>

        <div className={styles.klMark2ReportText}>
          <p>{langCollection[`${lang}`].p2}</p>
        </div>
        <div className={styles.klMark2ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={1}
            className={styles.klMark2ReportCarousel}
          >
            {slide(KLMark2Img11, 'KLMark2Img11')}
            {slide(KLMark2Img6, 'KLMark2Img6')}
            {slide(KLMark2Img9, 'KLMark2Img9')}
            {slide(KLMark2Img8, 'KLMark2Img8')}
            {slide(KLMark2Img7, 'KLMark2Img7')}
            
            {slide(KLMark2Img10, 'KLMark2Img10')}
            
          </Carousel>
        </div>
        <div className={styles.klMark2ReportText}>
          <p>{langCollection[`${lang}`].p3}</p>
        </div>
        <div className={styles.klMark2ReportBanner}>
          <img alt={'KL Mark2 Report Banner'} src={KLMark2Img1} style={{ width: '100%' }} className={styles.klMark2ReportBannerImg} />
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
