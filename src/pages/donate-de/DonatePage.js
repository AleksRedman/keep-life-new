import { useEffect } from 'react'
import Donate from '@/components/blocks/Donate'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePage = () => {
  return (
    <div className={styles.donatesPage}>
      <Header lang='DE' />
      <Donate lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default DonatePage
