import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, StatusBar,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({navigation}) {
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
            />
        
        <TextInput
            placeholder="              Confirm password"
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
    </View>
    <Text style={styles.textoWOblu } >Forget Password</Text>
    

   <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => navigation.navigate('Home')}
                  >Login
                </Text>
    </TouchableOpacity>
   <Text style={{alignSelf:'center',margin:10}}>Don't have an account? <Text onPress={() => navigation.navigate('Details')} style={{color:'#5dc1b9'}}>Sign Up</Text></Text>
 </View>
 </SafeAreaView>

 );
}
function DetailsScreen({navigation}) {
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
            />
        <TextInput
            placeholder="             Enter password"
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
        <TextInput
            placeholder="             Enter password"
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />
        <TextInput
            placeholder="             Confirm password"
            placeholderTextColor={'#585858'}
            style={{margin:10, width:350, height: 50, backgroundColor:'white', borderRadius:30, alignSelf: 'center',}}
            />


     <TouchableOpacity style={styles.buton}>
                <Text 
                style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                onPress={() => navigation.navigate('Home')}
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
// Get Started

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
});
export default App;