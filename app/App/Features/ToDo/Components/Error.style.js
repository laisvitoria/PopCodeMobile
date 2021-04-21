import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  opa:{
    color: Colors.a120,
    fontSize: 21,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 25,
    marginBottom: 8
  },
  message:{
    color: Colors.c300,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19
  },
  containerButtonTry:{
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  try:{
    color: Colors.a220,
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19,
    marginLeft: 5
  }
})

export default styles
