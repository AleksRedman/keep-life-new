import Reviews from '@/components/blocks/Reviews'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import styles from './index.less'

const ReviewsPage = () => {
  return (
    <div className={styles.reviewsPage}>
      <Header lang='UA' />
      <Reviews lang='UA' />
      <Footer short lang='UA' />
    </div>
  )
}

export default ReviewsPage
