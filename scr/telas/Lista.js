import {View, Text, FlatList, Button,StyleSheet} from 'react-native';
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
    <View style={styles.container}>

      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style = {styles.nome}> Nome: {item.nome} </Text>

            <Text style = {styles.texto}> Seleção: {item.selecao} </Text>

            <Text style = {styles.texto}> Posição: {item.posicao} </Text>

            <Text style = {styles.texto}> Camisa: {item.camisa} </Text>

            <Button
              title="Remover"
              onPress={() => removerJogador(item.id)}/>

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

  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },

  texto: {
    fontSize: 15,
    marginBottom: 3
  }

});