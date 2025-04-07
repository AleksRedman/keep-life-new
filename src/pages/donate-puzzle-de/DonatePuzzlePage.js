import { useEffect } from 'react'
import DonatePuzzle from '@/components/blocks/DonatePazzle'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePuzzlePage = () => {
  return (
    <div className={styles.donatesPuzzlePage}>
      <Header lang='DE' />
      <div className={styles.donatesPuzzlePageContentWrap}>
        <DonatePuzzle lang='DE' />
      </div>
      <Footer short lang='DE' />
    </div>
  )
}

export default DonatePuzzlePage
