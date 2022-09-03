import { createNativeStackNavigator } from "@react-navigation/native-stack/"
import { Register } from "@screens/Register";
import { SingIn } from "@screens/SingIn";
const { Screen, Navigator } = createNativeStackNavigator();

export function UserRoutes() {
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Screen name="signIn" component={SingIn}/>
      <Screen name="register" component={Register}/>
    </Navigator>
  )
}