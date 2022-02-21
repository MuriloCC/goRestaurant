import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './src/routes/auth.routes';
import 'react-native-gesture-handler'
import { Routes } from './src/routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
