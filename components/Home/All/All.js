import React from 'react';
import { FlatList, View } from 'react-native';
import { Title, Card, Wrapper, Name,
Content } from './All.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const All = ({ entries }) => {
    return (
        <>
            <Title>Все</Title>
            <Wrapper>
                <FlatList
                    numColumns={3}
                    data={entries}
                    snapToAlignment="center"
                    ItemSeparatorComponent={() => <View style={{margin: 8}} />}
                    keyExtractor={dog => dog.name}
                    renderItem={({ item }) => (
                        <Card source={{uri: item.photo}}>
                            <Content>
                                <Name>{item.name}</Name>
                                <MaterialIcons name="gender-male" style={{fontSize: 16}} />
                            </Content>
                        </Card>
                    )}
                />
            </Wrapper>
        </>
    );
};

export default All;