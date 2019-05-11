import React from 'react';
import { FlatList, View } from 'react-native';
import { Title, Card, Wrapper, Name,
Content } from './All.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

class All extends React.Component {
    state = {

    }
    
    componentDidMount() {
        this.getDogs();
    }
    
    getDogs = async () => {
        const res = await axios.get('https://localhost:3000/dogs');
        console.log(res.data);
    }

    render () {
        return null;
        // return (
        //     <>
        //         <Title>Все</Title>
        //         <Wrapper>
        //             <FlatList
        //                 numColumns={3}
        //                 data={this.state.data}
        //                 snapToAlignment="center"
        //                 ItemSeparatorComponent={() => <View style={{margin: 8}} />}
        //                 ListFooterComponent={() => <View style={{paddingTop: 10}} />}
        //                 keyExtractor={dog => dog.name}
        //                 renderItem={({ item }) => (
        //                     <Card source={{uri: item.photo}}>
        //                         <Content>
        //                             <Name>{item.name}</Name>
        //                             <MaterialIcons name="gender-male" style={{fontSize: 16}} />
        //                         </Content>
        //                     </Card>
        //                 )}
        //             />
        //         </Wrapper>
        //     </>
        // );
    }
};

export default All;