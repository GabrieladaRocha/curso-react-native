import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

//import CompPadrao, { Comp2, Comp3 } from './components/Multi'
//import Primeiro from './components/Primeiro'
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Fragment from './components/Fragment'
//import Button from './components/Button'
//import Counter from './components/Counter'
//import Pai from './components/indireta/Pai'
//import Contador from './components/contador/ContadorV2'
//import ParImpar from './components/ParImpar'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome';


export default () => {

    return (
        <SafeAreaView style={style.App}>
            <DigiteSeuNome />
            {/* 
            <ListaProdutosV2 />
            <ParImpar num={13}/>
            <Button />
            <Contador />
            <Pai />
            <MinMax min={3} max={27}/>
            <Counter inicial={100} />            
            <Fragment principal={'Eu sou foda pra caralho'} secundario={'teste de texto sem style'} />
        <Aleatorio min={3} max={27}/>
         <CompPadrao /> 
        <Comp2 />
        <Primeiro/>
        <Comp3 /> */}
        </SafeAreaView>)
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})