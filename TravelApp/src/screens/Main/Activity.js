import React, { Component } from 'react';
import {
    Container, Header, Body, Title, Tabs, Tab, Left, Right,
    StyleProvider
} from 'native-base';
import YouTab from '../Activity/YouTab';
import FollowingTab from '../Activity/FollowingTab';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Activity extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
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
            </StyleProvider>
        );
    }
}
