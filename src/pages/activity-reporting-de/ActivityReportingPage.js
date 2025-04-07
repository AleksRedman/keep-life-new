import { useEffect } from 'react'
import Header from '@/components/blocks/Header'
import ActivityReporting from '@/components/blocks/ActivityReporting'
// import KL1Report from '@/components/blocks/KL1Report'
// import KL2Report from '@/components/blocks/KL2Report'
// import NewsAboutKL1 from '@/components/blocks/NewsAboutKL1'
// import NewsAboutKL2 from '@/components/blocks/NewsAboutKL2'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ActivityReportingPage = () => {
  return (
    <div className={styles.activityReportingPage}>
      <Header lang='DE' />
      <ActivityReporting lang='DE' />
      <Footer short lang='DE' />
    </div>
  )
}

export default ActivityReportingPage
