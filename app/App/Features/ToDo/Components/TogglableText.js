// @flow
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './TogglableText.style'
import Colors from '../../../Themes/Colors'

type Props = {
  text: string,
  onPressText: () => mixed,
  toggled: boolean
}

const TogglableText = ({ text, onPressText, toggled, fetching }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, {
        backgroundColor: toggled ? Colors.a120 : fetching && !toggled ? Colors.c600 : Colors.a420,
        height: fetching===true ? 7 : 'auto',
        marginRight: fetching ? 7 : 'auto',
      }]}
      onPress={onPressText}
      disabled={toggled}
    >
      <Text style={[styles.text, toggled && { color: Colors.a420, fontWeight: 'bold' }]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TogglableText
