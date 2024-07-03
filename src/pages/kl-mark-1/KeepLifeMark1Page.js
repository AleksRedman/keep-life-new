import Header from '@/components/blocks/Header'
import KLMark1Report from '@/components/blocks/KLMark1Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark1ReportPage}>
      <Header lang='UA' />
      <KLMark1Report key="KLMark1Report" lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default ReportsPage
