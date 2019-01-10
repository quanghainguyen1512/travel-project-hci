import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {
    ListItem, Left, Thumbnail, Body
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import ServiceItem from '../../components/ServiceItem';
import { services } from '../../../data/PlaceDetail.Data';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';
import MyText from '../../components/MyText';

const bitexcoOverview = require('../../assets/images/bitexcoOverview.jpg');

export default class ServicesTab extends Component {
    renderService = ({ item }) => (
        <ServiceItem item={item} />
    )

    keyExtractor = (item, index) => `${index}`;

    render() {
        return (
            // <Container>
                <View style={{ flex: 1 }}>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={bitexcoOverview} large />
                        </Left>
                        <Body>
                            <MyText>Bitexco Financial Tower - Saigon Skydeck</MyText>
                            <AirbnbRating
                              showRating={false}
                              ratingColor="#3498db"
                              ratingBackgroundColor="#c8c7c8"
                              ratingCount={5}
                              isDisabled
                              size={15}
                              defaultRating={4}
                            />
                        </Body>
                    </ListItem>
                    <View style={{ marginTop: 20, flex: 1 }}>
                        <MyText type="black" style={{ fontSize: 20, marginLeft: HORIZONTAL_MARGIN }}>Book in Advance</MyText>
                        <FlatList
                          horizontal={false}
                          data={services}
                          renderItem={this.renderService}
                          keyExtractor={this.keyExtractor}
                          contentContainerStyle={{ paddingHorizontal: HORIZONTAL_MARGIN }}
                        />
                    </View>
                </View>
            // </Container>
        );
    }
}
