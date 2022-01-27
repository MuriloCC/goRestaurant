import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './src/routes/auth.routes';
import SignIn from './src/screens/SignIn';

export default function App() {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
}
