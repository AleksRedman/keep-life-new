import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { Carousel } from 'antd';
import DiamontBankImg from '../../../assets/img/partners_logos_grey/logo-01.png';
import MetalHolding from '../../../assets/img/partners_logos_grey/logo-02.png'
import LRMRImg from '../../../assets/img/partners_logos_grey/logo-03.png';
import MedeximImg from '../../../assets/img/partners_logos_grey/logo-04.png';
import ShippingCompImg from '../../../assets/img/partners_logos_grey/logo-05.png';
import WalkWithMeImg from '../../../assets/img/partners_logos_grey/logo-06.png';
import BudMallImg from '../../../assets/img/partners_logos_grey/logo-07.png'
import OkkoImg from '../../../assets/img/partners_logos_grey/logo-08.png'
import OnePlusOne from '../../../assets/img/partners_logos_grey/logo-09.png'
import BridgeOfKindness from '../../../assets/img/partners_logos_grey/logo-10.png';
import VolonterRyadnina from '../../../assets/img/partners_logos_grey/logo-11.png'
import ExtremeLTDImg from '../../../assets/img/partners_logos_grey/logo-12.png';
import FirstMemImg from '../../../assets/img/partners_logos_grey/logo-13.png';
import IcrossCanadaImg from '../../../assets/img/partners_logos_grey/logo-14.png';
import UkrnaftaImg from '../../../assets/img/partners_logos_grey/logo-15.png';
import TyingVinesImg from '../../../assets/img/partners_logos_grey/logo-16.png';
import OperationChargeImg from '../../../assets/img/partners_logos_grey/logo-17.png';
import SEImg from '../../../assets/img/partners_logos_grey/logo-18.png';
import TrallerImg from '../../../assets/img/TRAILLER.png';
import TrallerImgSmall from '../../../assets/img/trailler_small.png';
import styles from './index.less'

const langCollection = {
  UA: {
    // h1: 'МОБІЛЬНИЙ',
    // h2: 'СТАБІЛІЗАЦІЙНИЙ',
    // h3: 'ПУНКТ',
    h1: 'АВТОНОМНІ',
    h2: 'МОБІЛЬНІ',
    h3: 'МОДУЛІ',
    descr: 'Автономні медичні пункти на колесах, які рятують життя військовим та цивільним впритул до лінії фронту'
  },
  EN: {
    h1: 'AUTONOMUS',
    h2: 'MOBILE',
    h3: 'MODULES',
    descr: 'Autonomous medical centers on wheels that save the lives of military and civilians close to the front line'
  },
};

// const langCollection = {
//   UA: {
//     h1: 'МОБІЛЬНІ',
//     h2: 'МОДУЛІ',
//     descr: 'Унікальний мобільний польовий стабілізаційний пункт на основі 20-ти футового морського контейнера, що переміщується на базі 10 тонного транспортного засобу.'
//   },
//   EN: {
//     h1: 'MOBILE',
//     h2: 'MODULES',
//     descr: 'The unique mobile field stabilization point is based on a 20-foot sea container, which is mounted on a 10-ton transport vehicle.'
//   },
// };

const Banner = ({ onEnterChange, lang, isMobile, isScreenSmMin }) => {
  const pageStyles = classNames(
    styles.bannerWrapper,
    styles.bannerPage
  )

  const slide = (image, url, key) => {
    return (
      <div className={styles.bannerPartnersCarouselItem}>
        <a href={url} target="_blank" rel="noreferrer" className={styles.bannerPartnersCarouselItemLink}>
          <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.bannerPartnersCarouselItemImg} />
        </a>
      </div>
    )
  }

  return (
    <section className={pageStyles}>
      {console.log('lang', lang)}
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
          <h1 className={styles.bannerTitleText}>
            <span>{langCollection[`${lang}`].h1}</span>
            <span>{langCollection[`${lang}`].h2}</span>
            <span>{langCollection[`${lang}`].h3}</span>
          </h1>
        </div>
        <div className={styles.bannerImgWrapper}>
          {
            isScreenSmMin
              ? <img key="TrallerImgSmall" alt="TrallerImg" src={TrallerImgSmall} />
              : <img key="TrallerImg" alt="TrallerImg" src={TrallerImg} />
          }
        </div>
        <div className={styles.bannerDescr}>
          <p>{langCollection[`${lang}`].descr}</p>
        </div>
      </div>
      <div className={styles.bannerPartners}>
        <Carousel
          infinite
          autoplay
          dots={false}
          className={styles.bannerPartnersCarousel}
          slidesPerRow={isMobile ? isScreenSmMin? 3 : 4 : 7}
        >
          {slide(OnePlusOne, 'https://1plus1.ua/', '1 + 1')}
          {slide(LRMRImg, 'https://lmsolidarity.com.ua/', 'Leroy Merlin')}
          {slide(ExtremeLTDImg, 'https://extremeltd.ua/', 'Extreme LTD')}
          {slide(DiamontBankImg, 'https://ir.diamondbackenergy.com/', 'Diamon Bank')}
          {slide(WalkWithMeImg, 'https://walkwithme.global/', 'Walk With Me')}
          {slide(TyingVinesImg, 'https://tyingvines.org/', 'Tying Vines')}
          {slide(SEImg, 'https://www.se.com/ua/uk/', 'Schneider Electric')}
          {slide(MedeximImg, 'https://medexim.ua/', 'Med Exim')}
          {slide(OkkoImg, 'https://www.okko.ua/', 'Okko')}
          {slide(UkrnaftaImg, 'https://www.ukrnafta.com/', 'Ukrnafta')}
          {slide(OperationChargeImg, 'https://operation-change.org/', 'Operation Charge')}
          {slide(BridgeOfKindness, '#', 'Bridge Of Kindness')}
          {slide(FirstMemImg, 'https://t.me/privatnamemarnya', 'First Memarnia')}
          {/* {slide(BudMallImg, 'https://budmall.center/', 'Budmall')} */}
          {slide(MetalHolding, 'https://metal-holding.ua/lvov/', 'Metal Holding')}
          {slide(VolonterRyadnina, '#', 'Volonter Ryadnina Sergii')}
          
          

        
          {/* {slide(DiamontBankImg, 'https://ir.diamondbackenergy.com/', 'Diamon Bank')} */}
          {/* {slide(ExtremeLTDImg, 'https://extremeltd.ua/', 'Extreme LTD')} */}
          {/* {slide(FirstMemImg, 'https://t.me/privatnamemarnya', 'First Memarnia')} */}
          {/* REMOVE {slide(IcrossCanadaImg, 'https://www.icrosscanada.com/', 'Icross Canada')} */}
          {/* {slide(LRMRImg, 'https://lmsolidarity.com.ua/', 'Leroy Merlin')} */}
          {/* {slide(MedeximImg, 'https://medexim.ua/', 'Med Exim')} */}
          {/* {slide(SEImg, 'https://www.se.com/ua/uk/', 'Schneider Electric')} */}
          {/* REMOVE {slide(ShippingCompImg, 'https://www.crwarehouse.ca/', 'Shipping Compassion')} */}
          {/* {slide(TyingVinesImg, 'https://tyingvines.org/', 'Tying Vines')} */}
          {/* {slide(UkrnaftaImg, 'https://www.ukrnafta.com/', 'Ukrnafta')} */}
          {/* {slide(WalkWithMeImg, 'https://walkwithme.global/', 'Walk With Me')} */}
          {/* {slide(OperationChargeImg, 'https://operation-change.org/', 'Operation Charge')} */}
          {/* {slide(BudMallImg, 'https://budmall.center/', 'Volonter Ryadnina Sergii')} */}
          {/* {slide(OkkoImg, 'https://www.okko.ua/', 'Okko')} */}
          {/* {slide(OnePlusOne, 'https://1plus1.ua/', '1 + 1')} */}
          {/* {slide(MetalHolding, 'https://metal-holding.ua/lvov/', 'Metal Holding')} */}
          {/* {slide(BridgeOfKindness, '#', 'Bridge Of Kindness')} */}
          {/* {slide(VolonterRyadnina, '#', 'Volonter Ryadnina Sergii')} */}
        </Carousel>
      </div>
    </section>
  );
}

Banner.propTypes = {
  onEnterChange: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  isScreenSmMin: PropTypes.bool
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile,
  isScreenSmMin: state.application.isScreenSmMin
})

const mapDispatchToProps = (dispatch) => ({
  onEnterChange: (payload) => dispatch({ type: 'application/handleOnEnterChange', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
