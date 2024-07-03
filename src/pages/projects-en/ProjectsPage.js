import Projects from '@/components/blocks/Projects'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const DonatePage = () => {
  return (
    <div className={styles.projectsPage}>
      <Header lang='EN' />
      <Projects lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default DonatePage
