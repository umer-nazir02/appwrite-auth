import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Button, Input} from '@rneui/themed';
import {Switch} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../Theme/ThemeContext';
import {useAppwrite} from '../../appwrite/appwriteContext';
// import {Account} from 'appwrite';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  const navigation = useNavigation();
  const {colors, toggleTheme} = useTheme();
  const {account} = useAppwrite();

  const loginUser = () => {
    account
      .createEmailSession(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Switch
        value={toggle}
        onChange={() => {
          setToggle(!toggle);
          toggleTheme();
        }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
        errorStyle={styles.errorColor}
        errorMessage="ENTER A VALID EMAIL HERE"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={val => setPassword(val)}
        errorStyle={styles.errorColor}
        errorMessage="ENTER A VALID PASSWORD"
      />
      <Button
        title="Login"
        titleStyle={{color: colors.text}}
        onPress={loginUser}
      />
      <Button
        title="Go To Signup"
        titleStyle={{color: colors.text}}
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    gap: 25,
  },
  errorColor: {color: 'red'},
});

export default Login;

// navigation.reset({
//   index: 0,
//   routes: [{name: 'Auth'}],
// });
