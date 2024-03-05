import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/form'

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
