import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import Sample from '../../../assets/container.mp4';
import Container from '../../../assets/img/container.jpg';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: "Новації",
    p1: "Ми змінили 40-футовий контейнер на 20-фунтовий, зменшивши габарити, зокрема висоту, на 30 см. Це покращило маскування та мобільність пункту під час передислокації.",
    p2: "Конструкція з розсувними стінами дозволяє збільшити внутрішню робочу зону та проводити дві операції одночасно. Час розгортання пункту займає всього до 40 хвилин. Новий KL має двошарове утеплення та вентиляцію для комфортного перебування там 13 осіб. Дизельний генератор, резервні баки та система кондиціонування забезпечують повну автономність шпиталю. Пункт також споряджений модульними моніторами, дефібриляторами, портативним УЗД та іншим необхідним медичним обладнанням.",
  },
  EN: {
    h1: "Innovations",
    p1: "We replaced the 40-foot container with a 20-foot one, reducing the dimensions, including height, by 30 cm. This improved the camouflage and mobility of the point during redeployment.",
    p2: "The design with sliding walls allows for increasing the internal working area and conducting two operations simultaneously. Deployment time of the point takes only up to 40 minutes. The new KL has double insulation and ventilation for the comfortable stay of 13 people. A diesel generator, reserve tanks, and air conditioning system ensure the hospital's full autonomy. The point is also equipped with modular monitors, defibrillators, portable ultrasound, and other necessary medical equipment.",
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
        </div>
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
  isMobile: state.application.isMobile,
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Innovations)
