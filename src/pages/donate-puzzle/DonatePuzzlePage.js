import { useEffect } from 'react'
import DonatePuzzle from '@/components/blocks/DonatePazzle'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePuzzlePage = () => {
  return (
    <div className={styles.donatesPuzzlePage}>
      <Header />
      <div className={styles.donatesPuzzlePageContentWrap}>
        <DonatePuzzle />
      </div>
      <Footer short />
    </div>
  )
}

export default DonatePuzzlePage
