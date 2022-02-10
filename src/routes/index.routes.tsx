import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import { AuthRoutes } from "./auth.routes";

const { Navigator, Screen } = createStackNavigator();

export function Routes () {
  return (
    <Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false
    }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="auth routes" component={AuthRoutes} />
    </Navigator>
  );
}