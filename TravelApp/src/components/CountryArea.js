import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MyText from './MyText';

const CountryArea = ({ item, style, onPress }) => {
    const { name, cities } = item;
    const { cityArea, cityBox, header } = styles;
    return (
        <View style={style}>
            <View style={header}>
                <MyText type="black" style={{ fontSize: 25 }}>{name}</MyText>
                <TouchableOpacity>
                    <MyText style={{ color: '#0084ff', fontSize: 15 }}>More</MyText>
                </TouchableOpacity>
                {/* <Button transparent info>
                    <Text>Explore All</Text>
                </Button> */}
            </View>
            <View style={cityArea}>
                {
                    cities.map((city, index) => (
                        <TouchableOpacity key={index} style={cityBox} onPress={onPress}>
                            <MyText style={{ color: 'black' }}>{city}</MyText>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
};

export default CountryArea;

const styles = StyleSheet.create({
    cityBox: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        // marginRight: 20
        marginRight: 15,
        marginBottom: 10
    },
    cityArea: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center'
    }
});
