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
        
          <Text style={styles.textoWO }>Gets things done with TODo</Text>
    
          <Text style={styles.textoLets2 }>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Magna in
          Volutpat, tristique lacina ut.
          Elementum non turpis nullam ipsum</Text>
        
          <TouchableOpacity style={styles.buton}>
                  <Text 
                  style={{textAlign:'center', margin:15, color:'white', fontSize:20}} 
                  onPress={() => navigation.navigate('Login')}
                    >Get Started
                  </Text>
          </TouchableOpacity>
    
        </View>
      </SafeAreaView>
    );
  }

  export default GetStarted;