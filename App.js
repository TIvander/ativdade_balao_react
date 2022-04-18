import  React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Botao from './components/botao'
// You can import from local files
import Balao from './components/balao'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const normal = require('./components/imagens_baloes/balloon_red.jpg')
const estourado = require('./components/imagens_baloes/popped_balloon_red.jpg')
  const baloes = { normal, estourado }
  const [selected, setSelected] = useState(baloes.normal)
  return (
    <View style={styles.container}>
      <Card>
        <Balao/>
         <button onClick={() => setSelected(baloes.normal)}> RESTAURAR</button>
      </Card>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
