import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import Sample from '../../../assets/container.mp4';
import Container from '../../../assets/img/container.jpg';
import styles from './index.less';

const langCollection = {
  // UA: {
  //   h1: "Новації",
  //   p1: "Ми змінили 40-футовий контейнер на 20-фунтовий, зменшивши габарити, зокрема висоту, на 30 см. Це покращило маскування та мобільність пункту під час передислокації.",
  //   p2: "Конструкція з розсувними стінами дозволяє збільшити внутрішню робочу зону та проводити дві операції одночасно. Час розгортання пункту займає всього до 40 хвилин. Новий KL має двошарове утеплення та вентиляцію для комфортного перебування там 13 осіб. Дизельний генератор, резервні баки та система кондиціонування забезпечують повну автономність шпиталю. Пункт також споряджений модульними моніторами, дефібриляторами, портативним УЗД та іншим необхідним медичним обладнанням.",
  // },
  // EN: {
  //   h1: "Innovations",
  //   p1: "We replaced the 40-foot container with a 20-foot one, reducing the dimensions, including height, by 30 cm. This improved the camouflage and mobility of the point during redeployment.",
  //   p2: "The design with sliding walls allows for increasing the internal working area and conducting two operations simultaneously. Deployment time of the point takes only up to 40 minutes. The new KL has double insulation and ventilation for the comfortable stay of 13 people. A diesel generator, reserve tanks, and air conditioning system ensure the hospital's full autonomy. The point is also equipped with modular monitors, defibrillators, portable ultrasound, and other necessary medical equipment.",
  // },
  UA: {
    h1: "Новації",
    p1: "Наші пункти створюються на базі металевих модулів та мають розсувні конструкції, які збільшують їхню загальну площу до 28 м².",
    p2: "Сучасні технології та власні інновації дозволяють забезпечити максимальну ефективність попри незначні габарити пунктів. Ми передаємо модулі готові до використання та повністю обладнані усім необхідним.",
    p3: "Автономне функціонування дає можливість їм працювати ефективно, навіть за відсутність комунікацій. Це робить модульні станції ідеальним вибором для впровадження на прифронтових територіях, де ворог постійно знищує інфраструктуру.",
    tm_title: 'Типи модулів',
    tm_1: 'ХІРУРГІЯ',
    tm_2: 'ТЕРАПІЯ',
    tm_3: 'СТОМАТОЛОГІЯ',
    tm_4: 'ГІНЕГОЛОГІЯ',
    tm_5: 'КОМАНДНИЙ ШТАБ',
    tm_6: 'ПУНКТ УПРАВЛІННЯ ДРОНАМИ',
    tm_7: 'РЕМОНТНИЙ ШТАБ',
    tm_8: 'МОБІЛЬНА КУХНЯ',
    tm_9: 'ПРАЛЬНО-БАННИЙ КОМПЛЕКС',
  },
  EN: {
    h1: "Innovations",
    p1: "Our points are created on the basis of metal modules and have sliding structures that increase their total area to 28 m².",
    p2: "Modern technologies and our own innovations allow us to ensure maximum efficiency despite the small dimensions of the points. We deliver modules ready for use and fully equipped with everything you need.",
    p3: "Autonomous operation allows them to work effectively, even in the absence of communications. This makes modular stations an ideal choice for deployment in front-line areas where the enemy is constantly destroying infrastructure.",
    tm_title: 'Types of Modules',
    tm_1: 'Surgery',
    tm_2: 'Therapy',
    tm_3: 'Dentistry',
    tm_4: 'Gynecology',
    tm_5: 'Command Center',
    tm_6: 'Drone Control Point',
    tm_7: 'Repair Center',
    tm_8: 'Mobile Kitchen',
    tm_9: 'Laundry and Bath Complex'
  },
};

const Innovations = ({ isMobile, lang }) => {
  return (
    <section id="innovations" className={styles.innovations}>
      <div className={styles.innovationsWrap}>
        <div className={styles.innovationsDescr}>
          <h3>{langCollection[`${lang}`].h1}</h3>
          <p>{langCollection[`${lang}`].p1}</p>
          <p>{langCollection[`${lang}`].p2}</p>
          <p>{langCollection[`${lang}`].p3}</p>

          <div className={styles.innovationsDescrList}>
            <p>{langCollection[`${lang}`].tm_title}</p>
            <ul>
              <li>{langCollection[`${lang}`].tm_1}</li>
              <li>{langCollection[`${lang}`].tm_2}</li>
              <li>{langCollection[`${lang}`].tm_3}</li>
              <li>{langCollection[`${lang}`].tm_4}</li>
              <li>{langCollection[`${lang}`].tm_5}</li>
              <li>{langCollection[`${lang}`].tm_6}</li>
              <li>{langCollection[`${lang}`].tm_7}</li>
              <li>{langCollection[`${lang}`].tm_8}</li>
              <li>{langCollection[`${lang}`].tm_9}</li>
            </ul>
          </div>
        </div>
        {/* <div className={styles.innovationsDescrList}>
          <p>{langCollection[`${lang}`].tm_title}</p>
          <ul>
            <li>{langCollection[`${lang}`].tm_1}</li>
            <li>{langCollection[`${lang}`].tm_2}</li>
            <li>{langCollection[`${lang}`].tm_3}</li>
            <li>{langCollection[`${lang}`].tm_4}</li>
            <li>{langCollection[`${lang}`].tm_5}</li>
            <li>{langCollection[`${lang}`].tm_6}</li>
            <li>{langCollection[`${lang}`].tm_7}</li>
            <li>{langCollection[`${lang}`].tm_8}</li>
            <li>{langCollection[`${lang}`].tm_9}</li>
          </ul>
        </div> */}
        <div className={styles.innovationsVideo}>
          {
            Sample
              ? <video width="100%" height="100%" autoPlay muted loop playsInline poster={Container} src={Sample} >
                <source src={Sample} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              : <img alt='video' src={Container} width="100%" height="100%" />
          }
        </div>
      </div>
    </section>
  );
}

Innovations.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(Innovations)
