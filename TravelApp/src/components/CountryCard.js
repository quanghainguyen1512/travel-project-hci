import React, { Component } from 'react';
import {
    StyleSheet, ImageBackground, Text, View
} from 'react-native';
import { Card } from 'native-base';
import { DEVICE_WIDTH } from '../constants/Layout';
import { A4_RATIO } from '../constants/Ratios';

const cardWidth = DEVICE_WIDTH * 0.4;
const cardHeight = cardWidth * A4_RATIO.width;

export default class CountryCard extends Component {
    render() {
        const { item, style } = this.props;
        const { distance, cityName, uri } = item;

        const { top, bottom, distanceContainer } = styles;

        return (
            <Card
              style={[
                style,
                {
                    height: cardHeight,
                    width: cardWidth,
                    borderRadius: 20
                }
              ]}
            >
                <ImageBackground
                  source={uri}
                  style={{ flex: 1 }}
                >
                    <View style={top}>
                        <Text
                          style={{ color: 'black', fontWeight: '300', fontSize: 15 }}
                        >
                            Distance of
                        </Text>
                        <View style={distanceContainer}>
                            <Text
                              style={{ color: 'black', fontWeight: '500', fontSize: 18 }}
                            >
                                {distance}
                            </Text>
                            <Text
                              style={{ color: 'black', fontWeight: '500', fontSize: 15 }}
                            >
                            {' km'}
                            </Text>
                        </View>
                    </View>
                    <View style={bottom}>
                        <Text
                          style={{ color: 'white', fontSize: 25, fontWeight: '500' }}
                        >
                            {cityName}
                        </Text>
                    </View>
                </ImageBackground>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10
    },
    bottom: {
        flex: 2,
        padding: 10,
        justifyContent: 'flex-end',
    },
    distanceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }
});
