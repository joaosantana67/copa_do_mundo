import {View, Text, TextInput, Button, FlatList,Alert, StyleSheet} from 'react-native';
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
    <View style={styles.container}>

      <Text style = {styles.textocampo}>Jogador</Text>

      <TextInput
        value={jogador}
        onChangeText={setJogador}
        style={styles.input}
      />

      <Text style = {styles.textocampo}>Nota (1 a 5)</Text>

      <TextInput
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style = {styles.textocampo}>Comentário</Text>

      <TextInput
        value={comentario}
        onChangeText={setComentario}
        style={styles.input}
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
            style={styles.card}>

            <Text style = {styles.jogador}> Jogador: {item.jogador} </Text>

            <Text style = {styles.estrelas}> {'⭐'.repeat(Number(item.nota))} </Text> 

            <Text> {item.comentario} </Text>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  textocampo: {
    fontWeight: 'bold',
    marginBottom: 5
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  },

  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginTop: 10
  },

  jogador: {
    fontSize: 17,
    fontWeight: 'bold'
  },

  estrelas: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18
  }

});