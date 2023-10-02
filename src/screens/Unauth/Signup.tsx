import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Button, Input} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../Theme/ThemeContext';

const Signup: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  const {colors, toggleTheme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={val => setName(val)}
        errorStyle={styles.errorColor}
        errorMessage="ENTER A VALID NAME HERE"
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
        title="Go To Login"
        onPress={() => {
          navigation.goBack();
          //navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  errorColor: {color: 'red'},
});

export default Signup;
