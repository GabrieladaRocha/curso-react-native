import React from 'react';
import { Button } from 'react-native';
import estilo from './estilo'

export default props => {

    function executar() {
        console.warn('teste do botao')
    }

    return (
        <>
            <Button
                title={'Executar'}
                onPress={executar}
            />
            <Button
                title={'Executar segundo botao'}
                onPress={function () {
                console.warn('teste dois')
            }}
        />
            <Button
                title={'Executar terceiro botao'}
                onPress={ () => { console.warn('teste trÊs')} }
        />
        </>
    )
}