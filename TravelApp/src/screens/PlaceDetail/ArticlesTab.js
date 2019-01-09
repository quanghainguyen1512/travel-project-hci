import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { articles } from '../../../data/PlaceDetail.Data';
import ArticlesCard from '../../components/AritcleCard';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';

export default class ArticlesTab extends Component {
    renderArticles = ({ item }) => (
        <ArticlesCard item={item} />
    );

    renderSeparator = () => (
        <View style={{ marginVertical: HORIZONTAL_MARGIN / 2 }} />
    );

    keyExtractor = (item, index) => `${index}`;

    render() {
        return (
            <FlatList
              horizontal={false}
              data={articles}
              renderItem={this.renderArticles}
              style={styles.list}
              contentContainerStyle={{ alignItems: 'center', paddingVertical: HORIZONTAL_MARGIN }}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={this.keyExtractor}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        // paddingHorizontal: HORIZONTAL_MARGIN
    }
});
