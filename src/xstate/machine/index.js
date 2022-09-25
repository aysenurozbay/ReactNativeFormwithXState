import {createMachine, assign} from 'xstate';

const submitUsername = assign((ctx, evt) => ({
  username: evt.text,
}));

const formMachine = createMachine(
  {
    context: {
      username: '',
    },
    id: 'form',
    initial: 'idle',
    states: {
      idle: {
        on: {
          NAME_INPUT: {
            actions: 'submitUsername',
          },
        },
      },
    },
  },
  {
    actions: {
      submitUsername,
    },
  },
);

export default formMachine;
