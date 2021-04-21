import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Error.style'

export default function Error(){

    return(
        <View style={styles.container}>
            <Text style={styles.opa}>Opa!</Text>
            <Text style={styles.message}>Tivemos um problema {`\n`} ao carregar seus lembretes</Text>
            <TouchableOpacity style={styles.containerButtonTry}>

                <Text style={styles.try}>Tentar novamente</Text>
            </TouchableOpacity>
        </View>
    )
}