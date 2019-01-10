import React from 'react';
import { View } from 'react-native';
import {
    ListItem, Left, Thumbnail, Body, Text, Button
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import MyText from './MyText';
import { serviceImg } from '../constants/Images';

const ServiceItem = (props) => {
    const { item } = props;
    const {
        title,
        rating,
        noReviews,
        price,
        img
    } = item;
    return (
        <ListItem avatar>
            <Left>
                <Thumbnail large square source={serviceImg[img]} />
            </Left>
            <Body>
                <MyText type="black">{title}</MyText>
                <View style={{ flexDirection: 'row', }}>
                    <AirbnbRating
                      showRating={false}
                      ratingCount={5}
                      isDisabled
                      size={15}
                      defaultRating={rating}
                    />
                    <Text note style={{ marginLeft: 10 }}>{`${noReviews} Reviews`}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>from </Text>
                    <Text style={{ fontWeight: '500' }}>{`$${price}`}</Text>
                </View>
                <Button small warning>
                    <Text style={{ color: 'black' }}>Book Now</Text>
                </Button>
            </Body>
        </ListItem>
    );
};

export default ServiceItem;
