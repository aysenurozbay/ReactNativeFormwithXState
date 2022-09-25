import React from 'react';
import FormView from './FormView';

const FormScreen = ({navigation}) => {
  const redirectPage = () => {
    navigation.navigate('Home');
  };

  return <FormView redirectPage={redirectPage} />;
};

export default FormScreen;
