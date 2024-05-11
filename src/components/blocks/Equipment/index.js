import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import Equip1Img from '../../../assets/img/equip1.png';
import Equip2Img from '../../../assets/img/equip2.png';
import Equip3Img from '../../../assets/img/equip3.png';
import Equip4Img from '../../../assets/img/equip4.png';
import Equip5Img from '../../../assets/img/equip5.png';
import Equip6Img from '../../../assets/img/equip6.png';
import Equip7Img from '../../../assets/img/equip7.png';
import Equip8Img from '../../../assets/img/equip8.jpeg';
import Equip9Img from '../../../assets/img/equip9.png';
import Equip10Img from '../../../assets/img/equip10.png';
import Equip11Img from '../../../assets/img/equip11.png';
import Equip12Img from '../../../assets/img/equip12.png';
import Equip13Img from '../../../assets/img/equip13.png';
import Equip14Img from '../../../assets/img/equip14.png';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: 'МЕДИЧНЕ ОБЛАДНАННЯ',
    p1: 'Апарат вентиляції легень S1100A',
    p2: 'Концентратор кисню AE-10 Brightfield',
    p3: 'Модульний монітор Osen8000Е',
    p4: 'Насос шприцевий OSP-500',
    p5: 'Електрокоагулятор BOWA ARC303',
    p6: 'Операційна лампа Maestro LED300 ',
    p7: 'Стіл операційний TDY-1',
    p8: 'Стерилізатор паровий малий Q70B',
    p9: 'Аспіратор хірургічний Aspira Go',
    p10: 'Холодильник NYC-68A',
    p11: 'Дефібрилятор Defi 8',
    p12: 'ПортативнийУЗИ 1 DP10 Mindray',
    p13: 'Рентген EcoRay ULTRA 100',
    p14: 'ІВЛ портативний Oxylog® 3000 plus'
  },
  EN: {
    h1: 'Medical Equipment',
    p1: 'S1100A lung ventilation machine',
    p2: 'AE-10 Brightfield oxygen concentrator',
    p3: 'Osen8000E modular monitor',
    p4: 'OSP-500 syringe pump',
    p5: 'BOWA ARC303 electrosurgical unit',
    p6: 'Maestro LED300 operating lamp',
    p7: 'TDY-1 operating table',
    p8: 'Small steam sterilizer Q70B',
    p9: 'Aspira Go surgical aspirator',
    p10: 'NYC-68A refrigerator',
    p11: 'Defi 8 defibrillator',
    p12: 'Portable ultrasound DP10 Mindray',
    p13: 'EcoRay ULTRA 100 X-ray machine',
    p14: 'Portable ventilator Oxylog® 3000 plus',
  },
};

const Equipment = ({ isMobile, lang }) => {
  const equip = (image, key, label, longLabel) => {
    return (
      <div className={styles.equipImagesListItem}>
        <div className={styles.equipImagesListItemImgWrap}>
          <div className={styles.equipImagesListItemImgContent}>
            <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.equipImagesListItemImg} />
          </div>
        </div>
        <span className={styles.equipImagesListItemLabel}>{isMobile ? longLabel : label}</span>
      </div>
    )
  }

  return (
    <section id="equipment" className={styles.equip}>
      <div className={styles.equipWrap}>
        <div className={styles.equipImagesList}>
          {equip(Equip1Img, 'Equip1Img', '1', langCollection[`${lang}`].p1)}
          {equip(Equip2Img, 'Equip2Img', '2', langCollection[`${lang}`].p2)}
          {equip(Equip3Img, 'Equip3Img', '3', langCollection[`${lang}`].p3)}
          {equip(Equip4Img, 'Equip4Img', '4', langCollection[`${lang}`].p4)}
          {equip(Equip5Img, 'Equip5Img', '5', langCollection[`${lang}`].p5)}
          {equip(Equip6Img, 'Equip6Img', '6', langCollection[`${lang}`].p6)}
          {equip(Equip7Img, 'Equip7Img', '7', langCollection[`${lang}`].p7)}
          {equip(Equip8Img, 'Equip8Img', '8', langCollection[`${lang}`].p8)}
          {equip(Equip9Img, 'Equip9Img', '9', langCollection[`${lang}`].p9)}
          {equip(Equip10Img, 'Equip10Img', '10', langCollection[`${lang}`].p10)}
          {equip(Equip11Img, 'Equip11Img', '11', langCollection[`${lang}`].p11)}
          {equip(Equip12Img, 'Equip12Img', '12', langCollection[`${lang}`].p12)}
          {equip(Equip13Img, 'Equip13Img', '13', langCollection[`${lang}`].p13)}
          {equip(Equip14Img, 'Equip14Img', '14', langCollection[`${lang}`].p14)}
        </div>
        <div className={styles.equipList}>
          <h3 className={styles.equipTitle}>{langCollection[`${lang}`].h1}</h3>
          <div className={styles.equipListWrap}>
            <div className={styles.equipListItem}><span>1</span><span>{langCollection[`${lang}`].p1}</span></div>
            <div className={styles.equipListItem}><span>2</span><span>{langCollection[`${lang}`].p2}</span></div>
            <div className={styles.equipListItem}><span>3</span><span>{langCollection[`${lang}`].p3}</span></div>
            <div className={styles.equipListItem}><span>4</span><span>{langCollection[`${lang}`].p4}</span></div>
            <div className={styles.equipListItem}><span>5</span><span>{langCollection[`${lang}`].p5}</span></div>
            <div className={styles.equipListItem}><span>6</span><span>{langCollection[`${lang}`].p6}</span></div>
            <div className={styles.equipListItem}><span>7</span><span>{langCollection[`${lang}`].p7}</span></div>
            <div className={styles.equipListItem}><span>8</span><span>{langCollection[`${lang}`].p8}</span></div>
            <div className={styles.equipListItem}><span>9</span><span>{langCollection[`${lang}`].p9}</span></div>
            <div className={styles.equipListItem}><span>10</span><span>{langCollection[`${lang}`].p10}</span></div>
            <div className={styles.equipListItem}><span>11</span><span>{langCollection[`${lang}`].p11}</span></div>
            <div className={styles.equipListItem}><span>12</span><span>{langCollection[`${lang}`].p12}</span></div>
            <div className={styles.equipListItem}><span>13</span><span>{langCollection[`${lang}`].p13}</span></div>
            <div className={styles.equipListItem}><span>14</span><span>{langCollection[`${lang}`].p14}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Equipment.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile,
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Equipment)
