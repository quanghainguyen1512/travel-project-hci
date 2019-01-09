import React, { Component } from 'react';
import {
    ImageBackground, View, StyleSheet, TouchableOpacity
} from 'react-native';
import {
    Card, CardItem, Left, Text, Right
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { DEVICE_WIDTH } from '../constants/Layout';
import { A4RATIO } from '../constants/Ratios';
import { placesImg } from '../constants/Images';

// const img = require('../assets/images/bitexcoOverview.jpg');

export default class PlaceCard extends Component {
    render() {
        const { item, style, onPress } = this.props;
        const {
            title,
            reviews,
            rating,
            articles,
            img
        } = item;
        return (
            <TouchableOpacity
              style={[
                style,
                {
                    width: DEVICE_WIDTH * 0.75,
                    aspectRatio: A4RATIO
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
                      source={placesImg[img]}
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
