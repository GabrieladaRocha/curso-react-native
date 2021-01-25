import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo'

export default function Comp1() {
    return <Text style={estilo.txtG}>comp Padrão</Text>
}

export function Comp2() {
    return <Text style={estilo.txtG}>comp 2</Text>
}

export function Comp3() {
    return <Text style={estilo.txtG}>comp 3</Text>
}