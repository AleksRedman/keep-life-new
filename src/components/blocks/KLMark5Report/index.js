import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark5Banner from '../../../assets/img/kl-mark5/new/kl5_1.jpg';
import KLMark5Img1 from '../../../assets/img/kl-mark5/new/kl5_3_sq.png';
import KLMark5Img2 from '../../../assets/img/kl-mark5/new/kl5_2_sq.png';
import KLMark5Img3 from '../../../assets/img/kl-mark5/new/kl5_4_sq.png';
import KLMark5Img4 from '../../../assets/img/kl-mark5/new/kl5_5_sq.png';
import KLMark5Img5 from '../../../assets/img/kl-mark5/new/kl5_6_sq.png';
import KLMark5Img6 from '../../../assets/img/kl-mark5/new/kl5_7_sq.png';

import KLMark5Img7 from '../../../assets/img/kl-mark5/new/kl5_8.jpg';
import KLMark5Img8 from '../../../assets/img/kl-mark5/new/kl5_9.jpg';
import KLMark5Img9 from '../../../assets/img/kl-mark5/new/kl5_10.jpg';
import KLMark5Img10 from '../../../assets/img/kl-mark5/new/kl5_11.jpg';
import KLMark5Img11 from '../../../assets/img/kl-mark5/new/kl5_12.jpg';

import styles from './index.less';

const langCollection = {
  UA: {
    p1: "П’ята модель Keep Life стала першим кроком до серійного виробництва мобільних стабілізаційно-хірургічних пунктів. Наша команда розробила всі необхідні креслення та запустила виробництво металевої конструкції з нуля. Таким чином вдалося пришвидшити процес, що в подальшому допоможе забезпечити стабпунктами усі ділянки фронту в коротші терміни.",
    p2: "У цій моделі інженери збільшили ширину каркасу на 50 см, що дозволило збільшити робочу площу до 27 м², а також відкоригували внутрішню висоту контейнера, відповідно до запитів медиків. Окрім опорних лап, які забезпечують статичність усього модуля, додалися підпірні конструкції, які дозволяють збільшити навантаження на розсувні частини. Що важливо, модулі можна передислоковувати у розкладеному стані за необхідності.",
    p3: "Ця модель має окремий технічний відсік, у якому розміщені акумулятори, генератор, інвертор, бак з водою, зовнішній блок кондиціонера та приточно-витяжна система вентиляції. Окрім системи кондиціонування, ми додали мобільний повітряний опалювач типу Webasto для підтримки комфортної температури всередині пункту.",
    p4: "Також ми помістили кисневі концентратори у нішу в технічному відсіку та забезпечили забір кисню не з модуля, а від вентиляційної системи. На запит медиків ми прибрали дверці майже у всіх полицях та додали підвісні конструкції з нержавіючої сталі для зручного використання підігрівачів інфузійних розчинів та систем крапельниць.",
    p5: "Проектанти спільно з медиками прорахували необхідну кількість світильників, розеток, кисневих виходів та їхнього розміщення. Це надзвичайно важливо для подальшого розміщення та під\'єднання медичного обладнання."
  },
  EN: {
    p1: "The fifth model of Keep Life became the first step towards mass production of mobile stabilization and surgical units. Our team developed all the necessary blueprints and launched the production of the metal structure from scratch. This helped speed up the process, which will further ensure that stabilization points are provided across all frontlines in shorter timeframes.",
    p2: "In this model, the engineers increased the width of the frame by 50 cm, which allowed the working area to be expanded to 27 m², and also adjusted the internal height of the container according to medical requests. In addition to the supporting legs that ensure the module’s stability, support structures were added to allow for increased load on the sliding parts. Importantly, the modules can be relocated while in the deployed state, if necessary.",
    p3: "This model has a separate technical compartment that houses batteries, a generator, an inverter, a water tank, the external air conditioning unit, and the supply-exhaust ventilation system. Apart from the air conditioning system, we also added a Webasto-type mobile air heater to maintain a comfortable temperature inside the unit.",
    p4: "We also placed oxygen concentrators in a niche within the technical compartment and ensured oxygen intake not from the module itself, but through the ventilation system. At the request of the medical team, we removed doors from almost all shelves and added hanging stainless steel structures for the convenient use of infusion solution warmers and drip systems.",
    p5: "Designers, together with medical staff, calculated the necessary number of lights, sockets, and oxygen outlets, along with their placement. This is extremely important for the subsequent placement and connection of medical equipment."
  }
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
            {slide(KLMark5Img2, 'KLMark5Img2')}
            {slide(KLMark5Img3, 'KLMark5Img3')}
            {slide(KLMark5Img6, 'KLMark5Img6')}
            {slide(KLMark5Img5, 'KLMark5Img5')}
            {slide(KLMark5Img4, 'KLMark5Img4')}
            {slide(KLMark5Img1, 'KLMark5Img1')}
            
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
            slidesPerRow={isMobile ? 1 : 2}
            className={styles.klMark5ReportCarousel}
          >
            {slide(KLMark5Img7, 'KLMark5Img7')}
            {slide(KLMark5Img8, 'KLMark5Img8')}
            {slide(KLMark5Img9, 'KLMark5Img9')}
            {slide(KLMark5Img10, 'KLMark5Img10')}
            {slide(KLMark5Img11, 'KLMark5Img11')}
          </Carousel>
        </div>
        <div className={styles.klMark5ReportText}>
          <p>{langCollection[`${lang}`].p3}</p>
        </div>
        <div className={styles.klMark5ReportText}>
          <p>{langCollection[`${lang}`].p4}</p>
        </div>
        <div className={styles.klMark5ReportText}>
          <p>{langCollection[`${lang}`].p5}</p>
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
