import { useEffect } from 'react'
import Header from '@/components/blocks/Header'
import KL1Report from '@/components/blocks/KL1Report'
import KL2Report from '@/components/blocks/KL2Report'
import NewsAboutKL1 from '@/components/blocks/NewsAboutKL1'
import NewsAboutKL2 from '@/components/blocks/NewsAboutKL2'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.reportsPage}>
      <Header lang='EN' />
      <KL1Report key="ReportKL1" lang='EN' />
      <NewsAboutKL1 key="NewsAboutKL1" lang='EN' />
      <KL2Report key="ReportKL2" lang='EN' />
      <NewsAboutKL2 key="NewsAboutKL2" lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default ReportsPage
