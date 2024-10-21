import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark4Banner from '../../../assets/img/kl-mark4/new/kl4_1.png';
import KLMark4Img1 from '../../../assets/img/kl-mark4/new/kl4_2_qr.png';
import KLMark4Img2 from '../../../assets/img/kl-mark4/new/kl4_3_qr.png';
import KLMark4Img3 from '../../../assets/img/kl-mark4/new/kl4_4_qr.png';
import KLMark4Img4 from '../../../assets/img/kl-mark4/new/kl4_5_qr.png';
import KLMark4Img5 from '../../../assets/img/kl-mark4/new/kl4_6_qr.png';
import KLMark4Img6 from '../../../assets/img/kl-mark4/new/kl4_7_qr.png';
import KLMark4Img7 from '../../../assets/img/kl-mark4/new/kl4_8_qr.png';

import KLMark4Img8 from '../../../assets/img/kl-mark4/new/kl4_9.png';
import KLMark4Img9 from '../../../assets/img/kl-mark4/new/kl4_10.png';
import KLMark4Img10 from '../../../assets/img/kl-mark4/new/kl4_11.png';
import KLMark4Img11 from '../../../assets/img/kl-mark4/new/kl4_12.png';
import KLMark4Img12 from '../../../assets/img/kl-mark4/new/kl4_13.jpg';
import KLMark4Img13 from '../../../assets/img/kl-mark4/new/kl4_14.jpg';
import KLMark4Img14 from '../../../assets/img/kl-mark4/new/kl4_15.jpg';
import KLMark4Img15 from '../../../assets/img/kl-mark4/new/kl4_16.jpg';
import KLMark4Img16 from '../../../assets/img/kl-mark4/new/kl4_17.jpg';
import KLMark4Img17 from '../../../assets/img/kl-mark4/new/kl4_18.jpg';

import styles from './index.less';

const langCollection = {
  UA: {
    p1: "Четверта модель Keep Life найбільш подібна до другої – 20-футового контейнера з розсувними частинами, які збільшують робочу площу до 27 м². Втім, головна перевага четвертої моделі – відділена передопераційна, в якій є все необхідне для підготовки поранених для подальших операційних втручань.",
    p2: "Передопераційна обладнана в причепі, який можна від’єднати від основного стабілізаційно-хірургічного модуля за потреби. Вона дозволяє максимально полегшити роботу медикам та зберегти стерильність безпосередньо в операційній, адже дуже часто поранених доставляють у стабілізаційні пункти в одязі та амуніції.",
    p3: "До передопераційної та від неї до основного модуля під’єднані пандуси, на які встановлені конструкції для кріплення тентів. Відтак, пацієнтів можна з легкістю на ношах перевезти в хірургічний пункт.",
    p4: "Модулі цієї моделі мають додаткові підпірні конструкції, які дозволяють збільшити навантаження на розсувні частини. Також пункт можна передислоковувати у розкладеному стані за необхідності, що є надважливо під час роботи поблизу лінії зіткнення, де ворог веде постійні обстріли.",
    p5: "Ця модель, як і п’ята, має окремий технічний відсік, у якому розміщені акумулятори, генератор, інвертор, бак з водою, зовнішній блок кондиціонера та приточно-витяжна система вентиляції. Окрім системи кондиціонування, ми додали мобільний повітряний опалювач типу Webasto для підтримки комфортної температури всередині пункту.",
    p6: "Будучи на постійному контакті з медиками, військовими та експертами, ми додали необхідну кількість розеток, світильників та інші важливі речі: сейф для зберігання препаратів, підвісні конструкції з нержавіючої сталі для зручного використання підігрівачів інфузійних розчинів та систем крапельниць, габаритну мийку, призначену спеціально для хірургів.",
    p7: "Також до вже наявних повітряних стерилізаторів ми додали пакувальну машинку для простерилізованих медичних інструментів та ультрафіолетову лампу для їх зберігання."
  },
  EN: {
    p1: "The fourth model of Keep Life is most similar to the second one—a 20-foot container with sliding sections that increase the working area to 27 m². However, the main advantage of the fourth model is the separate pre-operative area, which has everything necessary to prepare wounded individuals for further surgical interventions.",
    p2: "The pre-operative area is equipped in a trailer, which can be detached from the main stabilization and surgical module if needed. It allows for easing the work of medical staff and maintaining sterility in the operating room, as wounded individuals are often brought to stabilization points in clothes and gear.",
    p3: "Ramps are connected to the pre-operative area and from it to the main module, on which tent frames are installed. This makes it easy to transport patients on stretchers to the surgical unit.",
    p4: "The modules of this model have additional support structures that allow for increased load on the sliding sections. The unit can also be relocated in a deployed state if necessary, which is extremely important when working near the frontlines where the enemy constantly shells.",
    p5: "Like the fifth model, this one has a separate technical compartment that houses batteries, a generator, an inverter, a water tank, an external air conditioning unit, and a supply-exhaust ventilation system. In addition to the air conditioning system, we added a Webasto-type mobile air heater to maintain a comfortable temperature inside the unit.",
    p6: "Being in constant contact with medical staff, military personnel, and experts, we added the necessary number of sockets, lights, and other essential items: a safe for storing medications, stainless steel hanging structures for convenient use of infusion solution warmers and drip systems, and a large sink designed specifically for surgeons.",
    p7: "We also added a packing machine for sterilized medical instruments and an ultraviolet lamp for their storage, alongside the existing air sterilizers."
}
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
            {/* {slide(KLMark4Img1, 'KLMark4Img1')} */}
            {slide(KLMark4Img4, 'KLMark4Img4')}
            {slide(KLMark4Img2, 'KLMark4Img2')}
            {slide(KLMark4Img3, 'KLMark4Img3')}
            {slide(KLMark4Img7, 'KLMark4Img7')}
            {slide(KLMark4Img6, 'KLMark4Img6')}
            {slide(KLMark4Img5, 'KLMark4Img5')}
          </Carousel>
        </div>

        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p3}</p>
        </div>
        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p4}</p>
        </div>
        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p5}</p>
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
            {slide(KLMark4Img8, 'KLMark4Img8')}
            {slide(KLMark4Img12, 'KLMark4Img12')}
            {slide(KLMark4Img14, 'KLMark4Img14')}
            {slide(KLMark4Img13, 'KLMark4Img13')}
            {slide(KLMark4Img16, 'KLMark4Img16')}
            {slide(KLMark4Img15, 'KLMark4Img15')}
            {slide(KLMark4Img17, 'KLMark4Img17')}
            {slide(KLMark4Img9, 'KLMark4Img9')}
            {slide(KLMark4Img10, 'KLMark4Img10')}
            {slide(KLMark4Img11, 'KLMark4Img11')}
          </Carousel>
        </div>
        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p6}</p>
        </div>
        <div className={styles.klMark4ReportText}>
          <p>{langCollection[`${lang}`].p7}</p>
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
