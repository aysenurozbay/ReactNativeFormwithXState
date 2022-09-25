import {
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useMachine} from '@xstate/react';
import formMachine from '../../xstate/machine';

import {images} from '../../utils/images';
import colors from '../../utils/colors';

const FormView = ({redirectPage}) => {
  const [text, setText] = useState('');
  const [state, send] = useMachine(formMachine);

  const {username} = state.context;

  console.log(username);
  const handleUsername = () => {
    send('NAME_INPUT', {text});
    // redirectPage();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}> WELCOME </Text>
      </View>
      <Image source={images.helloImage} style={styles.helloImage} />
      <TextInput
        style={styles.input}
        onChangeText={input => setText(input)}
        placeholder="Enter your name"
      />
      <TouchableOpacity style={styles.button} onPress={() => handleUsername()}>
        <Text style={styles.buttonText}>LETS GO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FormView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  helloImage: {
    height: 230,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  input: {
    borderColor: colors.black,
    borderWidth: 2,
    width: '80%',
    paddingHorizontal: 15,

    height: 45,
    borderRadius: 20,
  },
  button: {
    marginTop: 15,
    marginBottom: 30,
    width: '80%',
    backgroundColor: colors.orange,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },
  welcomeContainer: {
    marginVertical: 100,
    justifyContent: 'center',
  },
  welcomeText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 50,
  },
});
