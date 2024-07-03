import Header from '@/components/blocks/Header'
import KLMark4Report from '@/components/blocks/KLMark4Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark4ReportPage}>
      <Header lang='UA' />
      <KLMark4Report key="KLMark4Report" lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default ReportsPage
