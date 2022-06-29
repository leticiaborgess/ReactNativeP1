import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Clonetwt } from '../screens/clonetwt';
import { Senha } from '../screens/senha';
import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();

export type ListaParametrosRotasTab = {
  Clonetwt: undefined;
  Senha: undefined;
  Home: undefined;
}

export const Routes = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Clonetwt} />
                <Tab.Screen name="Senha" component={Senha} />
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};