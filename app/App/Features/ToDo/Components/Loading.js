import React, {useState} from 'react'
import { Animated, View, Text } from 'react-native'
import styles from './Loading.style'

export default function Loading(){
    const [rotate, setRotate] = useState(new Animated.Value(0))
    Animated.timing(
        rotate,
        {
            toValue: 40,
            speed: 8,
            duration: 10000
        }
    ).start();

    return(
        <View style={styles.container}>
            <Animated.View style={[styles.circle, {transform: [{rotate: rotate}]}]}>
            </Animated.View>
        </View>
    )
}