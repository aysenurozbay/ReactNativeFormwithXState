import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const RepoCard = ({user}) => {
  console.log(user.created);
  return (
    <View style={styles.container}>
      <View style={styles.privateContainer}>
        {user.private ? (
          <Text style={styles.private}>Private</Text>
        ) : (
          <Text style={styles.public}>Public</Text>
        )}
      </View>
      <View>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.language}>{user.language}</Text>
        <Text style={styles.created}>{user.created_at}</Text>
      </View>
    </View>
  );
};

export default RepoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray.transparentGray,
    marginVertical: 10,
    borderRadius: 20,
    width: '90%',
    height: 90,
    padding: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '500',
  },
  language: {
    color: colors.blue,
    fontSize: 13,
  },
  created: {
    justifyContent: 'flex-end',
  },
  privateContainer: {
    marginRight: 20,
  },
  public: {
    color: colors.green,
  },
  private: {
    color: colors.red,
  },
});
