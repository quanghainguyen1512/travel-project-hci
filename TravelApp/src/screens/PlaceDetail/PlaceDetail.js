import React, { Component } from 'react';
import { } from 'react-native';
import {
    Container, Header, Tab, Tabs,
    Left, Icon, Button, Body, Right, Title
} from 'native-base';
import { NavigationActions } from 'react-navigation';

import Overview from './Overview';
import ReviewsTab from './ReviewsTab';
import ArticlesTab from './ArticlesTab';
import ServicesTab from './ServicesTab';

export default class PlaceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { bookmarked: 'false' };
    }

    bookmarkPress = () => this.setState(prev => ({ bookmarked: !prev.bookmarked }))

    renderIcon = () => (this.state.bookmarked
            ? <Icon type="FontAwesome" name="heart" />
            : <Icon type="FontAwesome" name="heart-o" />)

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        {/* <H3 style={{ color: 'white' }}>Bitexco Financial Tower</H3> */}
                        <Title>Bitexco Financial Tower</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.bookmarkPress}>
                            {this.renderIcon}
                            {/* <Icon type="FontAwesome" name="heart-o" /> */}
                        </Button>
                        <Button transparent>
                            <Icon type="FontAwesome" name="exclamation-circle" />
                        </Button>
                    </Right>
                </Header>
                {/* <Tabs renderTabBar={() => <ScrollableTab />}> */}
                <Tabs locked>
                    <Tab heading="Overview">
                        <Overview />
                        {/* onTouchCarouselStart={() => this.setState({ isTabLocked: true })}
                        onTouchCarouselEnd={() => this.setState({ isTabLocked: false })} */}
                    </Tab>
                    <Tab heading="Articles">
                        <ArticlesTab navigation={navigation} />
                    </Tab>
                    <Tab heading="Reviews">
                        <ReviewsTab navigation={navigation} />
                        {/* <ReviewsStack /> */}
                    </Tab>
                    <Tab heading="Services">
                        <ServicesTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
