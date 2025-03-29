import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (username, password) => {
  try {
    const user = { username, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error storing user data', error);
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error retrieving user data', error);
  }
};
