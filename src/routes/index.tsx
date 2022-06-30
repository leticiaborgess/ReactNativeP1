import { Login } from "../screens/Login";
import { Home } from "../screens/Home"
import { Senha } from "../screens/Senha";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Senha' component={Senha}/>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}
    