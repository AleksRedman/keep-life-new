import Merch from '@/components/blocks/Merch'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const MerchPage = () => {
  return (
    <div className={styles.merchPage}>
      <Header lang='EN' />
      <Merch lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default MerchPage
