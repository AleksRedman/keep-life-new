import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Carousel, Button } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import { imagesKL } from '../../../utils/images';

import KLMark5Img1 from '../../../assets/img/kl-mark5/kl5_1.jpg';
import KLMark5Img2 from '../../../assets/img/kl-mark5/kl5_2.jpg';
import KLMark5Img3 from '../../../assets/img/kl-mark5/kl5_3.jpg';
import KLMark5Img4 from '../../../assets/img/kl-mark5/kl5_4.jpg';
import KLMark5Img5 from '../../../assets/img/kl-mark5/kl5_5.jpg';

import Link from 'umi/link'
import router from 'umi/router'
import styles from './index.less'

const merchList = [
  'bracelet',
  'fresher',
  'keychain',
  'lighter',
  'numberHolder',
  'pen',
  'pendant',
  'pendantPuzzle',
  'puzzle',
  'sticker',
  'support',
  'tShirt',
  'zippoLighter'
]

const langCollection = {
  UA: {
    headerText: 'Ваші донати допомогають нам втілювати нові проекти KEEP LIFE',
    currency: 'грн',
    bracelet: {
      title: 'Браслет',
      descr: 'Стильний браслет зі справжніх гільз з логотипом Keep',
      price: 100
    },
    fresher: {
      title: 'Освіжувач повітря',
      descr: 'Освіжувач повітря для авто',
      price: 100
    },
    keychain: {
      title: 'Брелок',
      descr: 'Шкіряний брелок для ключів зі сталевою накладкою',
      price: 100
    },
    lighter: {
      title: 'Запальничка',
      descr: 'Брендована запальничка',
      price: 100
    },
    numberHolder: {
      title: 'Тримач номеру',
      descr: 'Автомобільний тримач для номеру. Цифри світяться в темряві',
      price: 100
    },
    pen: {
      title: 'Ручка',
      descr: 'Брендована кулькова ручка',
      price: 100
    },
    pendant: {
      title: 'Підвіска',
      descr: 'Підвіска для автомобіля',
      price: 100
    },
    pendantPuzzle: {
      title: 'Брелок-пазл',
      descr: 'Брелок-пазл Keep Life',
      price: 100
    },
    puzzle: {
      title: 'Пазл',
      descr: 'Дерев\'яний пазл',
      price: 100
    },
    sticker: {
      title: 'Стікери',
      descr: 'Набір наших фірмових стікерів',
      price: 100
    },
    support: {
      title: 'Підставка для телефона',
      descr: 'Дерев\'яна підставка для телефона чи планшета',
      price: 100
    },
    tShirt: {
      title: 'Футболка',
      descr: 'Футболка з логотипом Keep Life',
      price: 100
    },
    zippoLighter: {
      title: 'Бензинова запальничка',
      descr: 'Брендована бензинова запальничка.',
      price: 100
    },
    btn: 'Донат'
  },
  EN: {
    headerText: 'Your donations help us bring new KEEP LIFE projects to life',
    currency: 'UAH',
    bracelet: {
      title: 'Bracelet',
      descr: 'Stylish bracelet made from real bullet casings with the Keep logo',
      price: 100
    },
    fresher: {
      title: 'Air Freshener',
      descr: 'Car air freshener',
      price: 100
    },
    keychain: {
      title: 'Keychain',
      descr: 'Leather keychain with a steel plate',
      price: 100
    },
    lighter: {
      title: 'Lighter',
      descr: 'Branded lighter',
      price: 100
    },
    numberHolder: {
      title: 'Number Holder',
      descr: 'Car number holder. The numbers glow in the dark',
      price: 100
    },
    pen: {
      title: 'Pen',
      descr: 'Branded ballpoint pen',
      price: 100
    },
    pendant: {
      title: 'Pendant',
      descr: 'Car pendant',
      price: 100
    },
    pendantPuzzle: {
      title: 'Puzzle Keychain',
      descr: 'Keep Life puzzle keychain',
      price: 100
    },
    puzzle: {
      title: 'Puzzle',
      descr: 'Wooden puzzle',
      price: 100
    },
    sticker: {
      title: 'Stickers',
      descr: 'Set of our branded stickers',
      price: 100
    },
    support: {
      title: 'Phone Stand',
      descr: 'Wooden stand for phone or tablet',
      price: 100
    },
    tShirt: {
      title: 'T-Shirt',
      descr: 'T-shirt with Keep Life logo',
      price: 100
    },
    zippoLighter: {
      title: 'Gasoline Lighter',
      descr: 'Branded gasoline lighter.',
      price: 100
    },
    btn: 'Donate'
  }
};

const Merch = ({ isMobile, lang }) => {
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
      <div className={styles.merchSlidesItem}>
        <img key={key} alt={key} src={image} style={{ width: '100%' }} className={styles.merchSlidesItemImg} />
      </div>
    )
  }

  const merchCard = (key) => {
    const imgs = imagesKL?.merch[`${key}`]
    console.log('merchCard_imgs', imgs)
    return (
      <div className={styles.merchCard}>
        <div className={styles.merchCardMediaBlock}>
          <Carousel
            infinite
            arrows
            slidesPerRow={1}
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
            className={styles.merchCardCarousel}
          >
            {
              imgs?.map((i) => (
                slide(i, key)
              ))
            }
          </Carousel>
        </div>
        <h3 className={styles.merchCardTitle}>
          {langCollection[`${lang}`][`${key}`].title}
        </h3>
        <p className={styles.merchCardDescr}>
          {langCollection[`${lang}`][`${key}`].descr}
        </p>
        <p className={styles.merchCardPrice}>
          {`${langCollection[`${lang}`][`${key}`].price} ${langCollection[`${lang}`].currency}`}
        </p>
        <Button style={{ backgroundColor: '#A81A20', color: 'white', textTransform: 'uppercase' }}>{langCollection[`${lang}`].btn}</Button>
      </div>
    )
  }

  return (
    <div className={styles.merch}>
      {console.log('imagesKL', imagesKL)}
      <div className={styles.merchHeader}>
        <div className={styles.merchHeaderText}>
          {langCollection[`${lang}`].headerText}
        </div>
      </div>
      <div className={styles.merchWrap}>
        <div className={styles.merchList}>
          {
            merchList?.map((m) => (
              merchCard(m)
            ))
          }
        </div>
      </div>
    </div>
  );
};

Merch.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile:  state.application.isMobile
})

export default connect(mapStateToProps, null)(Merch)
