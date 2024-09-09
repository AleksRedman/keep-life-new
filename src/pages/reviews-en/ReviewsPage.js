import Reviews from '@/components/blocks/Reviews'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReviewsPage = () => {
  return (
    <div className={styles.reviewsPage}>
      <Header lang='EN' />
      <Reviews lang='EN' />
      <Footer short lang='EN' />
    </div>
  )
}

export default ReviewsPage
