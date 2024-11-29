import { useEffect } from 'react'
import Model3D from '@/components/blocks/Model3D'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePage = () => {
  return (
    <div className={styles.Model3DPage}>
      <Header lang='EN' />
      <Model3D lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default DonatePage
