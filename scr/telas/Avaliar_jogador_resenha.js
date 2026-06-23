import {View, Text, TextInput, Button, FlatList,Alert} from 'react-native';
import {useState,useContext} from 'react';
import { CopaContext } from '../Context/Copa';

export default function Avaliacoes() {

  const {avaliacoes, adicionarAvaliacao} = useContext(CopaContext);

  const [jogador, setJogador] = useState('');
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');

  function avaliar() {
    
    if (!jogador || !nota || !comentario
    ) {
        Alert.alert('Ai não', 'Preenche todos os dados ai né');
      return;
    }

    adicionarAvaliacao({id: Date.now().toString(),jogador,nota,comentario});

    setJogador('');
    setNota('');
    setComentario('');
  }

  return (
    <View style={{ padding: 15 }}>

      <Text>Jogador</Text>

      <TextInput
        value={jogador}
        onChangeText={setJogador}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Text>Nota (1 a 5)</Text>

      <TextInput
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Text>Comentário</Text>

      <TextInput
        value={comentario}
        onChangeText={setComentario}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Button
        title="Avaliar"
        onPress={avaliar}
      />

      <FlatList
        data={avaliacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View
            style={{
              borderWidth: 1,
              padding: 10,
              marginTop: 10
            }}
          >

            <Text> Jogador: {item.jogador} </Text>

            <Text> {'⭐'.repeat(Number(item.nota))} </Text> 

            <Text> {item.comentario} </Text>

          </View>

        )}
      />

    </View>
  );
}