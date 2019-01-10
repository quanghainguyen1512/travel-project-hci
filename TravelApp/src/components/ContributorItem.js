import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
 Thumbnail, Text, Button, Icon
} from 'native-base';
import MyText from './MyText';
import { DEVICE_WIDTH } from '../constants/Layout';
import { otherUsers } from '../constants/Images';

export default class ContributorItem extends Component {
    constructor(props) {
        super(props);
        this.state = { followed: false };
    }

    render() {
        const { item, style } = this.props;
        const { name, user, topIn } = item;
        const { followed } = this.state;
        return (
            <View style={[styles.container, style]}>
                <Thumbnail source={otherUsers[user]} large />
                <MyText type="black">{name}</MyText>
                <Text note>{`@${user}`}</Text>
                <Button
                  iconLeft
                  bordered={followed}
                  onPress={() => this.setState({ followed: !followed })}
                  small
                  style={{ alignSelf: 'center' }}
                >
                    <Icon
                      name={followed ? 'user-following' : 'user-follow'}
                      type="SimpleLineIcons"
                      style={{ fontSize: 20 }}
                    />
                    <Text style={{ fontSize: 11 }}>{!followed ? 'Follow' : 'Following'}</Text>
                </Button>
                <Text note style={{ textAlign: 'center' }}>{`Top contributor in \n${topIn}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH / 2,
        aspectRatio: 1,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
