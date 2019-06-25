import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { Title, Card, CardWrapper, Wrapper, Name,
Content, EmptyCell } from './All.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { withNavigation } from 'react-navigation';

class All extends React.Component {
    state = {
        data: []
    }
    
    componentDidMount() {
        this.getDogs();
    }
    
    getDogs = async () => {
        const res = await axios.get('http://192.168.31.123:3000/dogs')
        this.setState({data: res.data});
    }

    formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ empty: true });
          numberOfElementsLastRow++;
        }
      
        return data;
    };

    render () {
        const { navigation } = this.props;
        return (
            <>
                <Title>Все</Title>
                <Wrapper>
                    <FlatList
                        numColumns={3}
                        data={this.formatData(this.state.data, 3)}
                        snapToAlignment="center"
                        ItemSeparatorComponent={() => <View style={{margin: 8}} />}
                        ListFooterComponent={() => <View style={{paddingTop: 10}} />}
                        keyExtractor={dog => dog.name}
                        renderItem={({ item }) => (
                            item.empty 
                            ? <EmptyCell />
                            : <CardWrapper onPress={() => navigation.navigate('Details', {dog: item})} activeOpacity={1}>
                                <Card source={{uri: item.photo}}>
                                    <Content>
                                        <Name>{item.name}</Name>
                                        <MaterialIcons name={`gender-${item.gender}`} style={{fontSize: 16}} />
                                    </Content>
                                </Card>
                            </CardWrapper>
                        )}
                    />
                </Wrapper>
            </>
        );
    }
};

export default withNavigation(All);