import React, { Component } from 'react';
import {
    Body, Title, Tabs, Tab, Left, Right,
    StyleProvider, Container, Header
} from 'native-base';
import YouTab from '../Activity/YouTab';
import FollowingTab from '../Activity/FollowingTab';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { MAIN_COLOR } from '../../constants/Colors';

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
                <Tabs style={{ backgroundColor: MAIN_COLOR }}>
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
