import React, { Component } from 'react';
import {
 ImageBackground, View, StyleSheet, FlatList
} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { home } from '../../constants/Images';
import { A4RATIO } from '../../constants/Ratios';
import { HORIZONTAL_MARGIN, DEVICE_WIDTH } from '../../constants/Layout';
import MyText from '../../components/MyText';
import { BACKGROUND } from '../../constants/Colors';
import { topContributors, hotDestinations } from '../../../data/Explore.Data';
import ContributorItem from '../../components/ContributorItem';
import HotDest from '../../components/HotDest';
import { articles } from '../../../data/PlaceDetail.Data';
import ArticlesCard from '../../components/AritcleCard';
import { places } from '../../../data/CityDetail.Data';
import PlaceCard from '../../components/PlaceCard';

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderContributors = ({ item }) => (
        <ContributorItem item={item} style={{ marginLeft: HORIZONTAL_MARGIN }} />
    )

    renderHotDest = ({ item }) => (
        <HotDest item={item} style={{ marginLeft: HORIZONTAL_MARGIN }} />
    )

    renderArticles = ({ item }) => (
        <ArticlesCard item={item} style={{ marginLeft: HORIZONTAL_MARGIN, width: DEVICE_WIDTH * 0.6 }} />
    );

    renderPlacesCard = ({ item }) => (
        <PlaceCard
          item={item}
          style={{ marginRight: 25 }}
          onPress={() => this.props.navigation.navigate('PlaceDetail')}
        />
    );

    keyExtractor = (item, index) => `${index}`;

    render() {
        const { homeBg, headline, subContainer } = styles;
        return (
            <Container>
                <Content>
                    <ImageBackground
                      source={home}
                      style={homeBg}
                    >
                        <MyText
                          type="black"
                          style={{
                            fontSize: 30,
                            color: 'white'
                            }}
                        >
                            YOURS TO EXPLORE
                        </MyText>
                        <MyText
                          style={{
                            fontSize: 20,
                            color: 'white'
                        }}
                        >
                            Discover and book amazing things-to-do at exclusive prices
                        </MyText>
                    </ImageBackground>
                    {
                        this.state.mounting
                        ? (
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Spinner color="red" />
                            </View>
                        )
                        : (
                            <View style={{ backgroundColor: BACKGROUND, alignSelf: 'stretch' }}>
                                <View style={subContainer}>
                                    <MyText type="black" style={headline}>Hot Destinations</MyText>
                                    <FlatList
                                      horizontal
                                      data={hotDestinations}
                                      renderItem={this.renderHotDest}
                                      keyExtractor={this.keyExtractor}
                                      showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                <View style={subContainer}>
                                    <MyText type="black" style={headline}>Recommended Articles</MyText>
                                    <FlatList
                                      horizontal
                                      renderItem={this.renderArticles}
                                      data={articles}
                                      showsHorizontalScrollIndicator={false}
                                      keyExtractor={this.keyExtractor}
                                    />
                                </View>
                                <View style={subContainer}>
                                    <MyText type="black" style={headline}>Because you viewed Bitexco</MyText>
                                    <FlatList
                                      horizontal
                                      contentContainerStyle={{ marginLeft: HORIZONTAL_MARGIN }}
                                      data={places}
                                      renderItem={this.renderPlacesCard}
                                      keyExtractor={this.keyExtractor}
                                      showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                <View style={subContainer}>
                                    <MyText type="black" style={headline}>Famous contributors</MyText>
                                    <FlatList
                                      horizontal
                                      data={topContributors}
                                      renderItem={this.renderContributors}
                                      keyExtractor={this.keyExtractor}
                                      showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                        )
                    }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    homeBg: {
        alignSelf: 'stretch',
        aspectRatio: A4RATIO,
        justifyContent: 'flex-end',
        padding: HORIZONTAL_MARGIN
    },
    headline: {
        marginBottom: 10,
        fontSize: 22,
        marginLeft: HORIZONTAL_MARGIN
    },
    subContainer: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        marginVertical: 5,
        paddingVertical: 5
    }
});
