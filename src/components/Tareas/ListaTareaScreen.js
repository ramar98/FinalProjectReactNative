import { View, Text, Button, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import styles from '../../styles/styles'; //Estilos
import LocalStorage from '../../localStorage';

function ListaTareaScreen({navigation}) {

    const [tareas, setTareas] = useState([])
    const [Atareas, setATareas] = useState(false)
    
    //Peticion para Traer las tareas
    const peticion = async()=>{
      
      
            //PETCICION PARA TRAER LAS TAREAS
            let token = await LocalStorage.getItem('token')
            let myHeaders = new Headers();
            //console.log('TOKEN Get===',token )
            // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JjMGVmMzQ1ODg2ODAwMTQ3YmY1MzIiLCJpYXQiOjE2NzMzNjcyMDR9.QEDqd6O-S1GyhmoCIOTGWVRUMWj11wqnleLffon5HwI");
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");
            
            let requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch("https://todolist-node-production.up.railway.app/task", requestOptions)
              .then(response => response.json())
              .then(({data}) => {
                //console.log('Peticion =',data)
                //guardar en el LocalStorage
                // LocalStorage.setItem('Tareas',data)
                console.log( 'Tareas' , data)
                setTareas(data)
              })
              .catch(error => console.log('error', error));
    
    }
    
    
    let focusListener = null;
    
    focusListener = navigation.addListener('focus', () => {
    
      setATareas(!Atareas)
    
       });
    
    useEffect(() => {
      peticion()
    
    }, [Atareas])
    
    //Eliminar una tarea
    const PeticionEliminar = async(_idTarea)=>{
      let token = await LocalStorage.getItem('token')
      let myHeaders = new Headers();
    
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
    
      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
    
      fetch("https://todolist-node-production.up.railway.app/task/"+_idTarea, requestOptions)
        .then(response => response.json())
        .then(result => {
          //console.log('Eliminado de tarea')
          //console.log('_idTarea',_idTarea)
          console.log('Se elimino todo bien')
          peticion()
        })
        .catch(error => console.log('error', error));
      }
    
      //LogOut
      const logOut = async()=>{
        let token = await LocalStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token)

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://todolist-node-production.up.railway.app/user/logout", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            LocalStorage.removeItem('token')
            navigation.navigate('Login')
          })
          .catch(error => console.log('error', error));
      }
    const renderItem = ({item}) => {
    
      return (
    
        <View >
          <View style={{flexDirection:'row'}} >
          
          { item.completed ? 
          <TouchableOpacity style={styles.butonTareaCompletada}>
                    <Text 
                    style={{textAlign:'center', margin:5, color:'black', fontSize:20}} 
                     onPress={() => {
                      //limpiamos localStorage
                      // LocalStorage.removeItem('descripcionTarea')
                      // LocalStorage.removeItem('idTarea')
                      
                      LocalStorage.setItem('idTarea',item._id) //guardamos el id de la tarea a modificar
                      
                      LocalStorage.setItem('descripcionTarea',item.description) //guardamos el id de la tarea a modificar
                      
                      console.log('completedTarea Listar'  ,item.completed)
                      LocalStorage.setItem('completedTarea'  ,item.completed) //

                      navigation.navigate('ModificarTarea')
                     }}
                      >{item.description}
                    </Text>
            </TouchableOpacity>:
                  <TouchableOpacity style={styles.butonTarea}>
                  <Text 
                  style={{textAlign:'center', margin:5, color:'black', fontSize:20}} 
                  onPress={() => {
                    //limpiamos localStorage
                    // LocalStorage.removeItem('descripcionTarea')
                    // LocalStorage.removeItem('idTarea')
                    
                    LocalStorage.setItem('idTarea',item._id) //guardamos el id de la tarea a modificar
                    console.log('completedTarea Listar ='  ,item.completed)

                    LocalStorage.setItem('descripcionTarea',item.description) //guardamos el id de la tarea a modificar
                    LocalStorage.setItem('completedTarea'  ,item.completed)
                    navigation.navigate('ModificarTarea')
                  }}
                    >{item.description}
                  </Text>
          </TouchableOpacity>
            
            }
          
            
            


            <TouchableOpacity  style={styles.butonTareaEliminar}>
                    <Image
                        source={require('../../assets/eliminar.png')}
                        style={{height:40 ,width:40}}
                        onPress={()=> {
                          PeticionEliminar(item._id)
                       
                        }}
                    />
                    
                    {/* <Text 
                      style={{textAlign:'center', margin:5, color:'black', fontSize:20}}
                      
                      }  
                    >
                      Eliminar
                    </Text> */}
            </TouchableOpacity>
          {/* <Text >{item.description}</Text> */}
    
          </View>
          
        </View>
      );
    };
    
      return (
        
        <SafeAreaView style={styles.conteiner}>
          <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
          <View >
          <Image
                source={require('../../assets/elipse.png')}
                style={styles.circleImage}
            />
    
            {/* lista de tareas ejemplo  */}
            
            <Text style={styles.textoWO2 }>Tu Lista de Tarea</Text>
            <View 
              style={{height:400}}
            >
    
              <FlatList
                // style={{ flex: 1 }}
                data={tareas}
                renderItem={renderItem}
                keyExtractor={ item => item._id}
                // refreshControl={
                //   <RefreshControl refreshing={loading} onRefresh={peticion} />
                // }
              />
            </View>
            <View>
    
              
              
              <TouchableOpacity style={styles.buton}>
              <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => navigation.navigate('NuevaTarea')}
                  >Nueva tarea
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.buton}>
                      <Text 
                      style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                      onPress={() => {
                        logOut()
                      } }
                        >Cerrar Sesion
                      </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.buton}>
              <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => {
                  navigation.navigate('Login')
                }}
                  >Atras
                </Text>
              </TouchableOpacity> */}
              </View>
    
          </View>
        </SafeAreaView>
      );
    }

    export default ListaTareaScreen;