import { useState, useContext } from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import { CopaContext } from '../Context/Copa';

export default function CadastroScreen() {

  const { adicionarJogador } =
    useContext(CopaContext);

  const [nome, setNome] = useState('');
  const [selecao, setSelecao] = useState('');
  const [posicao, setPosicao] = useState('');
  const [camisa, setCamisa] = useState('');

  function cadastrar() {

    if (!nome || !selecao || !posicao || !camisa
    ) {
        Alert.alert('Erro','Preencha todos os campos');
      return;
    }

    adicionarJogador({id: Date.now().toString(), nome, selecao,posicao,camisa});

    setNome('');
    setSelecao('');
    setPosicao('');
    setCamisa('');

    Alert.alert(
      'Ai sim!',
      'Jogador cadastrado, comente ou veja comentarios sobre ele nas avaliações'
    );
  }

  return (
    <View style={{ padding: 20 }}>

      <Text>Nome</Text>

      <TextInput
      value={nome}
        onChangeText={setNome}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Text>Seleção</Text>

      <TextInput
        value={selecao}
        onChangeText={setSelecao}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Text>Posição</Text>

      <TextInput
        value={posicao}
        onChangeText={setPosicao}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Text>Número da Camisa</Text>

      <TextInput
        value={camisa}
        onChangeText={setCamisa}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />

    </View>
  );
}