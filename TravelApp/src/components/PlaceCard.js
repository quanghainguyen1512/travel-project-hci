import React, { Component } from 'react';
import {
    ImageBackground, View, StyleSheet, TouchableOpacity
} from 'react-native';
import {
    Card, CardItem, Left, Text, Right
} from 'native-base';
import { AirbnbRating, Rating } from 'react-native-ratings';
import { DEVICE_WIDTH } from '../constants/Layout';
import { A4_RATIO } from '../constants/Ratios';

// const img = require('../assets/images/bitexcoOverview.jpg');

const cardWidth = DEVICE_WIDTH * 0.7;
const cardHeight = cardWidth / A4_RATIO.width;

export default class PlaceCard extends Component {
    render() {
        const { item, style, onPress } = this.props;
        const {
            uri,
            title,
            reviews,
            rating,
            articles
        } = item;
        return (
            <TouchableOpacity
              style={[
                style,
                {
                    height: cardHeight,
                    width: cardWidth
                }
              ]}
              onPress={onPress}
            >
                <Card
                  style={[
                // style,
                    {
                        flex: 1
                        // height: cardHeight,
                        // width: cardWidth
                    }
                  ]}
                >
                {/* <CardItem cardBody style={{ flex: 4, backgroundColor: 'red' }}>

                </CardItem> */}
                    <ImageBackground
                      source={uri}
                      style={styles.imageBg}
                    //   imageStyle={{ height: 200 }}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </ImageBackground>
                    <CardItem style={{ flex: 1 }}>
                        <Left>
                            <View style={styles.ratingContainer}>
                                <AirbnbRating
                                  showRating={false}
                                  ratingColor="#3498db"
                                  ratingBackgroundColor="#c8c7c8"
                                  ratingCount={5}
                                  isDisabled
                                  fractions
                                  size={15}
                                  defaultRating={rating}
                                />
                                <Text>{`${reviews} reviews`}</Text>
                            </View>
                        </Left>
                        <Right>
                            <Text note>{`${articles} articles`}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    imageBg: {
        justifyContent: 'flex-end',
        // alignItems: 'flex-start',
        flex: 4,
        flexDirection: 'column'
    },
    ratingContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500'
    }
});
