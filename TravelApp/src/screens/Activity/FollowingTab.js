import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Text, List, ListItem, Thumbnail, Left, Body, Right
} from 'native-base';
import { otherUsers } from '../../constants/Images';
import MyText from '../../components/MyText';

export default class FollowingTab extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.hanhang} />
                    </Left>
                    <Body>
                        <MyText type="black">hanhang</MyText>
                        <MyText>posted an article about her trips</MyText>
                    </Body>
                    <Right>
                        <Text note>20m</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.khanhvan} />
                    </Left>
                    <Body>
                        <MyText type="black">khanhvan</MyText>
                        <MyText>reviewed about Cu Chi Tunnels</MyText>
                    </Body>
                    <Right>
                        <Text note>2h</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.kieutrinh} />
                    </Left>
                    <Body>
                        <MyText type="black">kieutrinh</MyText>
                        <MyText>posted 3 photos</MyText>
                    </Body>
                    <Right>
                        <Text note>2d</Text>
                    </Right>
                </ListItem>
            </List>
        );
    }
}

const style = StyleSheet.create({

});
