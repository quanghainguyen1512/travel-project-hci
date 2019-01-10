import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Text, List, ListItem, Thumbnail, Left
} from 'native-base';
import { otherUsers } from '../../constants/Images';

export default class FollowingTab extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.hanhang} />
                    </Left>
                </ListItem>
            </List>
        );
    }
}

const style = StyleSheet.create({

});
