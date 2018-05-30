import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'

// const INPUT_HEIGHT = '48'
// const BORDER_RADIUS = '4'

export default EStyleSheet.create({
  // $buttonBackgroundColorBase: '$white',
  // $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: 48,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  buttonContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue'
  },
  input: {
    height: 48,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText'
  },
  border: {
    height: 48,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  }
})