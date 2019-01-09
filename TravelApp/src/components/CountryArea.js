import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, H2 } from 'native-base';

const CountryArea = ({ item, style, onPress }) => {
    const { name, cities } = item;
    const { cityArea, cityBox, header } = styles;
    return (
        <View style={style}>
            <View style={header}>
                <H2 style={{ fontWeight: '500' }}>{name}</H2>
                <TouchableOpacity>
                    <Text style={{ color: '#0084ff', fontSize: 15 }}>More</Text>
                </TouchableOpacity>
                {/* <Button transparent info>
                    <Text>Explore All</Text>
                </Button> */}
            </View>
            <View style={cityArea}>
                {
                    cities.map((city, index) => (
                        <TouchableOpacity key={index} style={cityBox} onPress={onPress}>
                            <Text style={{ color: 'black' }}>{city}</Text>
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
