import Header from '@/components/blocks/Header'
import KLMark2Report from '@/components/blocks/KLMark2Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark1ReportPage}>
      <Header lang='DE' />
      <KLMark2Report key="KLMark2ReportEn" lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default ReportsPage
