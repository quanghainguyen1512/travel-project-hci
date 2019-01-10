import React, { Component } from 'react';
import {
    List, ListItem, Thumbnail, Left, Body, Right, Text
} from 'native-base';
import { otherUsers } from '../../constants/Images';
import MyText from '../../components/MyText';

export default class YouTab extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.hanhang} />
                    </Left>
                    <Body>
                        <MyText type="black">hanhang</MyText>
                        <MyText>started following you</MyText>
                    </Body>
                    <Right>
                        <Text note>12m</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={require('../../assets/images/coin.png')} />
                    </Left>
                    <Body>
                        <MyText>One of your article have just reached 100 upvotes! You will get 10 points as a reward.</MyText>
                    </Body>
                    <Right>
                        <Text note>30m</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail circular source={otherUsers.khanhvan} />
                    </Left>
                    <Body>
                        <MyText type="black">khanhvan</MyText>
                        <MyText>upvoted your article</MyText>
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
                        <MyText>liked your photos</MyText>
                    </Body>
                    <Right>
                        <Text note>2d</Text>
                    </Right>
                </ListItem>
            </List>
        );
    }
}
