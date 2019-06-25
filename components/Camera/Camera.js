import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Camera, Permissions } from 'expo';
import { withNavigationFocus, createStackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SimilarDogs from './SimilarDogs';
import Details from '../Details';

import {
  SnapButton
} from './Camera.styles';

class CameraComponent extends React.Component {
  state = {
    hasCameraPermission: null,
    loading: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    this.setState({loading: true});
    if (this.cam) {
      const photo = await this.cam.takePictureAsync();
      
      const { navigate } = this.props.navigation;
      navigate('SimilarDogs', {photo});
      this.setState({loading: false});
    }
  }

  render() {
    const { hasCameraPermission, loading } = this.state;
    const { isFocused } = this.props;

    if (!isFocused) return null;

    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Camera 
          style={{ flex: 1 }}
          ref={cam => this.cam = cam}
          ratio="16:9"
        >
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
            <SnapButton onPress={this.snap}>
              {loading
              ? <ActivityIndicator size="large" color="white" />
              : <MaterialIcons name="dog" style={{fontSize: 30, color: 'white'}}/>
              }
            </SnapButton>
          </View>
        </Camera>
      );
    }
  }
}

const Navigator = createStackNavigator({
  Camera: {
    screen: withNavigationFocus(CameraComponent)
  },
  SimilarDogs: {
    screen: SimilarDogs
  },
  Details: {
    screen: Details
  }
}, {
  initialRouteName: 'Camera',
  headerMode: 'none'
})

export default Navigator;