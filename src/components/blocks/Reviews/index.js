import PropTypes from 'prop-types';
import { connect } from 'dva'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import classNames from 'classnames'
import styles from './index.less'

const langCollection = {
  UA: {
    rw1_title: 'Анестезіолог 82 ОДШБ',
    rw1_txt_1: '- В цілому ми задоволенні роботою.',
    rw1_txt_2: '- Модуль розрахований на прийом від жовтих до червоних пацієнтів, втім нічого не заважає приймати і зелених пацієнтів.',
    rw1_txt_3: '- Як анестезіолог, я повністю задоволений, тому що є достатня кількість місця, щоб доступитись до пацієнта, виконувати будь-які втручання, як хірургічного, так і анестезіологічного характеру, єдиний нюанс – треба думати, як зробити пункт більш безпечним, а так ми дуже задоволенні.',

    rw2_title: 'Хірург 82 ОДШБ',
    rw2_txt_1: '- Безцінний досвід. Розгортається швидко: заходиш і працюєш. Все одно, що в приміщенні в лікарні, де все є під рукою і нічого не заважає. З мінусів – габарити, його важко заховати. Але загалом задоволенні цією розробкою.',
    
    rw3_title: 'Хірурги ВНКЦПЛР ',
    rw3_txt_1: '- Ми вдячні за змогу працювати в таких пунктах, протягом року ми працюємо в ньому, допомагаємо зберігати життя та здоров’я нашим бійцям.',
  },
  EN: {
    rw1_title: 'Anesthesiologist of the 82nd Airborne Assault Brigade',
    rw1_txt_1: '- Overall, we are satisfied with the work.',
    rw1_txt_2: '- The module is designed to handle patients ranging from yellow to red, but nothing prevents us from accepting green patients as well.',
    rw1_txt_3: '- As an anesthesiologist, I am completely satisfied because there is enough space to access the patient and perform any interventions, both surgical and anesthetic. The only issue is that we need to think about how to make the unit safer, but overall, we are very satisfied.',

    rw2_title: 'Surgeon of the 82nd Airborne Assault Brigade',
    rw2_txt_1: '- Invaluable experience. It sets up quickly: you walk in and work. It feels just like being in a hospital room where everything is within reach and nothing gets in the way. The downside is the size; it’s hard to hide. But overall, we are satisfied with this development.',

    rw3_title: 'Surgeons of the National Military Clinical Center',
    rw3_txt_1: '- We are grateful for the opportunity to work in such units. Over the past year, we have been working in it, helping to save the lives and health of our soldiers.',
  },
};

const Reviews = ({ isMobile, lang }) => {
  const reviewsListItemRightStyles = classNames(
    styles.reviewsListItem,
    styles.reviewsListItemRight
  )

  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsWrap}>
        <ScrollOverPack
          id="reviews"
          className={styles.reviewsWrapList}
        >
          <QueueAnim
            type="left"
            key="rw_1"
            delay={300}
            leaveReverse
          >
            <div
              key="rw_1_cntnt"
              className={styles.reviewsListItem}
            >
              <div className={styles.reviewsListItemWrap}>
                <h4 className={styles.reviewsListItemTitle}>{langCollection[`${lang}`].rw1_title}</h4>
                <p className={styles.reviewsListItemText}>{langCollection[`${lang}`].rw1_txt_1}</p>
                <p className={styles.reviewsListItemText}>{langCollection[`${lang}`].rw1_txt_2}</p>
                <p className={styles.reviewsListItemText}>{langCollection[`${lang}`].rw1_txt_3}</p>
              </div>
            </div>
          </QueueAnim>

          <QueueAnim
            type="right"
            key="rw_2"
            delay={300}
            leaveReverse
            style={{ alignSelf: 'flex-end' }}
          >
            <div
              key="rw_2_cntnt"
              className={reviewsListItemRightStyles}
            >
              <div className={styles.reviewsListItemWrap}>
                <h4 className={styles.reviewsListItemTitle}>{langCollection[`${lang}`].rw2_title}</h4>
                <p className={styles.reviewsListItemText}>{langCollection[`${lang}`].rw2_txt_1}</p>
              </div>
            </div>
          </QueueAnim>

          <QueueAnim
            type="left"
            key="rw_3"
            delay={300}
            leaveReverse
          >
            <div
              key="rw_1_cntnt"
              className={styles.reviewsListItem}
            >
              <div className={styles.reviewsListItemWrap}>
                <h4 className={styles.reviewsListItemTitle}>{langCollection[`${lang}`].rw3_title}</h4>
                <p className={styles.reviewsListItemText}>{langCollection[`${lang}`].rw3_txt_1}</p>
              </div>
            </div>
          </QueueAnim>
        </ScrollOverPack>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile:  state.application.isMobile
})

export default connect(mapStateToProps, null)(Reviews)
