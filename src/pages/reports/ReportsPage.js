import { useEffect } from 'react'
import Header from '@/components/blocks/Header'
import Page5 from '@/components/Page5'
import ReportKL2 from '@/components/ReportKL2'
import NewsAboutKL1 from '@/components/NewsAboutKL1'
import NewsAboutKL2 from '@/components/NewsAboutKL2'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReportsPage = () => {
  return (
    <div className={styles.reportsPage}>
      <Header />
      <Page5 key="ReportKL1" />
      <NewsAboutKL1 key="NewsAboutKL1" />
      <ReportKL2 key="ReportKL2" />
      <NewsAboutKL2 key="NewsAboutKL2" />
      <Footer short />
    </div>
  )
}

export default ReportsPage
