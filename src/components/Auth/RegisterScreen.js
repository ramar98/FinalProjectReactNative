import { View, Text, Button, Image, StyleSheet, TextInput, StatusBar,TouchableOpacity, FlatList,RefreshControl, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import styles from '../../styles/styles';

function RegisterScreen({navigation}) {
    //Logica del componente
    const [name, onChangeName] = useState("Guildo");
    const [email, onChangeEmail] = useState("Guildo@gmail.com");
    const [password, onChangePass] = useState("12345678");
    const [password2, onChangePass2] = useState("12345678");
    const [edad, onChangeEdad] = useState('27');
   
    //Post register
    const peticion =()=>{
       let url = 'https://todolist-node-production.up.railway.app/user/register';
       
       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
   
       var raw = JSON.stringify({
         "name": name,
         "email": email,
         "password": password,
         "age": parseInt(edad)
       });
   
       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
       };
   
       fetch(url, requestOptions)
         .then(response => response.json())
         .then(result => {
           console.log(result)
           console.log('registrado',name)
         })
         .catch(error => console.log('error', error));
    }
   
   
   
    return (
     <SafeAreaView style={styles.conteiner}>
   
     <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
     <View >
     <Image
               source={require('./src/assets/elipse.png')}
               style={styles.circleImage}
           />
        <Text style={styles.textoWO2 }>Welcome Onboard!</Text>
   
        <Text style={{alignSelf:'center', margin:10, marginBottom:30}}>Let's help you meet up your tasks</Text>
       
           <TextInput
               placeholder="             Enter your full name"
               
               placeholderTextColor={'#585858'}
               style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
               
               onChangeText={onChangeName}
               value={name}
              />
           <TextInput
               placeholder="             Enter mail"
               placeholderTextColor={'#585858'}
               style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
               
               onChangeText={onChangeEmail}
               value={email}
               />
           <TextInput
               placeholder="             Enter password"
               placeholderTextColor={'#585858'}
               style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
               
               onChangeText={onChangePass}
               value={password}
               />
           <TextInput
               placeholder="             Confirm password"
               placeholderTextColor={'#585858'}
               style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
               
               onChangeText={onChangePass2}
               value={password2}
               />
           <TextInput
               placeholder="             Edad"
               placeholderTextColor={'#585858'}
               style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
               
               onChangeText={onChangeEdad}
               value={edad}
               />
   
        <TouchableOpacity style={styles.buton}>
                   <Text 
                   style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                   // onPress={() => navigation.navigate('Login')}
                   onPress={() => peticion() }
                     >Register
                   </Text>
       </TouchableOpacity>
        <Text style={{alignSelf:'center',margin:10}}>Already have an account? <Text style={{color:'#5dc1b9'}}  onPress={() => navigation.navigate('Login')}>Sign In</Text></Text>
   
      </View>
      </SafeAreaView>
    );
   }

   export default RegisterScreen;