import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import KLMark1Img1 from '../../../assets/img/kl-mark1/kl1_1.jpg';
import KLMark1Img2 from '../../../assets/img/kl-mark1/kl1_2.jpg';
import KLMark1Img3 from '../../../assets/img/kl-mark1/kl1_3.jpg';
import KLMark1Img4 from '../../../assets/img/kl-mark1/kl1_4.jpg';
import KLMark1Img5 from '../../../assets/img/kl-mark1/kl1_5.jpg';
import KLMark1Img6 from '../../../assets/img/kl-mark1/kl1_6.jpg';
import KLMark1Img7 from '../../../assets/img/kl-mark1/kl1_7.jpg';
import KLMark1Img8 from '../../../assets/img/kl-mark1/kl1_8.jpg';
import KLMark1Img9 from '../../../assets/img/kl-mark1/kl1_9.jpg';
import KLMark1Img10 from '../../../assets/img/kl-mark1/kl1_10.jpg';
import KLMark1Img11 from '../../../assets/img/kl-mark1/kl1_11.jpg';
import KLMark1Img12 from '../../../assets/img/kl-mark1/kl1_12.jpg';
import KLMark1Img13 from '../../../assets/img/kl-mark1/kl1_13.jpg';
import KLMark1Img14 from '../../../assets/img/kl-mark1/kl1_14.jpg';


// import MissionSlide1 from '../../../assets/img/mission-slide1.jpg'
// import MissionSlide2 from '../../../assets/img/mission-slide2.jpg'
// // import MissionSlide3 from '../../../assets/img/mission-slide3.jpg'
// import MissionSlide4 from '../../../assets/img/mission-slide4.jpg'
// import MissionSlide5 from '../../../assets/img/mission-slide5.jpg'
// import MissionSlide6 from '../../../assets/img/mission-slide6.jpg'
// import Gallery3Img from '../../../assets/img/gallery3.jpg';
// import Gallery4Img from '../../../assets/img/gallery4.jpg';
// import Gallery7Img from '../../../assets/img/gallery7.jpg';
// import Gallery9Img from '../../../assets/img/gallery9.jpg';
// import GalleryImgNew1 from '../../../assets/img/gallery_new_1.jpg';
import styles from './index.less';

const langCollection = {
  UA: {
    p1: "Історія «Keep Life» почалася з того, що група волонтерів, розуміючи нагальну потребу в мобільних стабілізаційних пунктах на фронті, самостійно почала виготовлення модулів з нуля. При цьому вони мали лише теоретичні знання та створювали перші стабпункти без креслень та чітких уявлень, яким буде кінцевий результат.",
    p2: "Вже з часом це стало тим, чим є зараз: від групи людей, які в дощ та сніг збирали металеві конструкції  без необхідного обладнання до масштабного проекту з чітким планом, графіками виконаних робіт, застосуванням сучасних технологій, постійною комунікацією з медиками та військовими експертами.",
    p3: "23 грудня 2022 року волонтери передали перший мобільний стабілізаційний пункт представникам Міністерства оборони. Наразі в ньому медики проводять хірургічні операції підвищеної складності поблизу лінії активних бойових дій на Запоріжжі.",
    p4: "Проект першого Keep Life від самого початку був під патронатом колишнього командувача Медичних сил Збройних Сил України, бригадного генерала медичної служби – Тетяни Миколаївни Остащенко. Консультаційну підтримку також здійснювали лікарі-фахівці військово-медичного клінічного центру Західного регіону МОУ.",
    p5: "Для цього проекту ми використали контейнер, який укріпили та утеплили. Мобільний шпиталь складається з повноцінних передопераційної та операційно-санітарної кімнат, душової кабіни та міні-лабораторії.",
    p6: "Він є повністю автономним та може працювати за відсутності енергопостачання до 4 днів. Модуль оснащений двома потужними генераторами, баком для дизельного палива на 300 л, акумуляторними батареями, ємностями водопостачання та водовідведення.",
    p7: "Стабпункт також оснащений системами вентиляції та кондиціонування, а також по контейнеру розведена електрика. Внутрішні поверхні вкриті волого- та зносостійкою фарбою. Комплектація шпиталю включає в себе сучасне медичне обладнання."
  },
  EN: {
    p1: "The history of 'Keep Life' began when a group of volunteers, understanding the urgent need for mobile stabilization points at the front, started making the modules from scratch by themselves. They had only theoretical knowledge and created the first stabilization points without drawings or a clear idea of what the final result would be.",
    p2: "Over time, this evolved into what it is now: from a group of people assembling metal structures in rain and snow without the necessary equipment to a large-scale project with a clear plan, work schedules, the use of modern technologies, and constant communication with medical and military experts.",
    p3: "On December 23, 2022, volunteers handed over the first mobile stabilization point to representatives of the Ministry of Defense. Currently, in this unit, doctors perform complex surgical operations near the line of active combat in the Zaporizhzhia region.",
    p4: "The first Keep Life project was initially under the patronage of the former commander of the Medical Forces of the Armed Forces of Ukraine, Brigadier General of the Medical Service – Tetiana Mykolaivna Ostashchenko. Consultation support was also provided by specialist doctors from the Military Medical Clinical Center of the Western Region of the Ministry of Defense.",
    p5: "For this project, we used a container, which we reinforced and insulated. The mobile hospital consists of full-fledged preoperative and surgical sanitary rooms, a shower cabin, and a mini-laboratory.",
    p6: "It is completely autonomous and can operate without power supply for up to 4 days. The module is equipped with two powerful generators, a 300-liter diesel fuel tank, rechargeable batteries, and water supply and drainage tanks.",
    p7: "The stabilization point is also equipped with ventilation and air conditioning systems, and electricity is distributed throughout the container. The internal surfaces are covered with moisture and wear-resistant paint. The hospital's equipment includes modern medical devices."
  },
};

const KLMark1Report = ({ isMobile, lang }) => {
  const slide = (image, key) => {
    return (
      <div className={styles.klMark1ReportSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <section id="klMark1Report" className={styles.klMark1Report}>
      <div className={styles.klMark1ReportWrap}>
        <div className={styles.klMark1ReportBanner}>
          <img alt={'KL Mark1 Report Banner'} src={KLMark1Img9} style={{ width: '100%' }} className={styles.klMark1ReportBannerImg} />
        </div>

        <h1 className={styles.klMark1ReportTitle}>Keep Life Mark 1</h1>
        
        <div className={styles.klMark1ReportText}>
          <p>{langCollection[`${lang}`].p1}</p>
          <p>{langCollection[`${lang}`].p2}</p>
          <p>{langCollection[`${lang}`].p3}</p>
        </div>

        <div className={styles.klMark1ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={1}
            className={styles.klMark1ReportCarousel}
          >
            {slide(KLMark1Img8, 'KLMark1Img8')}
            {slide(KLMark1Img7, 'KLMark1Img7')}
            {slide(KLMark1Img5, 'KLMark1Img5')}
            {slide(KLMark1Img10, 'KLMark1Img10')}
            {slide(KLMark1Img12, 'KLMark1Img12')}
          </Carousel>
        </div>
        <div className={styles.klMark1ReportText}>
          <p>{langCollection[`${lang}`].p4}</p>
          <p>{langCollection[`${lang}`].p5}</p>
        </div>
        <div className={styles.klMark1ReportSlides}>
          <Carousel
            infinite
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            slidesPerRow={1}
            className={styles.klMark1ReportCarousel}
          >
            {slide(KLMark1Img1, 'KLMark1Img1')}
            {slide(KLMark1Img2, 'KLMark1Img2')}
            {slide(KLMark1Img3, 'KLMark1Img3')}
            {slide(KLMark1Img4, 'KLMark1Img4')}
            {slide(KLMark1Img13, 'KLMark1Img13')}
            {slide(KLMark1Img14, 'KLMark1Img14')}
            {slide(KLMark1Img11, 'KLMark1Img11')}
            {slide(KLMark1Img6, 'KLMark1Img6')}
          </Carousel>
        </div>
        <div className={styles.klMark1ReportText}>
          <p>{langCollection[`${lang}`].p6}</p>
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
