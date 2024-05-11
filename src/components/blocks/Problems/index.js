import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: 'Проблеми роботи польових медиків',
    li1_1: 'Пошкоджені дороги',
    li2_1: 'Обстрілювані шляхи евакуації',
    li3_1: 'Навмисне ураження росіянами медзакладів',
    li4_1: 'Відсутність санітарних умов y стабпунктах',
    li5_1: 'Нестабільність температури/погодних умов',
    li6_1: 'Нестача медичного обладнання',
    h2: 'Переваги KL',
    li1_2: 'мінімальні зовнішні габарити',
    li2_2: 'розсувна робоча зона',
    li3_2: ' час розгортання та прогріву',
    li4_2: 'оперативна передислокація',
    li5_2: ' прохідність по бездоріжжю',
    li6_2: 'дотримання санітарних норм',
    li7_2: 'повна автономність',
  },
  EN: {
    h1: 'Challenges of Field Medics',
    li1_1: 'Damaged roads',
    li2_1: 'Shelled evacuation routes',
    li3_1: 'Deliberate targeting of medical facilities by Russians',
    li4_1: 'Lack of sanitary conditions at stabilization points',
    li5_1: 'Temperature/weather instability',
    li6_1: 'Shortage of medical equipment',
    h2: 'Advantages of KL',
    li1_2: 'Minimal external dimensions',
    li2_2: 'Sliding working area',
    li3_2: ' deployment and heating time',
    li4_2: 'Operational redeployment',
    li5_2: ' off-road capability',
    li6_2: 'Compliance with sanitary standards',
    li7_2: 'Full autonomy',
  }
};

const Problems = ({ isMobile, lang }) => {
  return (
    <section id="problems" className={styles.problems}>
      <div className={styles.problemsWrap}>
        <div className={styles.problemsImgWrap} />
        <div className={styles.problemsWrapProblems}>
          <h4 className={styles.problemsListOfProblemsTitle}>{langCollection[`${lang}`].h1}</h4>
          <ul className={styles.problemsListOfProblems}>
            <li>{langCollection[`${lang}`].li1_1}</li>
            <li>{langCollection[`${lang}`].li2_1}</li>
            <li>{langCollection[`${lang}`].li3_1}</li>
            <li>{langCollection[`${lang}`].li4_1}</li>
            <li>{langCollection[`${lang}`].li5_1}</li>
            <li>{langCollection[`${lang}`].li6_1}</li>
          </ul>
        </div>
        <div className={styles.problemsWrapAdvantages}>
          <h4 className={styles.problemsListOfAdvantagesTitle}>{langCollection[`${lang}`].h2}</h4>
          <ul className={styles.problemsListOfAdvantages}>
            <li>{langCollection[`${lang}`].li1_2}</li>
            <li>{langCollection[`${lang}`].li2_2}</li>
            <li><strong>min</strong><span>{langCollection[`${lang}`].li3_2}</span></li>
            <li>{langCollection[`${lang}`].li4_2}</li>
            <li><strong>max</strong><span>{langCollection[`${lang}`].li5_2}</span></li>
            <li>{langCollection[`${lang}`].li6_2}</li>
            <li>{langCollection[`${lang}`].li7_2}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Problems.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Problems)
