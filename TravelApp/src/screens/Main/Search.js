import React, { Component } from 'react';
import {
    View, TouchableOpacity, StyleSheet
} from 'react-native';
import {
    Container, Header, Content, Item, Input, Icon, Text, Spinner,
    StyleProvider
} from 'native-base';
import { countries, categories } from '../../../data/MainScreen.Data';
import CountryArea from '../../components/CountryArea';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';
import FilterCountryItem from '../../components/FilterCountryItem';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderCityItem = city => (
        <TouchableOpacity style={{
            padding: 10, borderColor: 'darkgray', borderWidth: 1, borderRadius: 5
          }}
        >
            <Text>{city}</Text>
        </TouchableOpacity>
    );

    render() {
        const { countriesContainer, filterContainer } = styles;
        const { navigation } = this.props;
        return (
            <StyleProvider style={getTheme(material)}>
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search Destination" />
                        {/* <Icon name="map-marker-radius" type="MaterialCommunityIcons" /> */}
                    </Item>
                </Header>
                {
                    this.state.mounting
                    ? (
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Spinner color="red" />
                    </View>
                    )
                    : (
                    <Content>
                        {/* Filter */}
                        <View style={filterContainer}>
                            {
                                categories.map((item, index) => (
                                    <FilterCountryItem
                                      key={index}
                                      cate={item}
                                      style={{ marginRight: 15, marginBottom: 10 }}
                                    />
                                ))
                            }
                        </View>
                        <View style={countriesContainer}>
                            {
                                countries.map((item, index) => (
                                    <CountryArea
                                      key={index}
                                      item={item}
                                      navigation={navigation}
                                      style={{ marginBottom: 30 }}
                                    />
                                ))
                            }
                        </View>
                    </Content>)
                }
            </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    countriesContainer: {
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingHorizontal: HORIZONTAL_MARGIN
    },
    filterContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        borderColor: 'darkgray',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingHorizontal: HORIZONTAL_MARGIN,
        marginTop: HORIZONTAL_MARGIN,
        marginBottom: 40,
        paddingVertical: 15
    }
});
