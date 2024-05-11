import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.less'

const Loader = ({ spinning = false, fullScreen }) => {
  const loaderStyles = classNames(
    styles.loader,
    {[styles.hidden]: !spinning},
    {[styles.fullScreen]: fullScreen}
  )
  return (
    <div className={loaderStyles}>
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  )
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loader
