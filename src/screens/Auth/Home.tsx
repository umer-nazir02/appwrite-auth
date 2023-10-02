import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Logout"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Unauth'}],
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Home;
