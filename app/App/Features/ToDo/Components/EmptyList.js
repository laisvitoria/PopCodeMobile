import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './EmptyList.style'
import { Images } from '../../../Themes'

export default function EmptyList(){

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={Images.sol} />
            <Text style={styles.title}>Tudo limpo!</Text>
            <Text style={styles.message}>Adcione um novo lembrete {`\n`} tocando no '+'.</Text>
        </View>
    )
}