import {
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useMachine} from '@xstate/react';
import formMachine from '../../xstate/machine';

import {images} from '../../utils/images';
import colors from '../../utils/colors';
import RepoCard from '../../component/RepoCard';

const FormView = () => {
  const [text, setText] = useState('');
  const [state, send] = useMachine(formMachine);

  const {username, user} = state.context;

  const handleUsername = () => {
    send('NAME_INPUT', {text});
  };

  console.log(user);

  const renderRepo = user => {
    return <RepoCard key={user.id} user={user} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        {/* <Image source={images.helloImage} style={styles.helloImage} /> */}
        <Text style={styles.welcomeText}> Github Repositories </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={input => setText(input)}
          placeholder="Enter username and hit the button"
        />
        <TouchableOpacity style={styles.button} onPress={() => handleUsername()}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer} />

      {/* <FlatList data={user} renderItem={renderRepo} keyExtractor={item => item.id} /> */}

      {user?.map(user => (
        <RepoCard key={user.id} user={user} />
      ))}
    </SafeAreaView>
  );
};

export default FormView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  helloImage: {
    height: 70,
    resizeMode: 'contain',
    width: 50,
  },
  welcomeText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    borderColor: colors.black,
    borderWidth: 2,
    width: '70%',
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 20,
  },
  button: {
    backgroundColor: colors.orange,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  welcomeContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleContainer: {
    width: '90%',
    marginTop: 20,
    borderEndColor: colors.gray.borderGray,
    borderBottomWidth: 2,
  },
});
