import React from 'react';
import { View } from 'react-native';
import {
 ListItem, Text, Thumbnail, Left, Body
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { profilepic } from '../constants/Images';

const RecentReview = (item, key) => {
    const {
        title, rating, date, shortenText
    } = item;
    return (
        <ListItem avatar key={key}>
            <Left>
                <Thumbnail source={profilepic} circular />
            </Left>
            <Body>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    alignSelf: 'stretch',
                    justifyContent: 'space-between'
                }}
                >
                    <AirbnbRating
                      showRating={false}
                      ratingCount={5}
                      isDisabled
                      size={15}
                      defaultRating={rating}
                    />
                        <Text note>{date}</Text>
                </View>
                <Text style={{ fontWeight: '500' }}>{title}</Text>
                <Text style={{ fontSize: 13 }}>{shortenText}</Text>
            </Body>
        </ListItem>
    );
};

export default RecentReview;
