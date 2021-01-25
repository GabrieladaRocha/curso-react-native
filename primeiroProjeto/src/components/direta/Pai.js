import React from 'react'
import { Text, View } from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho'

export default props => {
    let x = 113
    let y = 76
    
    return (
        <>
        <Filho a={x} b={y}/>
        <Filho a={x + 100} b={y + 123}/>
        </>
    )
}