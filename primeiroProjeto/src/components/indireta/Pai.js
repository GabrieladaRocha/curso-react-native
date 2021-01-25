import React, {useState} from 'react'
import { Text, View } from 'react-native'
import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text>{num}</Text>
            <Filho
                min={1}
                max={75}
                funcao={exibirValor}
            />
        </>
    )
}