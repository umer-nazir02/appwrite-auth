import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Unauth/Login';
import Signup from '../../screens/Unauth/Signup';

const Auth = createNativeStackNavigator();

const headerShown = {
  headerShown: false,
};

export default function UnauthStack() {
  return (
    <Auth.Navigator initialRouteName={'loginScreen'}>
      <Auth.Screen name="Login" component={Login} options={headerShown} />
      <Auth.Screen name="Signup" component={Signup} options={headerShown} />
    </Auth.Navigator>
  );
}
