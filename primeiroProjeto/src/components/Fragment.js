import React, {Fragment} from 'react';
import {  Text } from 'react-native';
import estilo from './estilo'

export default props => {
/* pode ser usado react.fragment, uma view ou somente as tags */
    return (
        <Fragment> 
            <Text style={estilo.txtG}>{props.principal}</Text>
            <Text >{props.secundario}</Text>
        </Fragment>
    )
}