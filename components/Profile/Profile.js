import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Facebook } from 'expo';

const APP_ID = '318273805534284';

class Profile extends React.Component {
  fbLogin = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync(APP_ID);
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity 
          onPress={this.fbLogin}
          style={{height: 40, paddingHorizontal: 20, backgroundColor: '#3C5A99', borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Log in with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  
export default Profile;