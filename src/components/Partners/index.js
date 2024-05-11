import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import DiamontBankImg from '../../assets/img/diamont_bank.jpeg';
import ExtremeLTDImg from '../../assets/img/extreme_ltd.png';
import FirstMemImg from '../../assets/img/first_mem.jpeg';
import IcrossCanadaImg from '../../assets/img/icross_canada.png';
import LRMRImg from '../../assets/img/LRMR.png';
import MedeximImg from '../../assets/img/medexim.png';
import SEImg from '../../assets/img/se.png';
import ShippingCompImg from '../../assets/img/shipping_comp.jpg';
import TyingVinesImg from '../../assets/img/tying_vines.png';
import UkrnaftaImg from '../../assets/img/ukrnafta.png';
import WalkWithMeImg from '../../assets/img/walk_with_me.png';
import OperationChargeImg from '../../assets/img/operation_charge.png';
import BridgeOfKindness from '../../assets/img/bridge_of_kindness.png';
import VolonterRyadnina from '../../assets/img/volonter_ryadnina.jpg'
import BudMallImg from '../../assets/img/budmall_partner_icon.jpg'
import OkkoImg from '../../assets/img/okko_logo.jpeg'
import OnePlusOne from '../../assets/img/onePlusOne.jpeg'
import MetalHolding from '../../assets/img/metalHolding.jpg'
import styles from './index.less';

const langCollection = {
  UA: {
    h2: 'ПАРТНЕРИ'
  },
  EN: {
    h2: 'PARTNERS'
  },
};

const Partners = ({ isMobile, lang }) => {
  const slide = (image, url, key) => {
    return (
      <div className={styles.partnersCarouselItem}>
        <a href={url} target="_blank" rel="noreferrer" className={styles.partnersCarouselItemLink}>
          <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.partnersCarouselItemImg} />
        </a>
      </div>
    )
  }
  return (
    <section id="partners" className={styles.partners}>
      <h2 className={styles.partnersTitle}>{langCollection[`${lang}`].h2}</h2>
      {console.log('okko', OkkoImg)}
      <Carousel
        infinite
        autoplay
        arrows
        adaptiveHeight
        slidesPerRow={isMobile ? 2 : 4}
        className={styles.partnersCarousel}
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
    </section>
  );
}

Partners.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Partners)
