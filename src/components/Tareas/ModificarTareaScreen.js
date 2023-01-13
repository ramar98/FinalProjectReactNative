import { View, Text, Button, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import styles from '../../styles/styles'; //Estilos
import LocalStorage from '../../localStorage';

function ModificarTareaScreen({navigation}) {
    const [textoTarea, setText] = useState()
      
      const obtenerTarea = async ()=>{
         let DTarea = await LocalStorage.getItem('descripcionTarea')
         //console.log('Modificar Tarea DTarea=',DTarea)
         setText(DTarea)
         
        }
        
      useEffect(() => {
        obtenerTarea()
        
      }, [])
        
        
        // //console.log('Modificar Tarea descripcionTarea',descripcionTarea)
     
     const peticion = async()=> {
       
      let idTarea         = await LocalStorage.getItem('idTarea')
      let token            = await LocalStorage.getItem('token')
      
      let myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
      
      let raw = JSON.stringify({
        "description": textoTarea
        // "completed": true
      });
      
      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
  
      fetch("https://todolist-node-production.up.railway.app/task/"+idTarea, requestOptions)
        .then(response => response.text())
        .then(result => {
          //console.log(result)
          navigation.goBack()  
        }  
        )
    }
    return (
      
      <SafeAreaView style={styles.conteiner}>
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
        <View >
        <Image
              source={require('../../assets/elipse.png')}
              style={styles.circleImage}
          />
        <TextInput
              placeholder="             Modificar Tarea"
              placeholderTextColor={'#585858'}
              style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
              
              onChangeText={setText}
              value={textoTarea} 
              />
          <TouchableOpacity style={styles.buton}>
                  <Text 
                  style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                  onPress={() => {
                    // obtenerTarea()
                    peticion()
                    
                  }
                }
                    >Modificar Tarea
                  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buton}>
                  <Text 
                  style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                  onPress={() => navigation.goBack()}
                    >Atras
                  </Text>
          </TouchableOpacity>
    
        </View>
      </SafeAreaView>
    );
  }

  export default ModificarTareaScreen;