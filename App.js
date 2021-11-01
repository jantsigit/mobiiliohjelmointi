import { StatusBar } from 'expo-status-bar';
import React from 'react';
import{ StyleSheet, Text, View, Button, Alert, TextInput, Image} from'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ensimmäinen kokeilu on tässä!</Text>
      <Text>Hello world!</Text>
      <Button onPress={buttonPressed}title="Paina tästä" />
      <Image style={{  width:250, height:100 }}source={require('./img/logo.png')}  />
      <Image style={{  width:250, height:100 }}source={{  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Haaga-Helia_Pasila.jpg/1280px-Haaga-Helia_Pasila.jpg'}} />
      <StatusBar style="auto" />
    </View>
  );
}
const buttonPressed= () =>{Alert.alert('Painettu on');}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
