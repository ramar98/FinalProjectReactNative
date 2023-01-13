import { View, Text, Button, Image, StyleSheet, TextInput, StatusBar,TouchableOpacity, FlatList,RefreshControl, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer }        from '@react-navigation/native';
import { createBottomTabNavigator }   from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Componentes
import LoginScreen                    from './src/components/Auth/LoginScreen';
import GetStarted                     from './src/components/Home/GetStarted';
import RegisterScreen                 from './src/components/Auth/RegisterScreen';
import ListaTareaScreen               from './src/components/Tareas/ListaTareaScreen';
import NuevaTareaScreen               from './src/components/Tareas/NuevaTareaScreen';
import ModificarTareaScreen           from './src/components/Tareas/ModificarTareaScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App() {
 return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="GetStarted"      component={GetStarted}           options={{headerShown: false}} />
      <Stack.Screen name="Login"           component={LoginScreen}          options={{headerShown: false}}/>
      <Stack.Screen name="Register"        component={RegisterScreen}       options={{headerShown: false}}/>
      <Stack.Screen name="ListaTarea"      component={ListaTareaScreen}     options={{headerShown: false}}/>
      <Stack.Screen name="NuevaTarea"      component={NuevaTareaScreen}     options={{headerShown: false}}/>
      <Stack.Screen name="ModificarTarea"  component={ModificarTareaScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
</NavigationContainer>
 );
}

export default App;