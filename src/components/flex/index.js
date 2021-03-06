import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _forEach from 'lodash/forEach'

import './index.scss'

export default class AtFlex extends Component {
  render () {
    const rootClass = ['at-flex']

    _forEach(this.props, (value, key) => {
      if (key === 'children') {
        return
      }
      if (key === 'alignContent') {
        return rootClass.push(`at-flex__align-content--${value}`)
      }
      rootClass.push(`at-flex__${key}--${value}`)
    })

    return <View className={rootClass}>{this.props.children}</View>
  }
}

AtFlex.propTypes = {
  wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  dirction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'between',
    'around'
  ])
}
