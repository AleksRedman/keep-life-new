import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { Carousel } from 'antd';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
// import TrallerImg from '../../../assets/img/traller.png';
import DiamontBankImg from '../../../assets/img/diamont_bank.jpeg';
import ExtremeLTDImg from '../../../assets/img/extreme_ltd.png';
import FirstMemImg from '../../../assets/img/first_mem.jpeg';
import IcrossCanadaImg from '../../../assets/img/icross_canada.png';
import LRMRImg from '../../../assets/img/LRMR.png';
import MedeximImg from '../../../assets/img/medexim.png';
import SEImg from '../../../assets/img/se.png';
import ShippingCompImg from '../../../assets/img/shipping_comp.jpg';
import TyingVinesImg from '../../../assets/img/tying_vines.png';
import TrallerImg from '../../../assets/img/TRAILLER.png';
import UkrnaftaImg from '../../../assets/img/ukrnafta.png';
import WalkWithMeImg from '../../../assets/img/walk_with_me.png';
import OperationChargeImg from '../../../assets/img/operation_charge.png';
import BridgeOfKindness from '../../../assets/img/bridge_of_kindness.png';
import VolonterRyadnina from '../../../assets/img/volonter_ryadnina.jpg'
import BudMallImg from '../../../assets/img/budmall_partner_icon.jpg'
import OkkoImg from '../../../assets/img/okko_logo.jpeg'
import OnePlusOne from '../../../assets/img/onePlusOne.jpeg'
import MetalHolding from '../../../assets/img/metalHolding.jpg'
import { ParallaxBanner } from 'react-scroll-parallax'
import styles from './index.less'

const langCollection = {
  UA: {
    h1: 'МОБІЛЬНИЙ',
    h2: 'СТАБІЛІЗАЦІЙНИЙ',
    h3: 'ПУНКТ',
    descr: 'Унікальний мобільний польовий стабілізаційний пункт на основі 20-ти футового морського контейнера, що переміщується на базі 10 тонного транспортного засобу.'
  },
  EN: {
    h1: 'MOBILE',
    h2: 'STABILIZATION',
    h3: 'POINT',
    descr: 'The unique mobile field stabilization point is based on a 20-foot sea container, which is mounted on a 10-ton transport vehicle.'
  },
};

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
          <img key="TrallerImg" alt="TrallerImg" src={TrallerImg} />
        </div>
        <div className={styles.bannerDescr}>
          <p>{langCollection[`${lang}`].descr}</p>
        </div>
      </div>
      <div className={styles.bannerPartners}>
        <Carousel
          infinite
          autoplay
          arrows
          // adaptiveHeight
          slidesPerRow={isMobile ? isScreenSmMin? 3 : 4 : 7}
          className={styles.bannerPartnersCarousel}
        >
          {slide(DiamontBankImg, 'https://ir.diamondbackenergy.com/', 'Diamon Bank')}
          {slide(ExtremeLTDImg, 'https://extremeltd.ua/', 'Extreme LTD')}
          {slide(FirstMemImg, 'https://t.me/privatnamemarnya', 'First Memarnia')}
          {slide(IcrossCanadaImg, 'https://www.icrosscanada.com/', 'Icross Canada')}
          {slide(LRMRImg, 'https://lmsolidarity.com.ua/', 'Leroy Merlin')}
          {slide(MedeximImg, 'https://medexim.ua/', 'Med Exim')}
          {slide(SEImg, 'https://www.se.com/ua/uk/', 'Schneider Electric')}
          {slide(ShippingCompImg, 'https://www.crwarehouse.ca/', 'Shipping Compassion')}
          {slide(TyingVinesImg, 'https://tyingvines.org/', 'Tying Vines')}
          {slide(UkrnaftaImg, 'https://www.ukrnafta.com/', 'Ukrnafta')}
          {slide(WalkWithMeImg, 'https://walkwithme.global/', 'Walk With Me')}
          {slide(OperationChargeImg, 'https://operation-change.org/', 'Operation Charge')}
          {slide(BudMallImg, 'https://budmall.center/', 'Volonter Ryadnina Sergii')}
          {slide(OkkoImg, 'https://www.okko.ua/', 'Okko')}
          {slide(OnePlusOne, 'https://1plus1.ua/', '1 + 1')}
          {slide(MetalHolding, 'https://metal-holding.ua/lvov/', 'Metal Holding')}
          {slide(BridgeOfKindness, '#', 'Bridge Of Kindness')}
          {slide(VolonterRyadnina, '#', 'Volonter Ryadnina Sergii')}
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
  lang: state.application.lang,
  isMobile: state.application.isMobile,
  isScreenSmMin: state.application.isScreenSmMin
})

const mapDispatchToProps = (dispatch) => ({
  onEnterChange: (payload) => dispatch({ type: 'application/handleOnEnterChange', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
