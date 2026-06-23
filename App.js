import { NavigationContainer } from '@react-navigation/native';
import NavegacaoAbas from './src/navegacao/Tab';
import { CopaProvider } from './Context/Copa';

export default function App() {
  return (
    <CopaProvider>
      <NavigationContainer>
        <NavegacaoAbas />
      </NavigationContainer>
    </CopaProvider>
  );
}