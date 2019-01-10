import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import {
    Text, Header, Title, Container, Content, Left, Body, Button, Icon
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import MyText from '../../components/MyText';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';
import { A4RATIO } from '../../constants/Ratios';

export default class ArticleDetail extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>3 Days in Ho Chi Minh City</Title>
                    </Body>
                </Header>
                <Content>
                    <ImageBackground
                      source={require('../../assets/images/2.jpg')}
                      style={{
                          alignSelf: 'stretch',
                          padding: HORIZONTAL_MARGIN,
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          aspectRatio: A4RATIO
                        }}
                    >
                        <MyText type="black" style={{ color: 'white', fontSize: 28 }}>3 Days in Ho Chi Minh City</MyText>
                        <Text style={{ color: 'white', fontStyle: 'italic' }}>5 places in 3 days</Text>
                    </ImageBackground>
                </Content>
            </Container>
        );
    }
}
