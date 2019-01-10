import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import {
    Text, Header, Title, Container, Content, Left, Body, Button, Icon, Right, Thumbnail,
    StyleProvider
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import MyText from '../../components/MyText';
import { HORIZONTAL_MARGIN, DEVICE_WIDTH } from '../../constants/Layout';
import { A4RATIO } from '../../constants/Ratios';
import { profilepic } from '../../constants/Images';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class ArticleDetail extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <StyleProvider style={getTheme(material)}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title>3 Days in Ho Chi Minh City</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon type="Foundation" name="like" />
                        </Button>
                        <Button transparent>
                            <Icon type="Foundation" name="dislike" />
                        </Button>
                    </Right>
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
                        <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignSelf: 'stretch',
                                marginTop: 10
                            }}
                        >
                            <Thumbnail circular source={profilepic} />
                            <MyText style={{ color: 'white' }}>Andrew Phan</MyText>
                        </View>
                    </ImageBackground>
                    <Text style={{ marginHorizontal: HORIZONTAL_MARGIN, marginVertical: HORIZONTAL_MARGIN * 1.5, fontStyle: 'italic' }}>Ho Chi Minh City is a large, busy and fascinating city. Formerly known as Saigon, this former capital is an eclectic blend of the traditional and the modern. With historic attractions, fascinating day trips and bustling streets lined with food stalls and pavement cafes, there’s certainly plenty to see and do in three days in Ho Chi Minh City.</Text>
                    <View>
                        <MyText type="black" style={styles.dayText}>Day 1</MyText>
                        <View>
                            <MyText type="black" style={styles.placeText}>War Renmants Museum</MyText>
                            <Swiper
                              showsPagination
                              width={DEVICE_WIDTH}
                              height={DEVICE_WIDTH / A4RATIO}
                              style={{ marginVertical: 15 }}
                            >
                                <FastImage
                                  source={require('../../assets/images/article-image/war-remnants-museum.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/war-remnants-museum-1.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/war-remnants-museum-2.jpg')}
                                  style={{ flex: 1 }}
                                />
                            </Swiper>
                            <Text style={{ marginHorizontal: HORIZONTAL_MARGIN }}>Start your first day in Ho Chi Minh City by learning more about the Vietnam War – from Vietnam’s perspective. A visit to the War Remnants Museum is an important and educational stop on your Ho Chi Minh City itinerary and creates a basis for understanding the rest of your time in Vietnam</Text>
                        </View>
                        <View>
                            <MyText type="black" style={styles.placeText}>The Independence Palace</MyText>
                            <Swiper
                              showsPagination
                              width={DEVICE_WIDTH}
                              height={DEVICE_WIDTH / A4RATIO}
                              style={{ marginVertical: 15 }}
                            >
                                <FastImage
                                  source={require('../../assets/images/article-image/the-independence-palace.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/the-independence-palace-1.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/the-independence-palace-2.jpg')}
                                  style={{ flex: 1 }}
                                />
                            </Swiper>
                            <Text style={{ marginHorizontal: HORIZONTAL_MARGIN }}>Staying with the history lesson theme, be sure to squeeze in a trip to the Reunification Palace too. Home to the presidents of South Vietnam before the fall of Saigon in 1975, interestingly, the palace has been left exactly as it was back then.</Text>
                        </View>
                    </View>
                    <View>
                        <MyText type="black" style={styles.dayText}>Day 2</MyText>
                        <View>
                            <MyText type="black" style={styles.placeText}>Ben Thanh Market</MyText>
                            <Swiper
                              showsPagination
                              width={DEVICE_WIDTH}
                              height={DEVICE_WIDTH / A4RATIO}
                              style={{ marginVertical: 15 }}
                            >
                                <FastImage
                                  source={require('../../assets/images/article-image/benthanh.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/benthanh-1.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/benthanh-2.jpg')}
                                  style={{ flex: 1 }}
                                />
                            </Swiper>
                            <Text style={{ marginHorizontal: HORIZONTAL_MARGIN }}>Chaotic yet fun, a trip to Ben Thanh Market, the city’s busiest and most central market, is worth the assault on the senses! It’s a lively and colorful place where determined market vendors and customers haggle for everything from fresh meat and vegetables to clothes, domestic items and souvenirs. Grab some lunch from one of the food stalls here to set you up for the afternoon’s activities.</Text>
                        </View>
                        <View>
                            <MyText type="black" style={styles.placeText}>Cu Chi Tunnels</MyText>
                            <Swiper
                              showsPagination
                              width={DEVICE_WIDTH}
                              height={DEVICE_WIDTH / A4RATIO}
                              style={{ marginVertical: 15 }}
                            >
                                <FastImage
                                  source={require('../../assets/images/article-image/cuchi.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/cuchi-1.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/cuchi-2.jpg')}
                                  style={{ flex: 1 }}
                                />
                            </Swiper>
                            <Text style={{ marginHorizontal: HORIZONTAL_MARGIN }}>Make sure you embark on one of the most interesting day trips out of the city by heading to the Cu Chi Tunnels. In just a few hours you’ll learn how the Viet Cong lived underground for long stretches of time during the war. You’ll also see bomb craters along with booby traps that were used on American troops. For those who aren’t afraid of small spaces (some of them are incredibly narrow) you can experience the tunnels firsthand by getting in them</Text>
                        </View>
                    </View>
                    <View>
                        <MyText type="black" style={styles.dayText}>Day 3</MyText>
                        <View>
                            <MyText type="black" style={styles.placeText}>Mekong Delta Private Day Tour</MyText>
                            <Swiper
                              showsPagination
                              width={DEVICE_WIDTH}
                              height={DEVICE_WIDTH / A4RATIO}
                              style={{ marginVertical: 15 }}
                            >
                                <FastImage
                                  source={require('../../assets/images/article-image/mekong.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/mekong-1.jpg')}
                                  style={{ flex: 1 }}
                                />
                                <FastImage
                                  source={require('../../assets/images/article-image/mekong-2.jpg')}
                                  style={{ flex: 1 }}
                                />
                            </Swiper>
                            <Text style={{ marginHorizontal: HORIZONTAL_MARGIN }}>Let’s face it, no trip to Ho Chi Minh City would be complete without exploring the Mekong Delta. The Mekong River flows through Tibet, China, Burma, Laos and Cambodia before finally winding its way into Vietnam. Travel along the river by longtail boat, sample exotic fruits and candy, visit local markets and learn all about rural life in and around the Delta.</Text>
                        </View>
                    </View>
                </Content>
            </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    dayText: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    },
    placeText: {
        marginLeft: HORIZONTAL_MARGIN,
        fontSize: 20,
        marginTop: 15
    }
});
