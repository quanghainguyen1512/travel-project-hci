// import React, { Component } from 'react';
// import {
//     View, TouchableOpacity, StyleSheet, ImageBackground, FlatList
// } from 'react-native';
// import {
//     Container, Header, Content, Left, Button, Icon, Body, Right, ListItem, Fab, Text,
//     Spinner
// } from 'native-base';
// import Carousel from 'react-native-snap-carousel';
// import { NavigationActions } from 'react-navigation';

// import PlaceCard from '../../components/PlaceCard';
// import {
//     DEVICE_HEIGHT,
//     DEVICE_WIDTH,
//     HORIZONTAL_MARGIN,
//     HEADER_HEIGHT,
//     STATUS_BAR_HEIGHT
// } from '../../constants/Layout';
// import { places, cities } from '../../../data/CityDetail.Data';
// import CountryCard from '../../components/CountryCard';
// import { GrayAlpha, BACKGROUND } from '../../constants/Colors';
// import { hcmabout } from '../../constants/Images';

// export default class CityDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { mounting: true };
//     }

//     componentDidMount() {
//         setTimeout(() => this.setState({ mounting: false }), 200);
//     }

//     renderPlacesCard = ({ item }) => (
//         <PlaceCard
//           key={item.title}
//           item={item}
//           style={{ marginRight: 25 }}
//           onPress={() => this.props.navigation.navigate('PlaceDetail')}
//         />
//     );

//     renderNearbyCities = ({ item }) => (
//         <CountryCard
//           item={item}
//           style={{ marginRight: 20 }}
//         />
//     );

//     keyExtractor = (item, index) => `${index}`;

//     render() {
//         const {
//             title, aboutItems, cityIntro, imgBGrnd, aboutArea,
//             hcmText, vietnamText, thingsToDoArea, thingsToDoText,
//             area, headline
//         } = styles;
//         const { navigation } = this.props;
//         return (
//             <Container>
//                 <Header>
//                     <Left>
//                         <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
//                             <Icon name="arrow-back" />
//                         </Button>
//                     </Left>
//                     <Body />
//                     <Right>
//                         <Button transparent>
//                             <Icon name="heart" />
//                         </Button>
//                         <Button transparent>
//                             <Icon name="more" />
//                         </Button>
//                     </Right>
//                 </Header>
//                 {/* <Content style={{ backgroundColor: '#ECEBF3' }}> */}
//                 {
//                     this.state.mounting
//                     ? (
//                         <View style={{ justifyContent: 'center', flex: 1 }}>
//                             <Spinner color="red" />
//                         </View>
//                     )
//                     : (
//                     <Content style={{ backgroundColor: BACKGROUND }}>
//                         <ImageBackground
//                           style={imgBGrnd}
//                           source={hcmabout}
//                         //   imageStyle={{ blurRadius: 15 }}
//                         >
//                             <View style={cityIntro}>
//                                 <View style={title}>
//                                     <Text style={hcmText}>Ho Chi Minh City</Text>
//                                     <Button rounded style={{ backgroundColor: GrayAlpha, alignSelf: 'center' }}>
//                                         <Text style={vietnamText}>VIETNAM</Text>
//                                     </Button>
//                                 </View>
//                                 <View style={{ flex: 1 }} />
//                                 <TouchableOpacity
//                                   style={aboutArea}
//                                   onPress={() => navigation.navigate('About')}
//                                 >
//                                     <View style={[aboutItems, { borderBottomWidth: 1, borderBottomColor: 'white' }]}>
//                                         <Text style={{ fontSize: 13 }}>{'Don\'t miss: Urban Adventures | History and Culture | ...'}</Text>
//                                     </View>
//                                     <View style={aboutItems}>
//                                         <Text
//                                           style={{ fontWeight: '600', fontSize: 18 }}
//                                         >
//                                             About Ho Chi Minh City
//                                         </Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                         </ImageBackground>
//                         {/* Things To Do */}
//                         <View style={thingsToDoArea}>
//                             <Text style={thingsToDoText}>Things to Do</Text>
//                             <ListItem icon>
//                                 <Left>
//                                     <Button>
//                                         <Icon
//                                         //   type="AntDesign"
//                                           active
//                                           name="flag"
//                                         />
//                                     </Button>
//                                 </Left>
//                                 <Body>
//                                     <Text>Sightseeing</Text>
//                                 </Body>
//                             </ListItem>
//                             <ListItem icon>
//                                 <Left>
//                                     <Button style={{ backgroundColor: '#FFD700' }}>
//                                         <Icon
//                                           type="MaterialCommunityIcons"
//                                           active
//                                           name="food"
//                                         />
//                                     </Button>
//                                 </Left>
//                                 <Body>
//                                     <Text>Best Food & Must Eats</Text>
//                                 </Body>
//                             </ListItem>
//                             <ListItem icon>
//                                 <Left>
//                                     <Button style={{ backgroundColor: '#568203' }}>
//                                         <Icon
//                                           type="FontAwesome"
//                                           active
//                                           name="bed"
//                                         />
//                                     </Button>
//                                 </Left>
//                                 <Body>
//                                     <Text>Rests & Relaxes</Text>
//                                 </Body>
//                             </ListItem>
//                             {/* <ListItem icon>
//                                 <Left>
//                                     <Button>
//                                         <Icon
//                                         active
//                                         type="MaterialIcons"
//                                         name="local-activity"
//                                         />
//                                     </Button>
//                                 </Left>
//                                 <Body>
//                                     <Text>Activites & Experiences</Text>
//                                 </Body>
//                             </ListItem> */}
//                         </View>
//                         {/* Popular places */}
//                         <View style={area}>
//                             <Text style={headline}>Popular Places</Text>
//                             <Carousel
//                               data={places}
//                             //   ref={(c) => { this._carousel = c; }}
//                               renderItem={this.renderPlacesCard}
//                               sliderWidth={DEVICE_WIDTH}
//                               itemWidth={DEVICE_WIDTH * 0.75}
//                             />
//                         </View>
//                         {/* Related Articles */}
//                         {/* <View style={area}>
//                             <Text style={headline}>Related Articles</Text>
//                             <FlatList
//                             horizontal
//                             />
//                         </View> */}
//                         {/* Nearby Cities */}
//                         <View style={area}>
//                             <Text style={headline}>Nearby Cities</Text>
//                             <FlatList
//                               horizontal
//                               data={cities}
//                               renderItem={this.renderNearbyCities}
//                               style={{ marginLeft: HORIZONTAL_MARGIN }}
//                               keyExtractor={this.keyExtractor}
//                             />
//                         </View>
//                     </Content>
//                     )
//                 }

//                 {/* <Fab
//                   active
//                   direction="up"
//                   position="bottomRight"
//                   style={{ backgroundColor: 'white' }}
//                 >
//                     <Icon active name="ios-search" style={{ color: 'green' }} />
//                 </Fab> */}
//             </Container>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     imgBGrnd: {
//         height: DEVICE_HEIGHT - HEADER_HEIGHT - STATUS_BAR_HEIGHT,
//         alignSelf: 'stretch',
//         // flexDirection: 'column'
//     },
//     cityIntro: {
//         flexDirection: 'column',
//         alignSelf: 'stretch',
//         paddingHorizontal: HORIZONTAL_MARGIN,
//         paddingBottom: 15,
//         flex: 1,
//         backgroundColor: '#ffffff22'
//     },
//     title: {
//         flex: 4,
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         alignSelf: 'stretch'
//     },
//     btnCountry: {
//         justifyContent: 'center',
//         borderRadius: 30,
//         alignItems: 'center',
//         backgroundColor: GrayAlpha,
//         marginTop: 5
//     },
//     aboutItems: {
//         flex: 1,
//         backgroundColor: GrayAlpha,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     aboutArea: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'stretch'
//         // marginHorizontal: 5,
//     },
//     hcmText: {
//         fontSize: 50,
//         fontWeight: '700',
//         textAlign: 'center'
//         // color: '#222222bb'
//     },
//     vietnamText: {
//         color: '#222222bb',
//         fontWeight: '600',
//         fontSize: 18,
//         marginHorizontal: 25,
//         marginVertical: 5
//     },
//     thingsToDoArea: {
//         backgroundColor: '#fff',
//         margin: 15,
//         padding: 10
//     },
//     thingsToDoText: {
//         marginBottom: 10,
//         marginLeft: 10,
//         fontSize: 20,
//         fontWeight: '500'
//     },
//     area: {
//         // marginLeft: HORIZONTAL_MARGIN,
//         marginTop: 30,
//         marginBottom: 15,
//         flexDirection: 'column',
//         alignSelf: 'stretch',
//         backgroundColor: 'transparent'
//         // justifyContent: 'space-between'
//     },
//     headline: {
//         marginBottom: 10,
//         fontSize: 25,
//         fontWeight: '700',
//         marginLeft: HORIZONTAL_MARGIN
//     }
// });
import React, { Component } from 'react';
import {
    View, TouchableOpacity, StyleSheet, ImageBackground, FlatList
} from 'react-native';
import {
    Container, Header, Content, Left, Button, Icon, Body, Right, ListItem,
    Spinner
} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { NavigationActions } from 'react-navigation';

import PlaceCard from '../../components/PlaceCard';
import {
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    HORIZONTAL_MARGIN,
    HEADER_HEIGHT,
    STATUS_BAR_HEIGHT
} from '../../constants/Layout';
import { places, cities } from '../../../data/CityDetail.Data';
import CountryCard from '../../components/CountryCard';
import { GrayAlpha, BACKGROUND } from '../../constants/Colors';
import { hcmabout } from '../../constants/Images';
import MyText from '../../components/MyText';

export default class CityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderPlacesCard = ({ item }) => (
        <PlaceCard
          key={item.title}
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

    keyExtractor = (item, index) => `${index}`;

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
                        <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
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
                {/* <Content style={{ backgroundColor: '#ECEBF3' }}> */}
                {
                    this.state.mounting
                    ? (
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Spinner color="red" />
                        </View>
                    )
                    : (
                    <Content style={{ backgroundColor: BACKGROUND }}>
                        <ImageBackground
                          style={imgBGrnd}
                          source={hcmabout}
                        //   imageStyle={{ blurRadius: 15 }}
                        >
                            <View style={cityIntro}>
                                <View style={title}>
                                    <MyText type="black" style={hcmText}>Ho Chi Minh City</MyText>
                                    <Button
                                      rounded
                                      style={{ backgroundColor: GrayAlpha, alignSelf: 'center' }}
                                      onPress={() => navigation.navigate('Vietnam')}
                                    >
                                        <MyText type="black" style={vietnamText}>VIETNAM</MyText>
                                    </Button>
                                </View>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                  style={aboutArea}
                                  onPress={() => navigation.navigate('About')}
                                >
                                    <View style={[aboutItems, { borderBottomWidth: 1, borderBottomColor: 'white' }]}>
                                        <MyText style={{ fontSize: 13 }}>{'Don\'t miss: Urban Adventures | History and Culture | ...'}</MyText>
                                    </View>
                                    <View style={aboutItems}>
                                        <MyText
                                          type="black"
                                          style={{ fontSize: 18 }}
                                        >
                                            About Ho Chi Minh City
                                        </MyText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        {/* Things To Do */}
                        <View style={thingsToDoArea}>
                            <MyText type="black" style={thingsToDoText}>Things to Do</MyText>
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
                                    <MyText>Sightseeing</MyText>
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
                                    <MyText>Best Food & Must Eats</MyText>
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
                                    <MyText>Rests & Relaxes</MyText>
                                </Body>
                            </ListItem>
                            {/* <ListItem icon>
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
                            </ListItem> */}
                        </View>
                        {/* Popular places */}
                        <View style={area}>
                            <MyText type="black" style={headline}>Popular Places</MyText>
                            <Carousel
                              data={places}
                            //   ref={(c) => { this._carousel = c; }}
                              renderItem={this.renderPlacesCard}
                              sliderWidth={DEVICE_WIDTH}
                              itemWidth={DEVICE_WIDTH * 0.75}
                            />
                        </View>
                        {/* Related Articles */}
                        {/* <View style={area}>
                            <MyText type="black" style={headline}>Related Articles</MyText>
                            <FlatList
                            horizontal
                            />
                        </View> */}
                        {/* Nearby Cities */}
                        <View style={area}>
                            <MyText type="black" style={headline}>Nearby Cities</MyText>
                            <FlatList
                              horizontal
                              data={cities}
                              renderItem={this.renderNearbyCities}
                              style={{ marginLeft: HORIZONTAL_MARGIN }}
                              keyExtractor={this.keyExtractor}
                            />
                        </View>
                    </Content>
                    )
                }

                {/* <Fab
                  active
                  direction="up"
                  position="bottomRight"
                  style={{ backgroundColor: 'white' }}
                >
                    <Icon active name="ios-search" style={{ color: 'green' }} />
                </Fab> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    imgBGrnd: {
        height: DEVICE_HEIGHT - HEADER_HEIGHT - STATUS_BAR_HEIGHT,
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
        textAlign: 'center'
        // color: '#222222bb'
    },
    vietnamText: {
        color: '#222222bb',
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
        fontSize: 20
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
        marginLeft: HORIZONTAL_MARGIN
    }
});
