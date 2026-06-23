import { NavigationContainer } from '@react-navigation/native';
import NavegacaoAbas from './scr/navegacao/Tab';
import { CopaProvider } from './scr/Context/Copa';

export default function App() {
  return (
    <CopaProvider>
      <NavigationContainer>
        <NavegacaoAbas />
      </NavigationContainer>
    </CopaProvider>
  );
}