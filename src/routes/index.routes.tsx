import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import { AuthRoutes } from "./auth.routes";

const { Navigator, Screen } = createStackNavigator();

export function Routes () {
  return (
    <Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Screen name="Login" component={SignIn} />
      <Screen name="auth routes" component={AuthRoutes} />
    </Navigator>
  );
}