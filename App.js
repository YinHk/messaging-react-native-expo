import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/screens/login/landing';
import Login from './src/screens/login/login';
import Loading from './src/screens/loading';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Landing"
          screenOptions={{
            headerBackTitleVisible: false
          }}
        >
          <Stack.Screen name='Landing' options={{ headerShown: false }} component={Landing} />
          <Stack.Screen 
            name='Login' 
            options={{ 
              headerStyle: { backgroundColor: '#0d6183' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' }
            }}
            component={Login} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

export default withExpoSnack(App);