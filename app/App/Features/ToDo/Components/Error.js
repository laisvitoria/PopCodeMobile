import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Error.style'
import { Images } from '../../../Themes'

export default function Error(){

    return(
        <View style={styles.container}>
            <Text style={styles.opa}>Opa!</Text>
            <Text style={styles.message}>Tivemos um problema {`\n`} ao carregar seus lembretes</Text>
            <TouchableOpacity style={styles.containerButtonTry}>
                <Image style={styles.image} source={Images.try} />
                <Text style={styles.try}>Tentar novamente</Text>
            </TouchableOpacity>
        </View>
    )
}