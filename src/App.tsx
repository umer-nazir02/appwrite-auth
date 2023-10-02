import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStack} from './navigation/MainStack';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
import {LogBox, StyleSheet} from 'react-native';
import {ThemeProvider} from './Theme/ThemeContext';
import {AppwriteProvider} from './appwrite/appwriteContext';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews',
]);

console.warn = () => {};
console.error = () => {};

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider>
        <SafeAreaProvider>
          {/* <AppwriteProvider> */}
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <MainStack />
            </QueryClientProvider>
          </NavigationContainer>
          {/* </AppwriteProvider> */}
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
