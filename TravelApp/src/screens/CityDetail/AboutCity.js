/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import {
 View, StyleSheet, Image, findNodeHandle
} from 'react-native';
import {
    Container, Header, Left, Content, Icon, Button, Text, Right
} from 'native-base';
import { BlurView } from 'react-native-blur';
import ViewMoreText from 'react-native-view-more-text';
import { GrayAlpha } from '../../constants/Colors';
import { DEVICE_WIDTH, HORIZONTAL_MARGIN } from '../../constants/Layout';

const bgImg = require('../../assets/images/hcmabout.jpg');

class MyText extends Component {
    render() {
        const { style, ...props } = this.props;
        return <Text style={[style, { color: 'white' }]} {...props} />;
    }
}

export default class AboutCity extends Component {
    constructor(props) {
        super(props);
        // this.state = { degree: 'C' };
        this.state = { viewRef: null };
    }

    renderViewMore = onPress => (
          <MyText onPress={onPress} style={{ fontStyle: 'italic', fontWeight: '400' }}>VIEW MORE</MyText>
        )

    renderViewLess = onPress => (
          <MyText onPress={onPress} style={{ fontStyle: 'italic', fontWeight: '400' }}>VIEW LESS</MyText>
        )

    imageLoaded = () => {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    render() {
        const { navigation } = this.props;
        const { viewRef } = this.state;
        const {
            dontMissItem, dontMissArea, gallery, imgGallery,
            additionalInfo, subTitle, mainContent
        } = styles;
        return (
            <Container>
                <Image
                  source={bgImg}
                  style={styles.absolute}
                  ref={(img) => { this.backgroundImage = img; }}
                  onLoadEnd={this.imageLoaded}
                />
                <BlurView
                  blurType="dark"
                  blurAmount={10}
                  viewRef={viewRef}
                  style={styles.absolute}
                />
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Right>
                    {/* <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button> */}
                    </Right>
                </Header>
                <Content style={{ paddingHorizontal: HORIZONTAL_MARGIN, paddingBottom: 20 }}>
                    <View style={{ marginVertical: 25 }}>
                        <MyText style={{ fontSize: 30 }}>About</MyText>
                        <MyText style={{ fontSize: 40, fontWeight: '600' }}>Ho Chi Minh City</MyText>
                    </View>
                    {/* Don't miss */}
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 25 }}>
                        <MyText>{'Don\'t miss:'}</MyText>
                        <View style={dontMissArea}>
                            <Text style={dontMissItem}>Urban Adventures</Text>
                            <Text style={dontMissItem}>History and Culture</Text>
                            <Text style={dontMissItem}>Iconic Landmarks</Text>
                        </View>
                    </View>
                    {/* View more... */}
                    <ViewMoreText
                      numberOfLines={5}
                      renderViewMore={this.renderViewMore}
                      renderViewLess={this.renderViewLess}
                      textStyle={{ textAlign: 'left' }}
                    >
                        <MyText style={{ fontSize: 18 }}>
                            {'Known as Vietnam\'s Saigon City, immerse yourself in the rich culture of Ho Chi Minh City! '}
                            {'This Vietnamese city is a trove of historical sights waiting to be discovered. '}
                            {'Spend half a day at Cu Chi Tunnels and learn about its significance during the Viet Cong war. '}
                            {'Travel like a local and hop on a Motorbike Adventure tour and visit significant relics such as the Central Post Office and the Saigon Opera House.\n'}
                            {'Experience a different side of the city at the Mekong Delta and encouter the iconic fishing village filled with stilt houses and rice paddies. '}
                            {'Don\'t forget to snack on sweet seasonal fruits and coconut candy, freshly made daily!'}
                        </MyText>
                    </ViewMoreText>
                    {/* Gallery */}
                    <View style={{ marginVertical: 25 }}>
                        <MyText style={{ fontSize: 25 }}>Gallery</MyText>
                        <View style={gallery}>
                            <Image source={bgImg} style={imgGallery} />
                            <Image source={bgImg} style={imgGallery} />
                            <Image source={bgImg} style={imgGallery} />
                            <Image source={bgImg} style={imgGallery} />
                            <Image source={bgImg} style={imgGallery} />
                            <Image source={bgImg} style={imgGallery} />
                        </View>
                    </View>
                    <View style={additionalInfo}>
                        <View>
                            <MyText style={subTitle}>Time Zone</MyText>
                            <MyText style={mainContent}>GMT +07:00</MyText>
                            <MyText note>No time difference</MyText>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <MyText style={subTitle}>Currency</MyText>
                            <MyText style={mainContent}>Vietnamese Dong</MyText>
                            <MyText note>1USD = 25,000 VND</MyText>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <MyText style={subTitle}>Best Time To Visit</MyText>
                            <MyText style={mainContent}>JAN - FEB (Spring Flowers Festival)</MyText>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    },
    dontMissItem: {
        backgroundColor: GrayAlpha,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 5
    },
    dontMissArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    imgGallery: {
        borderRadius: 15,
        height: DEVICE_WIDTH * 0.28,
        width: DEVICE_WIDTH * 0.28,
        marginBottom: 10
    },
    additionalInfo: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'column',
        marginBottom: 20,
        backgroundColor: '#d1d1d122'
    },
    subTitle: {
        marginBottom: 5
    },
    mainContent: {
        fontSize: 20,
        fontWeight: '400'
    }
});
