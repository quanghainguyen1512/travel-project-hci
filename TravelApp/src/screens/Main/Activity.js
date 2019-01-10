import React, { Component } from 'react';
import {
    Container, Header, Body, Title, Tabs, Tab, Left, Right
} from 'native-base';
import YouTab from '../Activity/YouTab';
import FollowingTab from '../Activity/FollowingTab';

export default class Activity extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left style={{ flex: 1 }} />
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title style={{ fontFamily: 'AvenirLTStd-Black' }}>Activity</Title>
                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>
                <Tabs>
                    <Tab textStyle={{ fontFamily: 'AvenirLTStd-Roman' }} heading="You">
                        <YouTab />
                    </Tab>
                    <Tab textStyle={{ fontFamily: 'AvenirLTStd-Roman' }} heading="Following">
                        <FollowingTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
