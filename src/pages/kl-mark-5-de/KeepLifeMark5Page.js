import Header from '@/components/blocks/Header'
import KLMark5Report from '@/components/blocks/KLMark5Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark5ReportPage}>
      <Header lang='DE' />
      <KLMark5Report key="KLMark5Report" lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default ReportsPage
