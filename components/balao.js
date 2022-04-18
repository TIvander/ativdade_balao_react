import  React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Botao from './botao'
import Mensagem from './mensagem'
export default function Balao(atual) {
  const padrao = require('./imagens_baloes/balloon_red.jpg')
  const estourado = require('./imagens_baloes/popped_balloon_red.jpg')
  const baloes = { padrao, estourado }
  const [selected, setSelected] = useState(baloes.padrao)
  const msg = {selected}==baloes.padrao ? 0 : 1
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={selected} />
      {msg == 0 ? <h1>ok</h1> : ''}
      <button onClick={() => setSelected(baloes.estourado) 
      }> ESTOURAR BALAO</button>
    </View>
  );
}
//<button onClick={() => setSelected(baloes.estourado)}> Estourar</button>
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 300,
    width: 128,
  }
});
