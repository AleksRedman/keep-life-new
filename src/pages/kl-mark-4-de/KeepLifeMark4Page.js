import Header from '@/components/blocks/Header'
import KLMark4Report from '@/components/blocks/KLMark4Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark4ReportPage}>
      <Header lang='DE' />
      <KLMark4Report key="KLMark4Report" lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default ReportsPage
