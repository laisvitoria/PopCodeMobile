import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  circle:{
      width: 50,
      height: 50,
      borderStyle: 'solid',
      borderWidth: 4,
      borderColor: Colors.c600,
      borderTopColor: Colors.a120,
      borderRadius: 50
  }
})

export default styles
