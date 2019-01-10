import React, { Component } from 'react';
import {
    StyleSheet, View, TouchableOpacity, ImageBackground, FlatList
} from 'react-native';
import {
    Container, Thumbnail, Button, Header, Text,
    Icon, Right, Spinner
} from 'native-base';
import FastImage from 'react-native-fast-image';
import { profilepic, citiesImg, serviceImg } from '../../constants/Images';
import { DEVICE_WIDTH, HORIZONTAL_MARGIN, DEVICE_HEIGHT } from '../../constants/Layout';
import MyText from '../../components/MyText';

// import { Grid, Row } from 'react-native-easy-grid';

// import { DEVICE_HEIGHT } from '../../constants/Layout';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderPhoto = ({ item }) => (
        <FastImage
          source={item}
          style={{ aspectRatio: 1, borderRadius: 10, marginRight: 5 }}
          resizeMode={FastImage.resizeMode.cover}
        />
    )

    renderSeparator = () => (
        <View style={{ marginVertical: HORIZONTAL_MARGIN / 3 }} />
    );

    keyExtractor = (item, index) => `${index}`;

    render() {
        const {
            top, single, area, imgHeader
        } = styles;
        // const { viewRef } = this.state;
        // const uri = 'https://lh3.googleusercontent.com/-xG64hh6yopY/WGhqaprlcaI/AAAAAAAAAP4/5AumUB4AqZMpT7m_4uCFuNYiw1GvNTCtgCEwYBhgL/w140-h139-p/31246367072_bd8a7e80b3_k.jpg';
        // const uri = require('../../assets/images/profilepic.jpg');
        return (
            <Container>
                <ImageBackground
                  source={citiesImg.nhatrang}
                  style={imgHeader}
                //   onLoadEnd={this.imageLoaded}
                >
                    <Header span style={{ backgroundColor: 'transparent' }}>
                        <Right>
                            <Button transparent>
                                <Icon
                                  style={{ color: 'black' }}
                                  type="Ionicons"
                                  name="ios-settings"
                                />
                            </Button>
                        </Right>
                    </Header>
                </ImageBackground>
                {/* <BlurView
                  viewRef={viewRef}
                  blurType="dark"
                  blurAmount={10}
                /> */}
                <View style={top}>
                    <Thumbnail large source={profilepic} style={{ backgroundColor: '#635DB7' }} />
                    <Text style={{ fontSize: 22 }}>Hai Nguyen</Text>
                    <Text note style={{ fontSize: 18 }}>@hainq</Text>
                </View>
                <View style={area}>
                    <TouchableOpacity style={single}>
                        <Text>21</Text>
                        <Text note>Contributions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={single}>
                        <Text>50</Text>
                        <Text note>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={single}>
                        <Text>88</Text>
                        <Text note>Following</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: HORIZONTAL_MARGIN, flex: 1 }}>
                    <MyText type="black" style={{ fontSize: 18 }}>Photos</MyText>
                    {
                        this.state.mounting
                        ? (
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Spinner color="red" />
                        </View>
                        )
                        : (
                            <FlatList
                              data={Object.values(serviceImg)}
                              renderItem={this.renderPhoto}
                              ItemSeparatorComponent={this.renderSeparator}
                              keyExtractor={this.keyExtractor}
                              showsHorizontalScrollIndicator={false}
                              horizontal
                              style={{ flex: 1, marginVertical: 10 }}
                            />
                        )
                    }

                </View>
                {/* <View style={mid}>
                    <Button info style={textButton}>
                        <Text>MANAGE ACCOUNT</Text>
                    </Button>
                    <Button light style={textButton}>
                        <Text>SETTIGS</Text>
                    </Button>
                </View>
                <View style={bottom}>
                    <Button transparent info style={textButton}>
                        <Text>LOG OUT</Text>
                    </Button>
                    <Button transparent danger style={textButton}>
                        <Text>DELETE ACCOUNT</Text>
                    </Button>
                </View> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 15,
        fontWeight: '500',
        alignSelf: 'center'
    },
    top: {
        // flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: -40
    },
    imgHeader: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        height: DEVICE_HEIGHT * 0.3,
        width: DEVICE_WIDTH
    },
    area: {
        marginVertical: HORIZONTAL_MARGIN,
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginHorizontal: HORIZONTAL_MARGIN,
        paddingVertical: 10
        // borderColor: 'lightgray',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
    },
    single: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    }
});
