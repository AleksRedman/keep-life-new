import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Carousel, Tag } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import ArmyInform from '../../../assets/img/army_inform1.png';
import EspressoTV from '../../../assets/img/EspressoTV.png';
import ShoTam from '../../../assets/img/sho_tam.png'
import LvivNews from '../../../assets/img/lvivNews.png'
import Suspilne from '../../../assets/img/suspilne.jpeg'

import KLMark5Img1 from '../../../assets/img/kl-mark5/kl5_1.jpg';
import KLMark5Img2 from '../../../assets/img/kl-mark5/kl5_2.jpg';
import KLMark5Img3 from '../../../assets/img/kl-mark5/kl5_3.jpg';
import KLMark5Img4 from '../../../assets/img/kl-mark5/kl5_4.jpg';
import KLMark5Img5 from '../../../assets/img/kl-mark5/kl5_5.jpg';

import KLMark4Img1 from '../../../assets/img/kl-mark4/kl4_1.jpg';
import KLMark4Img2 from '../../../assets/img/kl-mark4/kl4_2.jpg';
import KLMark4Img3 from '../../../assets/img/kl-mark4/kl4_3.jpg';
import KLMark4Img4 from '../../../assets/img/kl-mark4/kl4_4.jpg';
import KLMark4Img5 from '../../../assets/img/kl-mark4/kl4_5.jpg';
import KLMark4Img8 from '../../../assets/img/kl-mark4/kl4_8.jpg';

import KLMark3Img1 from '../../../assets/img/kl-mark3/SquareImgs/kl3_19.jpg';
import KLMark3Img2 from '../../../assets/img/kl-mark3/SquareImgs/kl3_15.jpg';
import KLMark3Img3 from '../../../assets/img/kl-mark3/SquareImgs/kl3_14.jpg';
import KLMark3Img4 from '../../../assets/img/kl-mark3/SquareImgs/kl3_2.jpg';
import KLMark3Img5 from '../../../assets/img/kl-mark3/SquareImgs/kl3_4.jpg';
import KLMark3Img6 from '../../../assets/img/kl-mark3/SquareImgs/kl3_20.jpg';


import KLMark1Img1 from '../../../assets/img/kl-mark1/SquareImgs/KL1_sqrImg_1.jpg';
import KLMark1Img2 from '../../../assets/img/kl-mark1/SquareImgs/KL1_sqrImg_2.jpg';
import KLMark1Img3 from '../../../assets/img/kl-mark1/SquareImgs/KL1_sqrImg_3.jpg';
import KLMark1Img4 from '../../../assets/img/kl-mark1/SquareImgs/KL1_sqrImg_4.jpg';
import KLMark1Img5 from '../../../assets/img/kl-mark1/SquareImgs/KL1_sqrImg_5.jpg';

import Gallery3Img from '../../../assets/img/gallery3.jpg';
import Gallery4Img from '../../../assets/img/gallery4.jpg';
import Gallery7Img from '../../../assets/img/gallery7.jpg';
import Gallery9Img from '../../../assets/img/gallery9.jpg';
import GalleryImgNew1 from '../../../assets/img/gallery_new_1.jpg';

import TSNImg from '../../../assets/img/tsn.png';
import TROMedia from '../../../assets/img/tro_media1.jpg';
import Avto24 from '../../../assets/img/avto24.png';
import UkrinformTV from '../../../assets/img/ukrinformTV.jpeg';
import Ukrinform from '../../../assets/img/ukrinform.png';

import Link from 'umi/link'
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    kl_1_title: 'Keep Life Mark 1',
    kl_1_path: '/projects/kl-mark-1',
    kl_1_date: 'Грудень 2022',
    kl_mass_media: 'ЗМІ про нас',
    kl_tag_progress: 'В Розробці',
    kl_2_title: 'Keep Life Mark 2',
    kl_2_path: '/projects/kl-mark-2',
    kl_2_date: 'Листопад 2023',
    kl_3_path: '/projects/kl-mark-3',
    kl_3_title: 'Keep Life Mark 3',
    kl_3_date: '2024',
    kl_4_path: '/projects/kl-mark-4',
    kl_4_title: 'Keep Life Mark 4',
    kl_4_date: '2024',
    kl_5_path: '/projects/kl-mark-5',
    kl_5_title: 'Keep Life Mark 5',
    kl_5_date: '2024',
    link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
    mbBtn: 'Підтримати'
  },
  EN: {
    kl_1_title: 'Keep Life Mark 1',
    kl_1_path: '/en/projects/kl-mark-1',
    kl_1_date: 'December 2022',
    kl_mass_media: 'Mass Media about us',
    kl_tag_progress: 'In Progress',
    kl_2_title: 'Keep Life Mark 2',
    kl_2_path: '/en/projects/kl-mark-2',
    kl_2_date: 'November 2023',
    kl_3_path: '/en/projects/kl-mark-3',
    kl_3_title: 'Keep Life Mark 3',
    kl_3_date: '2024',
    kl_4_path: '/en/projects/kl-mark-4',
    kl_4_title: 'Keep Life Mark 4',
    kl_4_date: '2024',
    kl_5_path: '/en/projects/kl-mark-5',
    kl_5_title: 'Keep Life Mark 5',
    kl_5_date: '2024',
    link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
    mbBtn: 'Support'
  },
};

const Projects = ({ isMobile, lang }) => {
  const handleGoToPuzzleDonate = () => {
    const curPath = document?.location?.pathname
    console.log('handleGoToPuzzleDonate', curPath)

    if (curPath === '/en/donate') {
      router.push('/en/donate-puzzle')
    } else if (curPath === '/donate') {
      router.push('/donate-puzzle')
    }

    window.scrollTo(0, 0)
  }

  const slide = (image, key) => {
    return (
      <div className={styles.missionSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.missionSlidesItemImg} />
      </div>
    )
  }

  return (
    <div className={styles.projects}>
      <div className={styles.projectsWrap}>
        <div className={styles.projectsList}>
          <div className={styles.projectsCard}>
            <div className={styles.projectsCardMediaBlock}>
              <Carousel
                infinite
                arrows
                slidesPerRow={1}
                nextArrow={<RightOutlined />}
                prevArrow={<LeftOutlined />}
                className={styles.projectsCardCarousel}
              >
                {slide(KLMark5Img2, 'KLMark5Img2')}
                {slide(KLMark5Img5, 'KLMark5Img5')}
                {slide(KLMark5Img1, 'KLMark5Img1')}
                {slide(KLMark5Img3, 'KLMark5Img3')}
                {slide(KLMark5Img4, 'KLMark5Img4')}
              </Carousel>
            </div>
            <Link className={styles.projectsCardTitle} to={langCollection[`${lang}`].kl_5_path}>
              {langCollection[`${lang}`].kl_5_title}
            </Link>
            <p className={styles.projectsCardDate}>
              {langCollection[`${lang}`].kl_5_date}
            </p>
            <Tag color="#87d068">{langCollection[`${lang}`].kl_tag_progress}</Tag>
          </div>

          <div className={styles.projectsCard}>
            <div className={styles.projectsCardMediaBlock}>
              <Carousel
                infinite
                arrows
                slidesPerRow={1}
                nextArrow={<RightOutlined />}
                prevArrow={<LeftOutlined />}
                className={styles.projectsCardCarousel}
              >
                {slide(KLMark4Img5, 'KLMark4Img5')}
                {slide(KLMark4Img8, 'KLMark4Img8')}
                {slide(KLMark4Img1, 'KLMark4Img1')}
                {slide(KLMark4Img2, 'KLMark4Img2')}
                {slide(KLMark4Img3, 'KLMark4Img3')}
                {slide(KLMark4Img4, 'KLMark4Img4')}
              </Carousel>
            </div>
            <Link className={styles.projectsCardTitle} to={langCollection[`${lang}`].kl_4_path}>
              {langCollection[`${lang}`].kl_4_title}
            </Link>
            <p className={styles.projectsCardDate}>
              {langCollection[`${lang}`].kl_4_date}
            </p>
            <Tag color="#87d068">{langCollection[`${lang}`].kl_tag_progress}</Tag>
          </div>

          <div className={styles.projectsCard}>
            <div className={styles.projectsCardMediaBlock}>
              <Carousel
                infinite
                arrows
                slidesPerRow={1}
                nextArrow={<RightOutlined />}
                prevArrow={<LeftOutlined />}
                className={styles.projectsCardCarousel}
              >
                {slide(KLMark3Img2, 'KLMark3Img2')}
                {slide(KLMark3Img1, 'KLMark3Img1')}
                {slide(KLMark3Img6, 'KLMark3Img6')}
                {slide(KLMark3Img3, 'KLMark3Img3')}
                {slide(KLMark3Img4, 'KLMark3Img4')}
                {slide(KLMark3Img5, 'KLMark3Img5')}
                {slide(KLMark3Img6, 'KLMark3Img6')}
              </Carousel>
            </div>
            <Link className={styles.projectsCardTitle} to={langCollection[`${lang}`].kl_3_path}>
              {langCollection[`${lang}`].kl_3_title}
            </Link>
            <p className={styles.projectsCardDate}>
              {langCollection[`${lang}`].kl_3_date}
            </p>
          </div>

          <div className={styles.projectsCard}>
            <div className={styles.projectsCardMediaBlock}>
              <Carousel
                infinite
                arrows
                slidesPerRow={1}
                nextArrow={<RightOutlined />}
                prevArrow={<LeftOutlined />}
                className={styles.projectsCardCarousel}
              >
                {slide(GalleryImgNew1, 'GalleryImgNew1')}
                {slide(Gallery9Img, 'Gallery9Img')}
                {slide(Gallery3Img, 'Gallery3Img')}
                {slide(Gallery4Img, 'Gallery4Img')}
                {slide(Gallery7Img, 'Gallery7Img')}
              </Carousel>
            </div>
            <Link className={styles.projectsCardTitle} to={langCollection[`${lang}`].kl_2_path}>
              {langCollection[`${lang}`].kl_2_title}
            </Link>
            <p className={styles.projectsCardDate}>
              {langCollection[`${lang}`].kl_2_date}
            </p>
            <p className={styles.projectsCardMassMediaTitle}>
              {langCollection[`${lang}`].kl_mass_media}
            </p>
            {/* <p className={styles.projectsCardReadyDate}>
              Ready Date
            </p> */}
            <div className={styles.projectsCardMassMediaList}>
              <a href='https://tsn.ua/video/video-novini/operaciyna-dlya-frontu-na-kolesah-nova-rozrobka-vid-ukrayinciv.html' target='_blank' rel="noreferrer">
                <img src={TSNImg} alt='ТСН' />
              </a>
              <a href='https://fb.watch/ohQrn8XTHm/' target='_blank' rel="noreferrer">
                <img src={TROMedia} alt='TRO Media' />
              </a>
              <a href='https://auto.24tv.ua/z_choho_skladaietsia_mobilna_khirurhichna_operatsiina_dlia_viiskovykh_foto_video_n48871' target='_blank' rel="noreferrer">
                <img src={Avto24} alt='Avto24' />
              </a>
              <a href='https://www.youtube.com/watch?si=t2mZBJK3xNGZQB2v&v=lffGm3Bnujo&feature=youtu.be' target='_blank' rel="noreferrer">
                <img src={UkrinformTV} alt='UkrinformTV' />
              </a>
              <a href='https://armyinform.com.ua/2023/11/10/u-kyyevi-prezentuvaly-vdoskonalenyj-mobilnyj-hirurgichno-stabilizaczijnyj-punkt-keep-life/' target='_blank' rel="noreferrer">
                <img src={ArmyInform} alt='ArmyInform' />
              </a>
              <a href='https://www.ukrinform.ua/rubric-health/3785364-u-kievi-prezentuvali-mobilnij-hirurgicnostabilizacijnij-punkt-dla-prifrontovih-teritorij.html' target='_blank' rel="noreferrer">
                <img src={Ukrinform} alt='Ukrinform' />
              </a>
            </div>
          </div>

          <div className={styles.projectsCard}>
            <div className={styles.projectsCardMediaBlock}>
              <Carousel
                infinite
                arrows
                slidesPerRow={1}
                nextArrow={<RightOutlined />}
                prevArrow={<LeftOutlined />}
                className={styles.projectsCardCarousel}
              >
                {slide(KLMark1Img5, 'KLMark1Img5')}
                {slide(KLMark1Img2, 'KLMark1Img2')}
                {slide(KLMark1Img1, 'KLMark1Img1')}
                {slide(KLMark1Img3, 'KLMark1Img3')}
                {slide(KLMark1Img4, 'KLMark1Img4')}
              </Carousel>
            </div>
            <Link className={styles.projectsCardTitle} to={langCollection[`${lang}`].kl_1_path}>
              {langCollection[`${lang}`].kl_1_title}
            </Link>
            <p className={styles.projectsCardDate}>
              {langCollection[`${lang}`].kl_1_date}
            </p>
            <p className={styles.projectsCardMassMediaTitle}>
              {langCollection[`${lang}`].kl_mass_media}
            </p>
            {/* <p className={styles.projectsCardReadyDate}>
              Ready Date
            </p> */}
            <div className={styles.projectsCardMassMediaList}>
              <a href='https://youtu.be/5eIVY0piAnQ' target='_blank' rel="noreferrer">
                <img src={EspressoTV} alt='EspressoTV' />
              </a>
              <a href='https://armyinform.com.ua/2022/12/25/u-lvovi-vijskovym-medykam-peredaly-mobilnyj-hirurgichnyj-kompleks/' target='_blank' rel="noreferrer">
                <img src={ArmyInform} alt='ArmyInform' />
              </a>
              <a href='https://shotam.info/viyskovi-otrymaly-vid-blahodiynykiv-suchasnyy-shpytal-mobilnoi-khirurhii/' target='_blank' rel="noreferrer">
                <img src={ShoTam} alt='Sho Tam' />
              </a>
              <a href='https://news.lviv-company.in.ua/zi-lvova-na-peredovu-peredali-shpital-mobilno%d1%97-xirurgi%d1%97.html' target='_blank' rel="noreferrer">
                <img src={LvivNews} alt='Lviv News' />
              </a>
              <a href='https://suspilne.media/345082-zi-lvova-na-peredovu-peredali-spital-mobilnoi-hirurgii/' target='_blank' rel="noreferrer">
                <img src={Suspilne} alt='Suspilne' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile:  state.application.isMobile
})

export default connect(mapStateToProps, null)(Projects)
