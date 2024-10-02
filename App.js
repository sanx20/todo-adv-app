import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/redux/store';
import Tasks from './src/screens/TasksScreen';
import { Provider } from 'react-redux';


export default function App() {

  return (
    <Provider store={store}>
      <Tasks />
    </Provider>

  );
}
