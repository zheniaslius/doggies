import React from 'react';
import { Text, View, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import axios from 'axios';

import { Heading2 } from '../shared/components';
import { checkIfLogged } from '../../helpers/helpers';

const APP_ID = '318273805534284';

class Profile extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    const loggedIn = checkIfLogged();
    this.setState({ loggedIn });
  }

  setLogged = async () => {
    try {
      await AsyncStorage.setItem('loggedIn', 'true');
      this.setState({ loggedIn: true })
    } catch (error) {
      console.log(error);
    }
  }

  fbLogin = async () => {
    try {
      const {
        type,
        token
      } = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
        permissions: ['public_profile', 'email']
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await axios(`https://graph.facebook.com/me?access_token=${token}`);
        console.log(response.name);
        this.setLogged();
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <>
        {true 
        ? <Text>Logged</Text>
        : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Heading2 style={{marginBottom: 10}}>Вход</Heading2>
            <TouchableOpacity 
              onPress={this.fbLogin}
              style={{height: 40, paddingHorizontal: 20, backgroundColor: '#3C5A99', borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Войти с Facebook</Text>
            </TouchableOpacity>
          </View>
        }
      </>
    );
  }
}
  
export default Profile;