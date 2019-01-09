import React, { Component } from 'react';
import {
    StyleSheet, View, Image, TouchableOpacity, MapView
} from 'react-native';
import {
    Text, H2, Button, H3, ListItem, Left, Icon, Body, Right, Toast, List
} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

import { AirbnbRating } from 'react-native-ratings';
import { ScrollView } from 'react-native-gesture-handler';
import ViewMoreText from 'react-native-view-more-text';
import { DEVICE_WIDTH, HORIZONTAL_MARGIN } from '../../constants/Layout';
import { A4_RATIO } from '../../constants/Ratios';
import { places } from '../../../data/CityDetail.Data';
import PlaceCard from '../../components/PlaceCard';
import { bitexcoAbout } from '../../../data/PlaceDetail.Data';

const bitexcoOverview = require('../../assets/images/bitexcoOverview.jpg');

const imgWidth = DEVICE_WIDTH;
const imgHeight = imgWidth / A4_RATIO.width;

export default class Overview extends Component {
    renderPlacesCard = ({ item }) => (
        <PlaceCard
          item={item}
          style={{ marginRight: 25 }}
        />
    );

    render() {
        const {
            titleArea, openArea
        } = styles;
        const { onTouchCarouselStart, onTouchCarouselEnd } = this.props;
        return (
            <ScrollView>
                <Swiper
                  autoplay
                  showsPagination
                  autoplayDirection
                  width={imgWidth}
                  height={imgHeight}
                  style={{ marginBottom: 15 }}
                >
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgHeight }}
                    />
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgHeight }}
                    />
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgHeight }}
                    />
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgHeight }}
                    />
                </Swiper>
                <View style={{ marginHorizontal: HORIZONTAL_MARGIN }}>
                    <H2>Bitexco Financial Tower - Saigon Skydeck</H2>
                    <View style={titleArea}>
                        <AirbnbRating
                          showRating={false}
                          ratingCount={5}
                          isDisabled
                          size={15}
                          defaultRating={4}
                          //   ratingColor="#3498db"
                          //   ratingBackgroundColor="#c8c7c8"
                        />
                        <Text note style={{ marginLeft: 10 }}>5,056 reviews</Text>
                    </View>
                    <Text style={{ fontSize: 13 }}>
                        #15 of 198 things to do in Ho Chi Minh City
                    </Text>
                    {/* <Text>Observation Decks & Towers</Text> */}
                </View>
                <TouchableOpacity style={openArea}>
                    <Button success transparent>
                        <Text style={{ fontWeight: '400' }}>OPEN NOW</Text>
                    </Button>
                    <Text style={{ textAlign: 'center', flex: 1 }}>9:30 AM - 9:30 PM</Text>
                </TouchableOpacity>
                {/* About */}
                <View style={{ marginHorizontal: HORIZONTAL_MARGIN }}>
                    <H3>About</H3>
                    <ViewMoreText
                      numberOfLines={5}
                      renderViewMore={this.renderViewMore}
                      renderViewLess={this.renderViewLess}
                      textStyle={{ textAlign: 'left' }}
                    >
                        {bitexcoAbout}
                    </ViewMoreText>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon type="EvilIcons" name="clock" />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 13 }}>Suggested duration: 1-2 hours</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="Entypo" name="location-pin" />
                            </Left>
                            <Body>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13 }}>
                                        36 Ho Tung Mau Street, Ben Nghe ward, District 1, HCMC 70000 Vietnam
                                    </Text>
                                </TouchableOpacity>
                            </Body>
                            <Right>
                                <Icon type="Entypo" name="chevron-right" />
                            </Right>
                        </ListItem>
                        {/* <ListItem>
                            <MapView />
                        </ListItem> */}
                        <ListItem icon>
                            <Left>
                                <Icon type="Entypo" name="phone" />
                            </Left>
                            <Body>
                                <TouchableOpacity
                                  onPress={() => Toast.show({
                                    text: 'Wrong password!',
                                    duration: 2000
                                })}
                                >
                                    <Text style={{ fontSize: 13 }}>+84 93 843 93 27</Text>
                                </TouchableOpacity>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon fontSize={50} type="MaterialCommunityIcons" name="email-outline" />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 13 }}>Email</Text>
                            </Body>
                            <Right>
                                <Icon type="Entypo" name="chevron-right" />
                            </Right>
                        </ListItem>
                    </List>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <H3 style={{ marginLeft: HORIZONTAL_MARGIN }}>Related Places</H3>
                    <Carousel
                      data={places}
                      renderItem={this.renderPlacesCard}
                      sliderWidth={DEVICE_WIDTH}
                      itemWidth={DEVICE_WIDTH * 0.75}
                      onTouchStart={onTouchCarouselStart}
                      onTouchEnd={onTouchCarouselEnd}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginVertical: 5
    },
    openArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: 20,
        marginHorizontal: HORIZONTAL_MARGIN
    }
});
