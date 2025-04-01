import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import KLImg1 from '../../../assets/img/kl-mark4/new/kl4_6_qr.png';
import KLImg2 from '../../../assets/img/kl-mark4/new/kl4_7_qr.png';
import KLImg3 from '../../../assets/img/kl-mark5/new/kl5_4_sq.png';
import KLImg4 from '../../../assets/img/kl-mark5/new/kl5_2_sq.png';
import KLImg5 from '../../../assets/img/kl-mark5/new/kl5_1_sq.png';
import KLImg6 from '../../../assets/img/kl-mark3/SquareImgs/kl3_20.jpg';
import KLImg7 from '../../../assets/img/kl-mark5/new/kl5_7_sq.png';
import KLImg8 from '../../../assets/img/kl-mark5/new/kl5_5_sq.png';

import styles from './index.less';

const langCollection = {
  UA: {
  },
  EN: {
  },
};

const dummyImage = "https://via.placeholder.com/150";

const data = {
  UA: {
    activityReport: {
      year: "2024",
      title: "ЗВІТНІСТЬ ДІЯЛЬНОСТІ",
      section: "ЗАКУПІВЛІ ОРГАНІЗАЦІЇ",
      purchases: [
        { amount: "1 416 344₴", description: "Вантажівки та модулі" },
        { amount: "743 784₴", description: "Будівельні матеріали" },
        { amount: "923 971₴", description: "Технічне обладнання" },
        { amount: "1 184 501₴", description: "Медичне обладнання" },
        { amount: "373 372₴", description: "Розхідні матеріали та меблі" },
        { amount: "99 780₴", description: "Інструменти" },
        { amount: "74 880₴", description: "Комунальні послуги та логістика" },
        { amount: "1 873 272₴", description: "Оплата послуг та праці" },
      ],
    },
    partnerHelp: {
      title: "ДОПОМОГА ПАРТНЕРІВ",
      contributions: [
        { amount: "2 411 478₴", description: "Вантажівки та модулі" },
        { amount: "140 533₴", description: "Будівельні матеріали" },
        { amount: "5 844 320₴", description: "Медичне обладнання" },
        { amount: "966 480₴", description: "Розхідні матеріали та меблі" },
        { amount: "283 340₴", description: "Інструменти" },
        { amount: "150 878₴", description: "Технічне обладнання" },
      ],
    },
  },
  EN: {
    "activityReport": {
      "year": "2024",
      "title": "ACTIVITY REPORT",
      "section": "ORGANIZATION'S PURCHASES",
      "purchases": [
        { amount: "1,416,344₴", description: "Trucks and modules" },
        { amount: "743,784₴", description: "Construction materials" },
        { amount: "923,971₴", description: "Technical equipment" },
        { amount: "1,184,501₴", description: "Medical equipment" },
        { amount: "373,372₴", description: "Consumables and furniture" },
        { amount: "99,780₴", description: "Tools" },
        { amount: "74,880₴", description: "Utilities and logistics" },
        { amount: "1,873,272₴", description: "Service and labor payments" }
      ]
    },
    "partnerHelp": {
      "title": "PARTNER ASSISTANCE",
      "contributions": [
        { amount: "2,411,478₴", description: "Trucks and modules" },
        { amount: "140,533₴", description: "Construction materials" },
        { amount: "5,844,320₴", description: "Medical equipment" },
        { amount: "966,480₴", description: "Consumables and furniture" },
        { amount: "283,340₴", description: "Tools" },
        { amount: "150,878₴", description: "Technical equipment" }
      ]
    }
  },
  
  images: [
    KLImg1,
    KLImg2,
    KLImg3,
    KLImg5,
    KLImg4,
    KLImg7,
    KLImg6,
    KLImg8
  ],
};

const ReportSection = ({ title, items }) => (
  <div className={styles.activityReportingSection}>
    <h2 className={styles.activityReportingSectionTitle}>{title}</h2>
    <div className={styles.activityReportingGridContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.activityReportingGridItem}>
          <p className={styles.activityReportingAmount}>{item.amount}</p>
          <p className={styles.activityReportingDescription}>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ImageGallery = ({ images }) => (
  <div className={styles.activityReportingImageGallery}>
    {images.map((img, index) => (
      <img key={index} src={img} alt="Gallery" className={styles.activityReportingGalleryImage} />
    ))}
  </div>
);

const ActivityReporting = ({ isMobile, lang }) => {
  return (
    <section id="klMark1Report" className={styles.activityReporting}>
      <div className={styles.activityReportingContainer}>
        <h1 className={styles.activityReportingTitle}>{data[`${lang}`].activityReport.title}</h1>
        <p className={styles.activityReportingYear}>{data[`${lang}`].activityReport.year}</p>
        <ReportSection title={data[`${lang}`].activityReport.section} items={data[`${lang}`].activityReport.purchases} />
        <ReportSection title={data[`${lang}`].partnerHelp.title} items={data[`${lang}`].partnerHelp.contributions} />
      </div>
      <ImageGallery images={data.images} />
    </section>
  );
}

ActivityReporting.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile,
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(ActivityReporting)
