import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
    Container, Header, Left, Button, Icon, Content, Col, Grid, Spinner
} from 'native-base';
import FastImage from 'react-native-fast-image';
import { HORIZONTAL_MARGIN, DEVICE_WIDTH, DEVICE_HEIGHT } from '../../constants/Layout';
import MyText from '../../components/MyText';
import { vietnam } from '../../constants/Images';

const Item = (props) => {
    const {
        height, city, src, onPress
    } = props;
    return (
        <TouchableOpacity
          style={{
            alignSelf: 'stretch',
            height,
            marginBottom: HORIZONTAL_MARGIN,
            borderRadius: 10,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 1
          }}
          onPress={onPress}
        >
            <FastImage
              source={src}
              resizeMode={FastImage.resizeMode.cover}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: 10
              }}
            />
            <MyText type="black" style={{ color: 'white', alignSelf: 'center' }}>{city}</MyText>
            {/* <ImageBackground
              style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center'
                }}
              source={src}
            >
                <MyText type="black" style={{ color: 'white' }}>{city}</MyText>
            </ImageBackground> */}
        </TouchableOpacity>
    );
};

export default class Vietnam extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    render() {
        const { navigation, onLoadEnd } = this.props;
        return (
            <Container>
                <ImageBackground
                  source={require('../../assets/images/vietnam.jpg')}
                  style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT * 0.3 }}
                  onLoadEnd={onLoadEnd}
                >
                    <Header span transparent>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                                <Icon name="arrow-back" style={{ color: 'black' }} />
                            </Button>
                        </Left>
                    </Header>
                    <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center'
                        }}
                    >
                        <MyText type="black" style={{ alignSelf: 'center', color: 'white', fontSize: 30 }}>Vietnam</MyText>
                    </View>
                </ImageBackground>
                <Content style={{ padding: HORIZONTAL_MARGIN }}>
                    {
                        this.state.mounting
                        ? (
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Spinner color="red" />
                        </View>
                        )
                        : (
                            <Grid>
                                <Col style={{ paddingRight: HORIZONTAL_MARGIN / 2 }}>
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.hochiminh} city="Ho Chi Minh" height={180} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.halong} city="Ha Long" height={150} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.nhatrang} city="Nha Trang" height={200} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.hanoi} city="Ha Noi" height={120} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.hoian} city="Hoi An" height={170} />
                                </Col>
                                <Col style={{ paddingLeft: HORIZONTAL_MARGIN / 2 }}>
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.ninhbinh} city="Ninh Binh" height={150} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.danang} city="Da Nang" height={200} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.phuquoc} city="Phu Quoc" height={130} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.camau} city="Ca Mau" height={160} />
                                    <Item onPress={() => navigation.navigate('CityStack')} src={vietnam.hue} city="Hue" height={150} />
                                </Col>
                            </Grid>
                        )
                    }
                </Content>
            </Container>
        );
    }
}
