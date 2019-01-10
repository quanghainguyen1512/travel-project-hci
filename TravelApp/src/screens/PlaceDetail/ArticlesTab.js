import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Spinner } from 'native-base';
import { articles } from '../../../data/PlaceDetail.Data';
import ArticlesCard from '../../components/AritcleCard';
import { HORIZONTAL_MARGIN } from '../../constants/Layout';

export default class ArticlesTab extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderArticles = ({ item }) => (
        <ArticlesCard item={item} onPress={() => this.props.navigation.navigate('ArticleDetail')} />
    );

    renderSeparator = () => (
        <View style={{ marginVertical: HORIZONTAL_MARGIN / 2 }} />
    );

    keyExtractor = (item, index) => `${index}`;

    render() {
        return (
            this.state.mounting
            ? (
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Spinner color="red" />
                </View>
            )
            : (
                <FlatList
                  horizontal={false}
                  data={articles}
                  renderItem={this.renderArticles}
                  style={styles.list}
                  contentContainerStyle={{ alignItems: 'center', paddingVertical: HORIZONTAL_MARGIN }}
                  ItemSeparatorComponent={this.renderSeparator}
                  keyExtractor={this.keyExtractor}
                />
            )
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
