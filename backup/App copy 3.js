// import * as React from 'react';

import { View, Text, Button, Image, StyleSheet, TextInput, StatusBar,TouchableOpacity, FlatList,RefreshControl } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import LocalStorage from './src/localStorage';


//login
function HomeScreen({navigation}) {

  const [name, onChangeText] = useState("muh.nurali43@gmail.com");
  const [password, onChangePass] = useState("12345678");
  const [error1, onChangeError1] = useState(false);
  // const [number, onChangeNumber] = React.useState(null);
  
  const validacion = ()=>{
    // Que no acepte campos vacios
    // Contraseña mayor a 7 caracteres
    // Que el nombre no acepte caracteres especiales
    if (name = ''){
      console.log('name = null')
      onChangeError1(true)
      return 0
    }


  }

  const peticion =()=>{
  
    // const result = validacion()
    // if (result != 0){
      console.log(name, password)
      let url = 'https://todolist-node-production.up.railway.app/user/login';
      let data = {
        email: name,
        password: password
      };

      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        //limpiar localStorage
        // LocalStorage.removeItem('token')
        // console.log('Success:', response)
        // setToken('Bearer '+response.token)
        let token = 'Bearer '+response.token

        console.log('TOKEN SET==',token)
        LocalStorage.setItem('token',token)


        //PETCICION PARA TRAER LAS TAREAS
          let myHeaders = new Headers();
          console.log('TOKEN Get===',token )
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
              console.log('Peticion =',data)
              //guardar en el LocalStorage
              
              LocalStorage.setItem('Tareas',data)
            })
            .catch(error => console.log('error', error));
        
      });
       navigation.navigate('ListaTarea')
      
  }

 return (
  <SafeAreaView style={styles.conteiner}>

  <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
  <View >
  <Image
            source={require('./src/assets/elipse.png')}
            style={styles.circleImage}
        />
        <Text style={styles.textoWO2 }>Welcome Back!</Text>

   <View >
        <Image
          source={require('./src/assets/login.png')}
          style={styles.image}
        />
        
        <TextInput
            placeholder="             Enter your e-mail"
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            
            onChangeText={onChangeText}
            value={name}
            
            />
            {
              (error1) ? <Text style={{color:'red', alignSelf:'center'}}>error</Text> : null
            }
            
        

        <TextInput
            placeholder="              Confirm password"
            // value='12345678'
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            
            onChangeText={onChangePass}
            value={password} 
            />
    </View>
    <Text style={styles.textoWOblu } >Forget Password</Text>
    

   <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                // onPress={() => navigation.navigate('Home')}
                onPress={() => peticion()}
                  >Login
                </Text>
    </TouchableOpacity>
   <Text style={{alignSelf:'center',margin:10}}>Don't have an account? <Text onPress={() => navigation.navigate('Details')} style={{color:'#5dc1b9'}}>Sign Up</Text></Text>
 </View>
 </SafeAreaView>

 );
}


function DetailsScreen({navigation}) {
 //Logica del componente
 //Post register
 const peticion =()=>{
    let url = 'https://api-nodejs-todolist.herokuapp.com/user/register';
    let data = {
      name: "Muhammad Nur Ali",
      email: "muh.nurali43@gmail.com",
      password: "12345678",
      age: 20
    };
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
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
            value='Muhammad Nur Ali'
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
        <TextInput
            placeholder="             Enter mail"
            
            value='muh.nurali43@gmail.com'
            placeholderTextColor={'#585858'}

            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
        <TextInput
            placeholder="             Enter password"
            value='123456789'
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
        <TextInput
            placeholder="             Confirm password"
            value='123456789'
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
        <TextInput
            placeholder="             Edad"
            value='20'
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />

     <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                // onPress={() => navigation.navigate('Home')}
                onPress={() => peticion() }
                  >Register
                </Text>
    </TouchableOpacity>
     <Text style={{alignSelf:'center',margin:10}}>Already have an account? <Text style={{color:'#5dc1b9'}}  onPress={() => navigation.navigate('Home')}>Sign In</Text></Text>

   </View>
   </SafeAreaView>
 );
}

// Get Started
function GetStarted({navigation}) {
  return (
    
    <SafeAreaView style={styles.conteiner}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View >

      <Image
            source={require('./src/assets/elipse.png')}
            style={styles.circleImage}
        />
      <Image
            source={require('./src/assets/onboarding.png')}
            style={styles.image}
        />
      
        <Text style={styles.textoWO }>Gets things done with TODo</Text>
  
        <Text style={styles.textoLets2 }>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Magna in
        Volutpat, tristique lacina ut.
        Elementum non turpis nullam ipsum</Text>
      
        <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => navigation.navigate('Home')}
                  >Get Started
                </Text>
        </TouchableOpacity>
  
      </View>
    </SafeAreaView>
  );
 }
// ListaTarea
function ListaTareaScreen({navigation}) {

const [tareas, setTareas] = useState([])
//postman

const peticion = async() => {

  let myHeaders = new Headers();
  let token = await LocalStorage.getItem('token')
  console.log('TOKEN Get===',token )
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
      console.log('Peticion =',data)
      //guardar en el LocalStorage
      
      // LocalStorage.setItem('Tareas',data)
      setTareas(data)
      

    })
    .catch(error => console.log('error', error));

}
useEffect(() => {
  peticion()
}, [])

  




const renderItem = ({item}) => {
  console.log('renderItem -> tareas = ',item)
  // console.log('renderItem -> tareas.description = ',tareas.description)
  console.log('lista.description =', item.description)

  return (

    <View >
      <View >
      <TouchableOpacity style={styles.butonTarea}>
                <Text 
                style={{textAlign:'center', margin:5, color:'black', fontSize:20}} 
                 onPress={() => {
                  //limpiamos localStorage
                  // LocalStorage.removeItem('descripcionTarea')
                  // LocalStorage.removeItem('idTarea')
                  
                  LocalStorage.setItem('idTarea',item._id) //guardamos el id de la tarea a modificar
                  
                  LocalStorage.setItem('descripcionTarea',item.description) //guardamos el id de la tarea a modificar
                  
                  navigation.navigate('ModificarTarea')
                 }}
                  >{item.description}
                </Text>
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
            source={require('./src/assets/elipse.png')}
            style={styles.circleImage}
        />

        {/* lista de tareas  */}
        {/* <FlatList
          // style={{ flex: 1 }}
          data={tareas}
          renderItem={renderItem}
          // keyExtractor={ item => item.description}
          // refreshControl={
          //   <RefreshControl refreshing={loading} onRefresh={peticion} />
          // }
        /> */}

        {/* lista de tareas ejemplo  */}
        
        <Text style={styles.textoWO2 }>Tu Lista de Tarea</Text>
        <FlatList
          // style={{ flex: 1 }}
          data={tareas}
          renderItem={renderItem}
          keyExtractor={ item => item._id}
          // refreshControl={
          //   <RefreshControl refreshing={loading} onRefresh={peticion} />
          // }
        />
        <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => peticion()}
                  >Lista Tareas
                </Text>
        </TouchableOpacity>
        
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
            navigation.navigate('ListaTarea')
          }}
            >Atras
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
 }

 //Crear Tarea
 function NuevaTareaScreen({navigation}) {
  
  const [textoTarea, setText] = useState('')
  const peticion = async()=> {
   
    let token = await LocalStorage.getItem('token')
    let myHeaders = new Headers();

    console.log('TOKEN Get===',token )
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
      .then(result => console.log(result))
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
      <TextInput
            placeholder="             Agregar Tarea"
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            
            onChangeText={setText}
            value={textoTarea} 
            />
        <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => peticion()}
                  >Crear Tarea
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

 //Modificar Tarea
function ModificarTareaScreen({navigation}) {
  const [textoTarea, setText] = useState()
    
    const obtenerTarea = async ()=>{
       let DTarea = await LocalStorage.getItem('descripcionTarea')
       console.log('Modificar Tarea DTarea=',DTarea)
       setText(DTarea)
       
      }
      
    useEffect(() => {
      obtenerTarea()
      
    }, [])
      
      
      // console.log('Modificar Tarea descripcionTarea',descripcionTarea)
   
   const peticion = async()=> {
     
    let idTarea         = await LocalStorage.getItem('idTarea')
    let token            = await LocalStorage.getItem('token')
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "description": textoTarea
      // "completed": true
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    fetch("https://todolist-node-production.up.railway.app/task/"+idTarea, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
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
                  obtenerTarea()
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

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App() {
 return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="ListaTarea" component={ListaTareaScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NuevaTarea" component={NuevaTareaScreen} options={{headerShown: false}}/>
    <Stack.Screen name="ModificarTarea" component={ModificarTareaScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
</NavigationContainer>
 );
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 10,
    width:200,
    height:200,
    alignSelf:'center'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: '100%',
    marginVertical: 20,
    backgroundColor: '#ffffff'
  },
  conteiner:{
    flex:1,
    backgroundColor:'#F2F2F2'
  },
  textoWO:{
    fontWeight:'bold',
    color: 'black',
    fontSize: 22,
    marginTop:50,
    alignSelf: 'center',
  },
  textoWOblu:{
    fontWeight:'bold',
    color: '#5dc1b9',
    fontSize: 15,
    marginTop:30,
    alignSelf: 'center',
  },
  textoWO2:{
    fontWeight:'bold',
    color: 'black',
    fontSize: 22,
    // marginTop:50,
    alignSelf: 'center',
    marginTop: -10
  },
  textoLets:{
    alignSelf:'center',
    margin:10,
    marginBottom: 75,
    color:'#585858',
    fontSize:16
  },
  textoLets2:{
    alignSelf:'center',
    margin:10,
    marginBottom: 75,
    color:'#585858',
    fontSize:16,
    textAlign:'center',
    width:270
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
  buton:{
    marginTop:30,
    width:350,
    height:60,
    borderRadius:25,
    backgroundColor:'#5dc1b9',
    alignSelf: 'center',
  },
  butonTarea:{
    marginTop:30,
    width:400,
    height:40,
    borderRadius:25,
    backgroundColor:'#f0394d',
    alignSelf: 'center',
  },
});
export default App;