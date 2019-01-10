import React, { Component } from 'react';
import { StyleSheet, View, MapView } from 'react-native';
import {
 Text, H2, Content, ListItem, List, Body, Right, Icon, Button, Fab, Container, Spinner
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { FlatList } from 'react-native-gesture-handler';
import ReviewBar from '../../components/ReviewBar';
import { featureReviews, recentReviews } from '../../../data/PlaceDetail.Data';
import FeatureReviewCard from '../../components/FeatureReviewCard';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';
import RecentReview from '../../components/RecentReview';

export default class ReviewsTab extends Component {
    constructor(props) {
        super(props);
        this.state = { fabActive: false, mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderFeatureReview = ({ item }) => (
        <FeatureReviewCard text={item.text} reviewCount={item.reviewCount} />
    );

    renderSeparator = () => (
        <View style={{ marginHorizontal: HORIZONTAL_MARGIN / 2 }} />
    );

    render() {
        const { titleArea } = styles;
        const { navigation } = this.props;
        const { fabActive } = this.state;
        return (
            this.state.mounting
            ? (
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Spinner color="red" />
                </View>
            )
            : (
            <Container>
                <Content style={{ paddingVertical: HORIZONTAL_MARGIN }}>
                    <H2 style={{ marginLeft: HORIZONTAL_MARGIN, fontWeight: '500' }}>Overall</H2>
                    <View style={titleArea}>
                        <AirbnbRating
                          showRating={false}
                          ratingColor="#3498db"
                          ratingBackgroundColor="#c8c7c8"
                          ratingCount={5}
                          isDisabled
                          size={15}
                          defaultRating={4}
                        />
                        <Text note style={{ marginLeft: 10 }}>5,056 reviews</Text>
                    </View>
                    <Text style={{ fontSize: 13, marginLeft: HORIZONTAL_MARGIN }}>
                        #15 of 198 things to do in Ho Chi Minh City
                    </Text>
                    <View style={{ marginHorizontal: HORIZONTAL_MARGIN, marginVertical: 20 }}>
                        <ReviewBar title="Excellent" value={2034} total={5056} />
                        <ReviewBar title="Very good" value={2042} total={5056} />
                        <ReviewBar title="Average" value={882} total={5056} />
                        <ReviewBar title="Poor" value={172} total={5056} />
                        <ReviewBar title="Terrible" value={57} total={5056} />
                    </View>
                    <FlatList
                      data={featureReviews}
                      renderItem={this.renderFeatureReview}
                      ItemSeparatorComponent={this.renderSeparator}
                      horizontal
                      style={{ marginLeft: HORIZONTAL_MARGIN }}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item, index) => `${index}`}
                    />
                    {/* <Item style={searchArea}>
                        <Input placeholder="Search keywords in reviews" />
                        <Icon active name="ios-search" />
                    </Item> */}
                    <View style={{ marginVertical: HORIZONTAL_MARGIN * 3 }}>
                        <H2 style={{ marginLeft: HORIZONTAL_MARGIN, fontWeight: '500' }}>Most Recent reviews</H2>
                        <List>
                            {
                                recentReviews.map((item, index) => (
                                    <RecentReview
                                    //   item={item}
                                      rating={item.rating}
                                      title={item.title}
                                      shortenText={item.shortenText}
                                      date={item.date}
                                      key={index}
                                    />
                                ))
                            }
                            <ListItem key="asd" onPress={() => navigation.navigate('MoreReviews')}>
                                {/* <Left /> */}
                                <Body>
                                    <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>View more reviews</Text>
                                </Body>
                                <Right>
                                    <Icon type="Entypo" name="chevron-right" />
                                </Right>
                            </ListItem>
                            {/* <ListItem icon>
                                <Left>
                                    <Icon name="edit" type="Feather" />
                                </Left>
                                <Body>
                                    <Text style={{ fontStyle: 'italic', textDecorationLine: 'underline' }}>Write a review !</Text>
                                </Body>
                            </ListItem> */}
                        </List>
                    </View>
                    {/* <View>
                        <H2 style={{ fontWeight: '500', marginLeft: HORIZONTAL_MARGIN }}>Questions & Answers</H2>
                        <List>
                            <ListItem>
                                <Left />
                            </ListItem>
                            <ListItem style={{ backgroundColor: 'transparent' }} activeOpacity={1}>
                                <Body>
                                    <Text>Ask a question</Text>
                                </Body>
                                <Right>
                                    <Icon type="Entypo" name="chevron-right" />
                                </Right>
                            </ListItem>
                        </List>
                    </View> */}
                </Content>
                <Fab
                  active={fabActive}
                  direction="up"
                  position="bottomRight"
                  onPress={() => this.setState({ fabActive: !fabActive })}
                >
                    {/* <Icon name="plus" type="Entypo" /> */}
                    <Icon name="edit" type="Feather" />
                    <Button onPress={() => navigation.navigate('WriteReview')}>
                        <Icon name="comment" type="FontAwesome" />
                    </Button>
                    <Button>
                        <Icon name="question" type="FontAwesome" />
                    </Button>
                </Fab>
            </Container>
        ));
    }
}

const styles = StyleSheet.create({
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginVertical: 5,
        marginLeft: HORIZONTAL_MARGIN
    },
    searchArea: {
        marginHorizontal: HORIZONTAL_MARGIN,
        marginVertical: 10,
        // backgroundColor: 'lightgray'
    }
});
