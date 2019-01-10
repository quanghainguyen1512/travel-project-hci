import React, { Component } from 'react';
import {
 View, StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';
import {
    Card, CardItem, Left, Right, Body, Text, Thumbnail, Icon
} from 'native-base';
import { DEVICE_WIDTH, HORIZONTAL_MARGIN } from '../constants/Layout';
import MyText from './MyText';
import { MAIN_COLOR } from '../constants/Colors';

// const img = require('../assets/images/bitexcoOverview.jpg');
const ava = require('../assets/images/profilepic.jpg');

const cardWidth = DEVICE_WIDTH - 2 * HORIZONTAL_MARGIN;

export default class ArticlesCard extends Component {
    render() {
        const { item, style, onPress } = this.props;
        const {
            title, name, places, days, postedDate, points, percentage, img
        } = item;
        return (
            <Card
              style={[
                    style,
                    {
                        width: cardWidth,
                        aspectRatio: 1
                    }
                ]}
            >
                <CardItem>
                    <Left>
                        <Thumbnail source={ava} circular small />
                        <Body>
                            <MyText>{name}</MyText>
                        </Body>
                    </Left>
                </CardItem>
                <TouchableOpacity style={{ flex: 4 }} onPress={onPress}>
                    <ImageBackground
                      source={img}
                      style={styles.imgBg}
                    >
                        <MyText type="black" style={styles.titleTxt}>{title}</MyText>
                        <Text style={styles.placedaytxt}>{`${places} places in ${days} days`}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <CardItem style={{ flex: 1 }}>
                    <Left>
                        <View>
                            {/* <Icon active type="Entypo" name="arrow-bold-up" /> */}
                            {/* <Icon active type="Entypo" name="arrow-bold-down" /> */}
                            <Icon style={{ color: MAIN_COLOR }} type="Foundation" name="like" />
                            <Icon style={{ color: MAIN_COLOR }} type="Foundation" name="dislike" />
                        </View>
                        <View>
                            <Text>{points}</Text>
                            <Text note>{`(${percentage} upvoted)`}</Text>
                        </View>
                    </Left>
                    <Right>
                        <Text note>{postedDate}</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    imgBg: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: HORIZONTAL_MARGIN,
        flex: 1
    },
    titleTxt: {
        color: 'white',
        fontSize: 28,
        // fontWeight: '500'
    },
    placedaytxt: {
        color: 'white',
        fontStyle: 'italic'
    }
});
