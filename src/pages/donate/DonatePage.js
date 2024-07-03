import { useEffect } from 'react'
import Donate from '@/components/blocks/Donate'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePage = () => {
  return (
    <div className={styles.donatesPage}>
      <Header lang='UA' />
      <Donate lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default DonatePage
