import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { withExpoSnack } from 'nativewind';
import Landing from './src/screens/login/landing';
import Loading from './src/screens/loading';

function App() {
  return (
    <View style={styles.container}>
      {/* <Landing />  */}
      <Loading />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withExpoSnack(App);