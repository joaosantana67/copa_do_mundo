import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from '../telas/Cadastro';
import Lista    from '../telas/Lista';
import Avaliar_jogador_resenha from '../telas/Avaliar_jogador_resenha';

const Tab= createBottomTabNavigator();

export default function NavegacaoAbas() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Cadastrar" component={Cadastro} />

      <Tab.Screen  name="Lista" component={Lista}/>

      <Tab.Screen  name="Avaliar Jogador" component={Avaliar_jogador_resenha}/>
    </Tab.Navigator>
  );
}