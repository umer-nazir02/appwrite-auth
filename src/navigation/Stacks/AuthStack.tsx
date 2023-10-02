import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Auth/Home';

const Auth = createNativeStackNavigator();

const headerShown = {
  headerShown: false,
};

export default function UnauthStack() {
  return (
    <Auth.Navigator initialRouteName={'loginScreen'}>
      <Auth.Screen name="Home" component={Home} options={headerShown} />
    </Auth.Navigator>
  );
}
