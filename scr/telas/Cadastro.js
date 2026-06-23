import { useState, useContext } from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import { CopaContext } from '../Context/Copa';

export default function Cadastro() {

  const { adicionarJogador } = useContext(CopaContext);

  const [nome, setNome] = useState('');
  const [selecao, setSelecao] = useState('');
  const [posicao, setPosicao] = useState('');
  const [camisa, setCamisa] = useState('');

  function cadastrar() {

    if (!nome || !selecao || !posicao || !camisa) {
      Alert.alert('Ai não','não deixa nada em branco');
      return;
    }

    adicionarJogador({id: Date.now().toString(), nome, selecao, posicao, camisa});

    setNome('');
    setSelecao('');
    setPosicao('');
    setCamisa('');

    Alert.alert(
      'Ai sim',
      'Jogador cadastrado, avalie ele ou veja as avaliações dele'
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Resenha da Copa
      </Text>

      <Text style={styles.label}>
        Nome do Jogador
      </Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
        style={styles.input}
      />

      <Text style={styles.label}>
        Seleção
      </Text>

      <TextInput
        value={selecao}
        onChangeText={setSelecao}
        placeholder="Digite a seleção"
        style={styles.input}
      />

      <Text style={styles.label}>
        Posição
      </Text>

      <TextInput
        value={posicao}
        onChangeText={setPosicao}
        placeholder="Digite a posição"
        style={styles.input}
      />

      <Text style={styles.label}>
        Número da Camisa
      </Text>

      <TextInput
        value={camisa}
        onChangeText={setCamisa}
        keyboardType="numeric"
        placeholder="Digite o número"
        style={styles.input}
      />

      <Button
        title="Cadastrar Jogador"
        onPress={cadastrar}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#006400'
  },

  label: {
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
  }

});