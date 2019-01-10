import React from 'react';
import { View } from 'react-native';
import {
 ListItem, Text, Thumbnail, Left, Body, Button, Icon
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { profilepic } from '../constants/Images';
import MyText from './MyText';

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
                <MyText type="black">{title}</MyText>
                <Text style={{ fontSize: 13 }}>{shortenText}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'stretch' }}>
                    <Button icon transparent>
                        <Icon type="Foundation" name="like" />
                    </Button>
                    <Button icon transparent>
                        <Icon type="Foundation" name="dislike" />
                    </Button>
                </View>
            </Body>
        </ListItem>
    );
};

export default RecentReview;
