import {createMachine, assign} from 'xstate';
import axios from 'axios';

const GITHUB_URL = 'https://api.github.com/users';

async function getUserInfo(context) {
  console.log(context.userId);
  console.log(context.username);
  const {data: response} = await axios.get(
    `https://api.github.com/users/${context.username}/repos`,
  );

  return response;
}

// Returns a Promise
function getUserFriends(context) {
  const {friends} = context.user;

  return Promise.all(
    friends.map(friendId => fetch(`/api/users/${friendId}/`).then(response => response.json())),
  );
}

const fetchGithubRepos = async username => {
  const {data: response} = await axios.get(`https://api.github.com/users/${username}/repos`);

  return response;
};

const formMachine = createMachine({
  id: 'fetchmachine',
  context: {userId: 1, user: undefined, friends: undefined, username: ''},
  initial: 'idle',
  states: {
    idle: {
      on: {
        NAME_INPUT: {
          actions: assign((ctx, evt) => ({
            username: evt.text,
          })),
          target: 'gettingUser',
        },
      },
    },
    gettingUser: {
      invoke: {
        src: getUserInfo,
        onDone: {
          actions: assign({
            user: (context, event) => event.data,
          }),
        },
      },
    },

    success: {
      type: 'final',
    },
  },
});
export default formMachine;
