import { useEffect } from 'react'
import Model3D from '@/components/blocks/Model3D'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePage = () => {
  return (
    <div className={styles.Model3DPage}>
      <Header lang='UA' />
      <Model3D lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default DonatePage
