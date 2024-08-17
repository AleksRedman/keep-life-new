import React, { useState } from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
// import Equip1Img from '../../../assets/img/equip1.png';
// import Equip2Img from '../../../assets/img/equip2.png';
import Equip1Img from '../../../assets/img/kl-new-eqp/1.jpg';
import Equip2Img from '../../../assets/img/kl-new-eqp/2.png';
import Equip3Img from '../../../assets/img/equip3.png';
// import Equip4Img from '../../../assets/img/equip4.png';
import Equip4Img from '../../../assets/img/kl-new-eqp/4.jpg';
import Equip5Img from '../../../assets/img/equip5.png';
import Equip6Img from '../../../assets/img/kl-new-eqp/18.jpg';
import Equip7Img from '../../../assets/img/equip7.png';
// import Equip8Img from '../../../assets/img/equip8.jpeg';
// import Equip9Img from '../../../assets/img/equip9.png';
import Equip8Img from '../../../assets/img/kl-new-eqp/8.png';
import Equip9Img from '../../../assets/img/kl-new-eqp/9.png';
// TODO, import Equip10Img from '../../../assets/img/equip10.png';
import Equip10Img from '../../../assets/img/compressor_fridge_img.jpg'
// import Equip11Img from '../../../assets/img/equip11.png';
// import Equip12Img from '../../../assets/img/equip12.png';
import Equip18Img from '../../../assets/img/equip13.png';
// import Equip14Img from '../../../assets/img/equip14.png';
// import Equip15Img from '../../../assets/img/equip15.jpeg';

// import Equip16Img from '../../../assets/img/equip16.jpeg';
// import Equip17Img from '../../../assets/img/equip17.jpeg';

import Equip11Img from '../../../assets/img/kl-new-eqp/11.png';
import Equip12Img from '../../../assets/img/kl-new-eqp/12.png';
import Equip13Img from '../../../assets/img/kl-new-eqp/13.jpg';
import Equip14Img from '../../../assets/img/kl-new-eqp/14.jpg';
import Equip15Img from '../../../assets/img/kl-new-eqp/15.jpg';

import Equip16Img from '../../../assets/img/kl-new-eqp/16.png';
import Equip17Img from '../../../assets/img/kl-new-eqp/17.png';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: 'МЕДИЧНЕ ОБЛАДНАННЯ',
    p1: 'Комплекс анестезіологічний Drager Primus ',
    p2: 'Монітор пацієнта Biolight М-12',
    p3: 'Кисневий концентратор Brightfield AE-10',
    p4: 'Насос шприцевий інфузійний Brightfield Healthcare KL-602',
    p5: 'Електрокоагулятор BOWA ARC 303',
    p6: 'Операційна лампа Maestro LED300',
    p7: 'Хірургічний рентгенпрозорий стіл TDY-1',
    p8: 'Сухожарова шафа ГП-80 для стерилізації',
    p9: 'Аспіратор медичний електричний пересувний 20 л H002 Folee',
    p10: 'Компресорний автохолодильник Alpicool TW45',
    p11: 'Дефібрилятор-монітор Біомед S6',
    p12: 'Портативний УЗД апарат PHILIPS Lumify C5-2',
    p13: 'Підігрівач інфузійних розчинів і крові FT70',
    p14: 'Апарат ШВЛ Drager Oxylog 3000 plus',
    p15: 'Камера ультрафіолетова Мобіл Заповіт',
    p16: 'Пакувальна машина X330, Lifedent',
    p17: 'Бактерицидний опромінювач BactoSfera OBB 15S ECO',
    p18: 'Портативный рентген аппарат EcoRay ULTRA 100'
  },
  // EN: {
  //   h1: 'MEDICAL EQUIPMENT',
  //   p1: 'S1100A Ventilator',
  //   p2: 'Brightfield Healthcare OSEN 8000 Patient Monitor',
  //   p3: 'Brightfield AE-10 Oxygen Concentrator',
  //   p4: 'Infusion syringe pump Brightfield Healthcare OSP-500',
  //   p5: 'BOWA ARC 303 electrocoagulator',
  //   p6: 'Maestro LED300 operating lamp',
  //   p7: 'Surgical x-ray table TDY-1',
  //   p8: 'Steam sterilizer Q70B',
  //   p9: 'Surgical portable Aspira Go 30 aspirator',
  //   p10: 'Compressor car refrigerator Alpicool TW45',
  //   p11: 'Defi 8 External Defibrillator',
  //   p12: 'Mindray DP-10 portable ultrasound device',
  //   p13: 'EcoRay ULTRA 100 portable x-ray machine',
  //   p14: 'Portable ventilator OXYLOG 3000 Plus'
  // },
  EN: {
    h1: 'MEDICAL EQUIPMENT',
    p1: 'Drager Primus Anesthesia Workstation',
    p2: 'Biolight M-12 Patient Monitor',
    p3: 'Brightfield AE-10 Oxygen Concentrator',
    p4: 'Brightfield Healthcare KL-602 Syringe Infusion Pump',
    p5: 'BOWA ARC 303 Electrosurgical Unit',
    p6: 'Maestro LED300 Surgical Lamp',
    p7: 'TDY-1 Radiolucent Surgical Table',
    p8: 'GP-80 Dry Heat Sterilizer',
    p9: 'H002 Folee 20L Electric Portable Medical Suction Unit',
    p10: 'Alpicool TW45 Compressor Car Refrigerator',
    p11: 'Biomed S6 Defibrillator-Monitor',
    p12: 'PHILIPS Lumify C5-2 Portable Ultrasound Machine',
    p13: 'FT70 Infusion and Blood Warmer',
    p14: 'Drager Oxylog 3000 plus Ventilator',
    p15: 'Mobil Zapovit Ultraviolet Chamber',
    p16: 'X330 Packing Machine, Lifedent',
    p17: 'BactoSfera OBB 15S ECO Bactericidal Lamp',
    p18: 'EcoRay ULTRA 100 portable x-ray machine',
  }
};

const Equipment = ({ isMobile, lang }) => {
  const [hoveredItem, setHoverItem] = useState(null);
  const [hoveredImgItem, setHoveredImgItem] = useState(null);

  const handleHoverItem = (val) => {
    setHoverItem(val)
    setHoveredImgItem(val)
  }

  const hoverStyles = {
    borderRadius: "15px",
    background: "linear-gradient(145deg, #cacaca, #ffffff)",
    boxShadow:  "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
  }

  const hoverStylesDescr = {
    borderRadius: "2px",
    background: "linear-gradient(145deg, #cacaca, #ffffff)",
    // boxShadow:  "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
    boxShadow: "19px 19px 64px #bebebe, -19px -19px 64px #ffffff"
  }

  const equip = (image, key, label, longLabel) => {
    return (
      <div
        className={styles.equipImagesListItem}
        onMouseEnter={() => handleHoverItem(label)}
        onMouseLeave={() => handleHoverItem(null)}
        style={
          label === hoveredItem
            // ? { backgroundColor: '#D7DDDE' }
            ? hoverStyles
            : {}
        }
      >
        <div className={styles.equipImagesListItemImgWrap}>
          <div className={styles.equipImagesListItemImgContent}>
            <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.equipImagesListItemImg} />
          </div>
        </div>
        <span className={styles.equipImagesListItemLabel}>{isMobile ? longLabel : label}</span>
      </div>
    )
  }

  const equipDescr = (key, text) => {
    return (
      <div
        className={styles.equipListItem}
        onMouseEnter={() => handleHoverItem(key)}
        onMouseLeave={() => handleHoverItem(null)}
        style={
          hoveredImgItem === key
            // ? { backgroundColor: '#D7DDDE' }
            ? hoverStylesDescr
            : {}
          }
      >
        <span>{key}</span><span>{text}</span>
      </div>
    )
  }

  return (
    <section id="equipment" className={styles.equip}>
      {console.log('hoveredItem', hoveredItem)}
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
          {equip(Equip15Img, 'Equip14Img', '15', langCollection[`${lang}`].p15)}
          {equip(Equip16Img, 'Equip14Img', '16', langCollection[`${lang}`].p16)}
          {equip(Equip17Img, 'Equip14Img', '17', langCollection[`${lang}`].p17)}
          {equip(Equip18Img, 'Equip18Img', '18', langCollection[`${lang}`].p18)}
        </div>
        <div className={styles.equipList}>
          <h3 className={styles.equipTitle}>{langCollection[`${lang}`].h1}</h3>
          <div className={styles.equipListWrap}>
            {equipDescr('1', langCollection[`${lang}`].p1)}
            {equipDescr('2', langCollection[`${lang}`].p2)}
            {equipDescr('3', langCollection[`${lang}`].p3)}
            {equipDescr('4', langCollection[`${lang}`].p4)}
            {equipDescr('5', langCollection[`${lang}`].p5)}
            {equipDescr('6', langCollection[`${lang}`].p6)}
            {equipDescr('7', langCollection[`${lang}`].p7)}
            {equipDescr('8', langCollection[`${lang}`].p8)}
            {equipDescr('9', langCollection[`${lang}`].p9)}
            {equipDescr('10', langCollection[`${lang}`].p10)}
            {equipDescr('11', langCollection[`${lang}`].p11)}
            {equipDescr('12', langCollection[`${lang}`].p12)}
            {equipDescr('13', langCollection[`${lang}`].p13)}
            {equipDescr('14', langCollection[`${lang}`].p14)}
            {equipDescr('15', langCollection[`${lang}`].p15)}
            {equipDescr('16', langCollection[`${lang}`].p16)}
            {equipDescr('17', langCollection[`${lang}`].p17)}
            {equipDescr('18', langCollection[`${lang}`].p18)}
            {/* <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('1')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '1' ? { backgroundColor: '#D7DDDE' } : {}}><span>1</span><span>{langCollection[`${lang}`].p1}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('2')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '2' ? { backgroundColor: '#D7DDDE' } : {}}><span>2</span><span>{langCollection[`${lang}`].p2}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('3')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '3' ? { backgroundColor: '#D7DDDE' } : {}}><span>3</span><span>{langCollection[`${lang}`].p3}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('4')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '4' ? { backgroundColor: '#D7DDDE' } : {}}><span>4</span><span>{langCollection[`${lang}`].p4}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('5')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '5' ? { backgroundColor: '#D7DDDE' } : {}}><span>5</span><span>{langCollection[`${lang}`].p5}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('6')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '6' ? { backgroundColor: '#D7DDDE' } : {}}><span>6</span><span>{langCollection[`${lang}`].p6}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('7')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '7' ? { backgroundColor: '#D7DDDE' } : {}}><span>7</span><span>{langCollection[`${lang}`].p7}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('8')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '8' ? { backgroundColor: '#D7DDDE' } : {}}><span>8</span><span>{langCollection[`${lang}`].p8}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('9')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '9' ? { backgroundColor: '#D7DDDE' } : {}}><span>9</span><span>{langCollection[`${lang}`].p9}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('10')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '10' ? { backgroundColor: '#D7DDDE' } : {}}><span>10</span><span>{langCollection[`${lang}`].p10}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('11')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '11' ? { backgroundColor: '#D7DDDE' } : {}}><span>11</span><span>{langCollection[`${lang}`].p11}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('12')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '12' ? { backgroundColor: '#D7DDDE' } : {}}><span>12</span><span>{langCollection[`${lang}`].p12}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('13')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '13' ? { backgroundColor: '#D7DDDE' } : {}}><span>13</span><span>{langCollection[`${lang}`].p13}</span></div>
            <div className={styles.equipListItem} onMouseEnter={() => handleHoverItem('14')} onMouseLeave={() => handleHoverItem(null)} style={hoveredImgItem === '14' ? { backgroundColor: '#D7DDDE' } : {}}><span>14</span><span>{langCollection[`${lang}`].p14}</span></div> */}
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
  isMobile: state.application.isMobile
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(Equipment)
