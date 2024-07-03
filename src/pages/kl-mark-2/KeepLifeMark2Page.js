import Header from '@/components/blocks/Header'
import KLMark2Report from '@/components/blocks/KLMark2Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark2ReportPage}>
      <Header lang='UA' />
      <KLMark2Report key="KLMark2Report" lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default ReportsPage
