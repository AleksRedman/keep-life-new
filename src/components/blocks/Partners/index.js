import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import DiamontBankImg from '../../../assets/img/diamont_bank.jpeg';
import ExtremeLTDImg from '../../../assets/img/extreme_ltd.png';
import FirstMemImg from '../../../assets/img/first_mem.jpeg';
import IcrossCanadaImg from '../../../assets/img/icross_canada.png';
import LRMRImg from '../../../assets/img/LRMR.png';
import MedeximImg from '../../../assets/img/medexim.png';
import SEImg from '../../../assets/img/se.png';
import ShippingCompImg from '../../../assets/img/shipping_comp.jpg';
import TyingVinesImg from '../../../assets/img/tying_vines.png';
import UkrnaftaImg from '../../../assets/img/ukrnafta.png';
import WalkWithMeImg from '../../../assets/img/walk_with_me.png';
import OperationChargeImg from '../../../assets/img/operation_charge.png';
import BridgeOfKindness from '../../../assets/img/bridge_of_kindness.png';
import VolonterRyadnina from '../../../assets/img/volonter_ryadnina.jpg'
import BudMallImg from '../../../assets/img/budmall_partner_icon.jpg'
import OkkoImg from '../../../assets/img/okko_logo.jpeg'
import OnePlusOne from '../../../assets/img/onePlusOne.jpeg'
import MetalHolding from '../../../assets/img/metalHolding.jpg'
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
  const item = (image, url, key, wideImg) => {
    const partnersListItemLinkStyles = classNames(
      styles.partnersListItemLink,
      {[styles.partnersListItemLinkWide]: wideImg}
    )

    return (
      <div className={styles.partnersListItem}>
        <a href={url} target="_blank" rel="noreferrer" className={partnersListItemLinkStyles}>
          <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.partnersListItemImg} />
        </a>
      </div>
    )
  }
  return (
    <section id="partners" className={styles.partners}>
      <div className={styles.partnersWrap}>
        <h2 className={styles.partnersTitle}>{langCollection[`${lang}`].h2}</h2>
        <div className={styles.partnersList}>
          {item(OnePlusOne, 'https://1plus1.ua/', '1 + 1')}
          {item(LRMRImg, 'https://lmsolidarity.com.ua/', 'Leroy Merlin')}
          {item(ExtremeLTDImg, 'https://extremeltd.ua/', 'Extreme LTD', true)}
          {item(DiamontBankImg, 'https://ir.diamondbackenergy.com/', 'Diamon Bank', true)}
          {item(WalkWithMeImg, 'https://walkwithme.global/', 'Walk With Me')}
          {item(TyingVinesImg, 'https://tyingvines.org/', 'Tying Vines', true)}
          {item(SEImg, 'https://www.se.com/ua/uk/', 'Schneider Electric', true)}
          {/* {item(MedeximImg, 'https://medexim.ua/', 'Med Exim')} */}
          {item(OkkoImg, 'https://www.okko.ua/', 'Okko')}
          {item(UkrnaftaImg, 'https://www.ukrnafta.com/', 'Ukrnafta', true)}
          {item(OperationChargeImg, 'https://operation-change.org/', 'Operation Charge', true)}
          {item(BridgeOfKindness, '#', 'Bridge Of Kindness', true)}
          {/* {item(FirstMemImg, 'https://t.me/privatnamemarnya', 'First Memarnia')} */}
          {/* {item(BudMallImg, 'https://budmall.center/', 'Budmall', true)} */}
          {item(MetalHolding, 'https://metal-holding.ua/lvov/', 'Metal Holding', true)}
          {/* {item(VolonterRyadnina, '#', 'Volonter Ryadnina Sergii')} */}
          {/* {item(ShippingCompImg, 'https://www.crwarehouse.ca/', 'Shipping Compassion')}
          {item(IcrossCanadaImg, 'https://www.icrosscanada.com/', 'Icross Canada')} */}
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Partners)
