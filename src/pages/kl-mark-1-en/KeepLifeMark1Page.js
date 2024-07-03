import Header from '@/components/blocks/Header'
import KLMark1Report from '@/components/blocks/KLMark1Report'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.klMark1ReportPage}>
      <Header lang='EN' />
      <KLMark1Report key="KLMark1ReportEn" lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default ReportsPage
