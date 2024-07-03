import Projects from '@/components/blocks/Projects'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePage = () => {
  return (
    <div className={styles.projectsPage}>
      <Header lang='UA' />
      <Projects lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default DonatePage
