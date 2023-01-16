import { View, Text, Button, Image, StatusBar, TouchableOpacity, TextInput,Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import styles from '../../styles/styles'; //Estilos
import LocalStorage from '../../localStorage';

function ModificarTareaScreen({navigation}) {
    const [nombreTarea, setNombreTarea]         = useState()
    const [tareaCompletada, setTareaCompletada] = useState()

    const obtenerTarea = async ()=>{
        let DTarea         = await LocalStorage.getItem('descripcionTarea')
        let CompletedTarea = await LocalStorage.getItem('completedTarea')
        console.log('CompletedTarea = ',CompletedTarea)
        
        setNombreTarea(DTarea)
        console.log('tareaCompletada mod= ',tareaCompletada)

        if (CompletedTarea == 'true'){
          setTareaCompletada(true)
          console.log('vino por true')
        }else{
          setTareaCompletada(false)
          console.log('vino por false')
        }
        // setTareaCompletada(Boolean.parseBoolean(CompletedTarea))

        console.log('tareaCompletada mod= ',tareaCompletada)


      }
        
        // //console.log('Modificar Tarea descripcionTarea',descripcionTarea)
     
     const peticion = async()=> {
       
      let idTarea         = await LocalStorage.getItem('idTarea')
      let token            = await LocalStorage.getItem('token')
      
      let myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
      
      let raw = JSON.stringify({
        "description": nombreTarea,
        "completed": tareaCompletada
      });
      
      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
  
      fetch("https://todolist-node-production.up.railway.app/task/"+idTarea, requestOptions)
        .then(response => response.text('descripcionTarea'))
        .then(result => {
          //console.log(result)
          LocalStorage.removeItem('') 
          navigation.goBack()  
        }  
        )
    }

       useEffect(() => {
        obtenerTarea()
        
      }, [])

      //funcion para cambiar el estado de la tarea
      const handleSwitchChange = ()=>{
        console.log('tareaCompletada = ',tareaCompletada)
        setTareaCompletada(!tareaCompletada)
        console.log('tareaCompletada = ',tareaCompletada)
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
              
              onChangeText={setNombreTarea}
              value={nombreTarea} 
              />

              {
                tareaCompletada ? 
                <Switch style={{alignSelf:'center'}} 
                // trackColor={{ false: "#767577", true: "#81b0ff" }}
                // thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                // ios_backgroundColor="#3e3e3e"
                  onChange={handleSwitchChange} 
                  value   ={true} 
                /> :
                <Switch style={{alignSelf:'center'}} 
                // trackColor={{ false: "#767577", true: "#81b0ff" }}
                // thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                // ios_backgroundColor="#3e3e3e"
                  onChange={handleSwitchChange} 
                  value   ={false} 
                /> 
              }
          

          {/* <Text style={tareaCompletada ? styles.text : styles.otro} >
            {tareaCompletada ? 'Checkeado' : 'NoCheck'}
          </Text> */}

          {/* <Switch
          style={{ borderWidth: 5,}}
          onValueChange={handleSwitchChange}
          value={tareaCompletada}
          /> */}

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