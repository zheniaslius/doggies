import { AsyncStorage } from 'react-native';


export const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);

export const checkIfLogged = async () => {
  try {
    const value = await AsyncStorage.getItem('loggedIn');
    return value ? true : false;
  } catch (error) {
    console.log(error);
  }
}