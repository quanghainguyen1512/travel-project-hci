import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {
    Container, Header, Left, Body, Button, Icon, Spinner, Title, Right
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { SERVICES } from '../../../data/CityDetail.Data';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';
import MyText from '../../components/MyText';
import ServiceCard from '../../components/ServiceCard';
import { BACKGROUND } from '../../constants/Colors';

export default class SightSeeing extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderCards = ({ item }) => (
        <ServiceCard item={item} />
    )

    renderSeparator = () => (
        <View style={{ marginVertical: HORIZONTAL_MARGIN / 2 }} />
    );

    keyExtractor = (item, index) => `${index}`;

    render() {
        const { navigation } = this.props;
        return (
            <Container style={{ backgroundColor: BACKGROUND }}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Sightseeing</Title>
                    </Body>
                    <Right />
                </Header>
                {
                    this.state.mounting
                    ? (
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Spinner color="red" />
                        </View>
                    )
                    : (
                        <FlatList
                          data={SERVICES}
                          keyExtractor={this.keyExtractor}
                          renderItem={this.renderCards}
                          horizontal={false}
                          contentContainerStyle={{ padding: HORIZONTAL_MARGIN }}
                          ItemSeparatorComponent={this.renderSeparator}
                        />
                    )
                }
            </Container>
        );
    }
}
