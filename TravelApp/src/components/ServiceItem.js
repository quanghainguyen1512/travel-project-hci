import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    ListItem, Left, Thumbnail, Body, Text, Button
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import MyText from './MyText';

const ServiceItem = (props) => {
    const { item } = props;
    const {
        title,
        rating,
        noReviews,
        price
    } = item;
    return (
        <ListItem avatar>
            <Left>
                <Thumbnail large />
            </Left>
            <Body>
                <MyText>{title}</MyText>
                <View>
                    <AirbnbRating />
                    <Text>{`${noReviews} Reviews`}</Text>
                </View>
                <View>
                    <Text>from</Text>
                    <Text>{`$${price}`}</Text>
                </View>
                <Button warning>
                    <Text>Book Now</Text>
                </Button>
            </Body>
        </ListItem>
    );
};

export default ServiceItem;
