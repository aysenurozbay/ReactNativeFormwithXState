import {View, Text, TouchableHighlight, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useMachine} from '@xstate/react';
import countMachine from './src/xstate/machine';
import FormScreen from './src/pages/FormScreen/FormScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [text, setText] = useState('');
  const [state, send] = useMachine(countMachine); //connecting machine
  const {username} = state.context; // reaching machine's context variables

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={FormScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    fontSize: 30,
    borderColor: '#8ecae6',
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#8ecae6',
    marginVertical: 50,
    width: 200,
    textAlign: 'center',
  },

  number: {
    color: '#ffb703',
    fontSize: 30,
  },
});
