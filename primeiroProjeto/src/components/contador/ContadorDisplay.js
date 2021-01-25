import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'


export default props => {
    return (
        <View style={[Estilo.txtG, style.Display]}>
            <Text style={style.DisplayText}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 32
    }
})