import Header from '@/components/blocks/Header'
import KLMark1Report from '@/components/blocks/KLMark1Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark1ReportPage}>
      <Header lang='DE' />
      <KLMark1Report key="KLMark1ReportEn" lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default ReportsPage
