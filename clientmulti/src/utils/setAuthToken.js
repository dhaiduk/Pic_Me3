import api from './api';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// store our JWT in LS and set axios headers if we do have a token

const setAuthToken = async (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    await  AsyncStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    await  AsyncStorage.removeItem('token');
  }
};

export default setAuthToken;
