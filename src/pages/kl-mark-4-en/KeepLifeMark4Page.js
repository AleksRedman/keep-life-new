import Header from '@/components/blocks/Header'
import KLMark4Report from '@/components/blocks/KLMark4Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark4ReportPage}>
      <Header lang='EN' />
      <KLMark4Report key="KLMark4Report" lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default ReportsPage
