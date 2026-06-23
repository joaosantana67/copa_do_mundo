import {View, Text, FlatList, Button} from 'react-native';
import {useContext,useEffect} from 'react';
import { CopaContext } from '../Context/Copa';

export default function Lista() {

  const {jogadores,removerJogador} = useContext(CopaContext);

  useEffect(() => {
    console.log(
      'Jogadores cadastrados:',
      jogadores.length
    );
  }, [jogadores]);

  return (
    <View style={{ padding: 10 }}>

      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10
            }}
          >

            <Text> Nome: {item.nome} </Text>

            <Text> Seleção: {item.selecao} </Text>

            <Text> Posição: {item.posicao} </Text>

            <Text> Camisa: {item.camisa} </Text>

            <Button
              title="Remover"
              onPress={() => removerJogador(item.id)}/>

          </View>

        )}
      />

    </View>
  );
}