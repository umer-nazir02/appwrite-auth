import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UnauthStack from './Stacks/UnauthStack';
import AuthStack from './Stacks/AuthStack';

const MainNavigation = createNativeStackNavigator();
const headerShown = {
  headerShown: false,
};

export function MainStack() {
  return (
    <MainNavigation.Navigator initialRouteName={'MainStack'}>
      <MainNavigation.Screen
        name="Unauth"
        component={UnauthStack}
        options={headerShown}
      />
      <MainNavigation.Screen
        name="Auth"
        component={AuthStack}
        options={headerShown}
      />
    </MainNavigation.Navigator>
  );
}
