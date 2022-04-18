import  React, { useState, useEffect }  from 'react';
import { Text, View, StyleSheet,Button, Image } from 'react-native';

export default function Botao(props) {
  const estado = false
  const [getBalao, setBalao] = useState(true)
  const [teste, teste1 ] = ['ola','aqui']
   return(
      <>
        <button onClick={() => { setBalao(false)}} > {props.texto} </button>
        
      </>
   )
}

