import React, { Component } from 'react';
import { View } from 'react-native';
import {
 Card, CardItem, Text, Button
} from 'native-base';
import FastImage from 'react-native-fast-image';
import { AirbnbRating } from 'react-native-ratings';
import MyText from './MyText';

const ServiceCard = (props) => {
    const { item } = props;
    const {
        type, title, price, img, rating
    } = item;
    return (
        <Card style={{ alignSelf: 'stretch', aspectRatio: 1 }}>
            <CardItem>
                <FastImage
                  source={img}
                  style={{ aspectRatio: 2, flex: 1 }}
                />
            </CardItem>
            <CardItem>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <MyText>{title}</MyText>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                        <AirbnbRating
                          showRating={false}
                          ratingCount={5}
                          isDisabled
                          size={15}
                          defaultRating={rating}
                        />
                        <Text>{`${price} VND`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Text note>{type}</Text>
                        <Button warning>
                            <Text>Book now</Text>
                        </Button>
                    </View>

                </View>
            </CardItem>
        </Card>
    );
};

export default ServiceCard;
