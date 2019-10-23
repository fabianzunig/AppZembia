import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,Button} from 'react-native';
const screenHeight=Dimensions.get('window').height
const screenWidth=Dimensions.get('window').width

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('/home/caritogap/AppZembia/logo.png')} style={{width:screenWidth,resizeMode:'contain',position:'absolute',top:screenHeight/5}}/>
      <View style={{width: screenWidth/2, height:20, alignSelf:'center',position:'absolute',bottom:screenHeight*2.5/6}}>
       <Button title="Rendir Gastos" color="black" ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c03c22',

  },
  button: {

    color:'#000',

  },
});
