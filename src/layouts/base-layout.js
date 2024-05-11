import { Component } from 'react'
import PropTypes from 'prop-types'
import PrimaryLayout from './primary-layout'

class BaseLayout extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render () {
    const { children, location } = this.props

    return <PrimaryLayout locationPath={location.pathname || '/'}>{children}</PrimaryLayout>
  }
}

export default BaseLayout
