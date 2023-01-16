import { StyleSheet } from "react-native";

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
      flexGrow: 1,
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
      marginTop: -110,
      
    },
    buton:{
      marginTop:30,
      width:350,
      height:60,
      borderRadius:25,
      // backgroundColor:'#5dc1b9',
      backgroundColor:'#0053ff',
      alignSelf: 'center',
    },

    butonguardar:{
      marginTop:30,
      width:350,
      height:60,
      borderRadius:25,
      backgroundColor:'#81db74',
      alignSelf: 'center',
    },

    butonTarea:{
      marginTop:30,
      width:350,
      height:40,
      borderRadius:25,
      backgroundColor:'#ff6961',
      alignSelf: 'center',
    },
    butonTareaCompletada:{
      marginTop:30,
      width:350,
      height:40,
      borderRadius:25,
      backgroundColor:'#77DD77',
      alignSelf: 'center',
    },
    butonTareaEliminar:{
      marginTop:30,
      width:100,
      height:40,
      borderRadius:25,
      // backgroundColor:'#f0394d',
      alignSelf: 'center',
    },
    text:{
      color:"#0097e6",
      textDecorationLine: 'line-through',
      fontSize:20
      
    },
    otro:{
      color:"#fbc531",
      fontSize:20
    }
  });

  export default styles;