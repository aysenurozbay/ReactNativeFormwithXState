import {View, Text} from 'react-native';
import {useMachine} from '@xstate/react';
import formMachine from '../../xstate/machine';

const HomeView = () => {
  const [state, send] = useMachine(formMachine);
  const {username} = state.context;

  //   console.log(state.context);

  return (
    <View>
      <Text>{username}</Text>
    </View>
  );
};

export default HomeView;
