import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {
    Card, CardItem, Left, Right, Body, Text, Thumbnail, Icon
} from 'native-base';
import { DEVICE_WIDTH, HORIZONTAL_MARGIN } from '../constants/Layout';

const img = require('../assets/images/bitexcoOverview.jpg');
const ava = require('../assets/images/profilepic.jpg');

const cardWidth = DEVICE_WIDTH - 2 * HORIZONTAL_MARGIN;
// const cardHeight = cardWidth / A4_RATIO.width;
const cardHeight = cardWidth;

export default class ArticlesCard extends Component {
    render() {
        const { item, style } = this.props;
        const {
            title, name, places, days, postedDate, points, percentage
        } = item;
        return (
            <Card
              style={[
                    style,
                    {
                        height: cardHeight,
                        width: cardWidth
                    }
                ]}
            >
                <CardItem>
                    <Left>
                        <Thumbnail source={ava} circular small />
                        <Body>
                            <Text>{name}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <ImageBackground
                  source={img}
                  style={styles.imgBg}
                >
                    <Text style={styles.titleTxt}>{title}</Text>
                    <Text style={styles.placedaytxt}>{`${places} places in ${days} days`}</Text>
                </ImageBackground>
                <CardItem style={{ flex: 1 }}>
                    <Left>
                        <View>
                            <Icon active type="Entypo" name="arrow-bold-up" />
                            <Icon active type="Entypo" name="arrow-bold-down" />
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
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: HORIZONTAL_MARGIN
    },
    titleTxt: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500'
    },
    placedaytxt: {
        color: 'white',
        fontStyle: 'italic'
    }
});
