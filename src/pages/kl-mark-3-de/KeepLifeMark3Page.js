import Header from '@/components/blocks/Header'
import KLMark3Report from '@/components/blocks/KLMark3Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark3ReportPage}>
      <Header lang='DE' />
      <KLMark3Report key="KLMark3Report" lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default ReportsPage
