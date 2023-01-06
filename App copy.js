import React from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import RegisterButton from './src/components/RegisterButton'
import InputText from './src/components/InputText';
import Prueba from './src/Views/prueba';

const App = () => {

  return(
    <SafeAreaView style={styles.conteiner}>
      <View>
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
        <Image style={styles.circleImage} source={require('./src/assets/elipse.png')} />
        <Text style={styles.textoWO}>
          Welcome OnBoard!
        </Text>
        <Text style={styles.textoLets}>Let's help you meet up your tasks.</Text>
        <InputText placeholderText='Enter your full name'/>
        <InputText placeholderText='Enter your e-mail'/>
        <InputText placeholderText='Enter your password'/>
        <InputText placeholderText='Confirm password'/>
        <RegisterButton textButton='Register'/>
        <Text style={styles.textoAlready}>Already have account ? <Text style={{color:'#2E9AFE'}}>Sign in</Text></Text>

      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:'#F2F2F2'
  },
  textoWO:{
    fontWeight:'bold',
    color: 'black',
    fontSize: 22,
    marginTop:50,
    alignSelf: 'center'
  },
  textoLets:{
    alignSelf:'center',
    margin:10,
    marginBottom: 75,
    color:'#585858',
    fontSize:16
  },
  textoAlready:{
    alignSelf:'center',
    margin:10,
    color:'#585858',
    fontSize:16
  },
  circleImage:{
    marginLeft: -100,
    marginTop: -110
  },
});

export default App;
