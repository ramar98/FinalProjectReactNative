import React, { Component } from "react";
import {TextInput, Text}from 'react-native'

export default class InputText extends Component{
render(){
    return(
        <TextInput
            placeholder={'         '+this.props.placeholderText}
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
    )
}
}
