import { useEffect } from 'react'
import DonatePuzzle from '@/components/blocks/DonatePazzle'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePuzzlePage = () => {
  return (
    <div className={styles.donatesPuzzlePage}>
      <Header lang='UA' />
      <div className={styles.donatesPuzzlePageContentWrap}>
        <DonatePuzzle lang='UA' />
      </div>
      <Footer short lang='UA' />
    </div>
  )
}

export default DonatePuzzlePage
