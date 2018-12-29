import React, { Component } from 'react';
import {
    View, TouchableOpacity, StyleSheet, ImageBackground, FlatList
} from 'react-native';
import {
    Container, Header, Content, Left, Button, Icon, Body, Right, ListItem, Fab, Text
} from 'native-base';
import Carousel from 'react-native-snap-carousel';

import PlaceCard from '../../components/PlaceCard';
import { DEVICE_HEIGHT, DEVICE_WIDTH, HORIZONTAL_MARGIN } from '../../constants/Layout';
import { places, cities } from '../../../data/CityDetail.Data';
import CountryCard from '../../components/CountryCard';
import { GrayAlpha } from '../../constants/Colors';

const uri = require('../../assets/images/hcmabout.jpg');

export default class CityDetail extends Component {
    renderPlacesCard = ({ item }) => (
        <PlaceCard
          id={item.id}
          item={item}
          style={{ marginRight: 25 }}
          onPress={() => this.props.navigation.navigate('PlaceDetail')}
        />
    );

    renderNearbyCities = ({ item }) => (
        <CountryCard
          item={item}
          style={{ marginRight: 20 }}
        />
    );

    keyExtractor = (item, index) => item.id;

    render() {
        const {
            title, aboutItems, cityIntro, imgBGrnd, aboutArea,
            hcmText, vietnamText, thingsToDoArea, thingsToDoText,
            area, headline
        } = styles;
        const { navigation } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body />
                    <Right>
                        <Button transparent>
                            <Icon name="heart" />
                        </Button>
                        <Button transparent>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#ECEBF3' }}>
                    <ImageBackground
                      style={imgBGrnd}
                      source={uri}
                    //   imageStyle={{ blurRadius: 15 }}
                    >
                        <View style={cityIntro}>
                            <View style={title}>
                                <Text style={hcmText}>Ho Chi Minh City</Text>
                                <Button rounded style={{ backgroundColor: GrayAlpha, alignSelf: 'center' }}>
                                    <Text style={vietnamText}>VIETNAM</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 1 }} />
                            <TouchableOpacity
                              style={aboutArea}
                              onPress={() => navigation.navigate('About')}
                            >
                                <View style={[aboutItems, { borderBottomWidth: 1, borderBottomColor: 'white' }]}>
                                    <Text style={{ fontSize: 13 }}>{'Don\'t miss: Urban Adventures | History and Culture | ...'}</Text>
                                </View>
                                <View style={aboutItems}>
                                    <Text
                                      style={{ fontWeight: '600', fontSize: 18 }}
                                    >
                                        About Ho Chi Minh City
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    {/* Things To Do */}
                    <View style={thingsToDoArea}>
                        <Text style={thingsToDoText}>Things to Do</Text>
                        <ListItem icon>
                            <Left>
                                <Button>
                                    <Icon
                                    //   type="AntDesign"
                                      active
                                      name="flag"
                                    />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Sightseeing</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: '#FFD700' }}>
                                    <Icon
                                      type="MaterialCommunityIcons"
                                      active
                                      name="food"
                                    />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Best Food & Must Eats</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: '#568203' }}>
                                    <Icon
                                      type="FontAwesome"
                                      active
                                      name="bed"
                                    />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Rests & Relaxes</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Button>
                                    <Icon
                                      active
                                      type="MaterialIcons"
                                      name="local-activity"
                                    />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Activites & Experiences</Text>
                            </Body>
                        </ListItem>
                    </View>
                    {/* Popular places */}
                    <View style={area}>
                        <Text style={headline}>Popular Places</Text>
                        {/* <FlatList
                          horizontal
                          data={places}
                          keyExtractor={this.keyExtractor}
                          renderItem={this.renderPlacesCard}
                        /> */}
                        <Carousel
                          data={places}
                        //   ref={(c) => { this._carousel = c; }}
                          renderItem={this.renderPlacesCard}
                          sliderWidth={DEVICE_WIDTH}
                          itemWidth={DEVICE_WIDTH * 0.7}
                        />
                    </View>
                    {/* Related Articles */}
                    {/* <View style={area}>
                        <Text style={headline}>Related Articles</Text>
                        <FlatList
                          horizontal
                        />
                    </View> */}
                    {/* Nearby Cities */}
                    <View style={area}>
                        <Text style={headline}>Nearby Cities</Text>
                        <FlatList
                          horizontal
                          data={cities}
                          renderItem={this.renderNearbyCities}
                          style={{ marginLeft: HORIZONTAL_MARGIN }}
                        />
                        {/* <Carousel
                          data={cities}
                        //   ref={(c) => { this._carousel = c; }}
                          renderItem={this.renderNearbyCities}
                          sliderWidth={DEVICE_WIDTH}
                          itemWidth={DEVICE_WIDTH * 0.4}
                        /> */}
                    </View>
                </Content>
                <Fab
                  active
                  direction="up"
                  position="bottomRight"
                  style={{ backgroundColor: 'white' }}
                >
                    <Icon active name="ios-search" style={{ color: 'green' }} />
                </Fab>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    imgBGrnd: {
        height: DEVICE_HEIGHT * 0.88,
        alignSelf: 'stretch',
        // flexDirection: 'column'
    },
    cityIntro: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        paddingHorizontal: HORIZONTAL_MARGIN,
        paddingBottom: 15,
        flex: 1,
        backgroundColor: '#ffffff22'
    },
    title: {
        flex: 4,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    btnCountry: {
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: GrayAlpha,
        marginTop: 5
    },
    aboutItems: {
        flex: 1,
        backgroundColor: GrayAlpha,
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutArea: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
        // marginHorizontal: 5,
    },
    hcmText: {
        fontSize: 50,
        fontWeight: '600',
        // color: '#222222bb'
    },
    vietnamText: {
        color: '#222222bb',
        fontWeight: '600',
        fontSize: 18,
        marginHorizontal: 25,
        marginVertical: 5
    },
    thingsToDoArea: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 10
    },
    thingsToDoText: {
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '500'
    },
    area: {
        // marginLeft: HORIZONTAL_MARGIN,
        marginTop: 30,
        marginBottom: 15,
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: 'transparent'
        // justifyContent: 'space-between'
    },
    headline: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: '700',
        marginLeft: HORIZONTAL_MARGIN
    }
});
