import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Text, List, ListItem, Thumbnail, Left, Body
} from 'native-base';
import { otherUsers } from '../../constants/Images';

export default class YouTab extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.hanhang} />
                    </Left>
                    <Body>
                        <View />
                    </Body>
                </ListItem>
            </List>
        );
    }
}

const style = StyleSheet.create({

});
