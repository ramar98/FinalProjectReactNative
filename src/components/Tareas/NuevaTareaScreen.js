import { View, Text, Button, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import styles from '../../styles/styles'; //Estilos
import LocalStorage from '../../localStorage';


function NuevaTareaScreen({navigation}) {
  
    const [textoTarea, setText] = useState('')
    const peticion = async()=> {
     
      let token = await LocalStorage.getItem('token')
      let myHeaders = new Headers();
  
      //console.log('TOKEN Get===',token )
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
  
      let raw = JSON.stringify({
        "description": textoTarea
      });
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      fetch("https://todolist-node-production.up.railway.app/task", requestOptions)
        .then(response => response.text())
        .then(result => {
          //console.log(result)
          navigation.goBack()
          
        })
        .catch(error => console.log('error', error));
    }
    return (
      
      <SafeAreaView style={styles.conteiner}>
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
        <View >
        
        <Image
              source={require('../../assets/elipse.png')}
              style={styles.circleImage}
          />

        <Text style={styles.textoWO2 }>Crea una Nueva Tarea</Text>

        <TextInput
              placeholder="Escribí aquí tu nueva tarea..."
              placeholderTextColor={'#585858'}
              style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
              
              onChangeText={setText}
              value={textoTarea} 
              />
          <TouchableOpacity style={styles.butonguardar}>
                  <Text 
                  style={{textAlign:'center', margin:15 ,color:'white', fontSize:20}} 
                  onPress={() =>{
                    peticion()
                    
                  } }
                    >Guardar Tarea
                  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buton}>
                  <Text 
                  style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                  onPress={() => navigation.goBack()}
                    >Volver
                  </Text>
          </TouchableOpacity>
    
        </View>
      </SafeAreaView>
    );
  }


  export default NuevaTareaScreen;