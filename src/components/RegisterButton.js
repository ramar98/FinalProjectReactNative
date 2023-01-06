import{StyleSheet, TouchableOpacity, Text}from 'react-native'
import {React, Component } from 'react';

class RegisterButton extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.buton}>
                <Text style={{textAlign:'center', margin:10, color:'white', fontSize:20}}>{this.props.textButton}</Text>
            </TouchableOpacity>
        )
    }
};
export default RegisterButton;

const styles = StyleSheet.create({
    buton:{
        marginTop:30,
        width:350,
        height:50,
        borderRadius:30,
        backgroundColor:'#2E9AFE',
        alignSelf: 'center',
      },
})
