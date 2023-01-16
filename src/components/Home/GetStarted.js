import { View, Text, Button, Image,StatusBar,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/styles';


function GetStarted({navigation}) {
    return (
      
      <SafeAreaView style={styles.conteiner}>
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
        <View >
  
        <Image
              source={require('../../assets/elipse.png')}
              style={styles.circleImage}
          />
        <Image
              source={require('../../assets/onboarding.png')}
              style={styles.image}
          />
        
          <Text style={styles.textoWO }>Bienvenido a ToDoList</Text>
    
          

          <Text style={styles.textoLets2 }
          >Añade tus tareas, Organiza tu vida.
          Concéntrate, organízate y trae calma a tu vida con ToDoList. La aplicación de listas de pendientes y gestión de tareas n.º 1 del mundo
          </Text>
          
          <TouchableOpacity style={styles.buton}>
                  <Text 
                  style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                  onPress={() => navigation.navigate('Login')}
                    >Vamos!
                  </Text>
          </TouchableOpacity>
    
        </View>
      </SafeAreaView>
    );
  }

  export default GetStarted;