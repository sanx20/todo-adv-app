import React from 'react';
import { View } from 'react-native';
import Form from './src/components/Form';
import { store } from './src/redux/store';
import Tasks from './src/screens/TasksScreen';
import { Provider } from 'react-redux';
import styles from './styles/styles'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <Tasks />
        </View>
        <View style={styles.formContainer}>
          <Form />
        </View>
      </View>
    </Provider>
  );
}