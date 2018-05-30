import PropTypes from 'prop-types'
import React from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import color from 'color'

import styles from './styles'

const InputWithButton = (props) => {
  const { onPress, buttonText, editable } = props

  // const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
  //   styles.buttonBackgroundColorModifier
  // )

  const containerStyles = [styles.container]
  if (editable === false) {
    containerStyles.push(styles.containerDisabled)
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={'#F0F0F0'}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} />
    </View >
  )
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton
