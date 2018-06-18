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

  const buttonTextStyles = [styles.buttonText]
  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor })
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={'#F0F0F0'}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={buttonTextStyles}>
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
  textColor: PropTypes.string
}

export default InputWithButton
