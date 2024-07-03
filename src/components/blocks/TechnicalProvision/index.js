import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import ArrowsImg from '../../../svg/arrows.svg';
import BarrelImg from '../../../svg/barrel.svg';
import BatteryImg from '../../../svg/battery.svg';
import CarImg from '../../../svg/car.svg';
import CmndImg from '../../../svg/cmnd.svg';
import FireImg from '../../../svg/fire.svg';
import LightImg from '../../../svg/light.svg';
import WaterImg from '../../../svg/water.svg';
import WindKeeperImg from '../../../svg/windKeeper.svg';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ ХІРУРГІЇ',
    p1: 'ВАНТАЖІВКА',
    p2: 'МЕТАЛЕВИЙ МОДУЛЬ',
    p3: 'РОЗСУВНА КОНСТРУКЦІЯ',
    p4: 'АВАРІЙНИЙ АКУМУЛЯТОР',
    p5: 'ВЕНТИЛЯЦІЯ',
    p6: 'ОПАЛЕННЯ',
    p7: 'ДИЗЕЛЬНИЙ ГЕНЕРАТОР',
    p8: 'ПАЛИВНИЙ БАК',
    p9: 'ВОДЯНИЙ БАК',
  },
  EN: {
    h1: 'TECHNICAL SUPPLY OF SURGERY',
    p1: 'Truck',
    p2: 'Metal module',
    p3: 'Sliding structure',
    p4: 'Emergency battery',
    p5: 'Ventilation',
    p6: 'Heating',
    p7: 'Diesel generator',
    p8: 'Fuel tank',
    p9: 'Water tank',
  }
};

const TechnicalProvision = ({ isMobile, lang }) => {
  const item = (img, text) => {
    return (
      <div className={styles.technicalProvisionItem}>
        <div className={styles.technicalProvisionItemImg}>
          <img alt={text} src={img} />
        </div>
        <p className={styles.technicalProvisionItemText}>{text}</p>
      </div>
    )
  }

  return (
    <section id="technicalProvision" className={styles.technicalProvision}>
      <div className={styles.technicalProvisionWrap}>
        <h3 className={styles.technicalProvisionHeader}>{langCollection[`${lang}`].h1}</h3>
        <div className={styles.technicalProvisionList}>
          {item(CarImg, langCollection[`${lang}`].p1)}
          {item(CmndImg, langCollection[`${lang}`].p2)}
          {item(ArrowsImg, langCollection[`${lang}`].p3)}
          {item(BatteryImg, langCollection[`${lang}`].p4)}
          {item(WindKeeperImg, langCollection[`${lang}`].p5)}
          {item(FireImg, langCollection[`${lang}`].p6)}
          {item(LightImg, langCollection[`${lang}`].p7)}
          {item(BarrelImg, langCollection[`${lang}`].p8)}
          {item(WaterImg, langCollection[`${lang}`].p9)}
        </div>
      </div>
    </section>
  );
}

TechnicalProvision.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(TechnicalProvision)
