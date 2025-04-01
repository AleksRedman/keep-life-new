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
      <Header lang='UA' />
      <KL1Report key="ReportKL1" lang='UA' />
      <NewsAboutKL1 key="NewsAboutKL1" lang='UA' />
      <KL2Report key="ReportKL2" lang='UA' />
      <NewsAboutKL2 key="NewsAboutKL2" lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default ReportsPage
