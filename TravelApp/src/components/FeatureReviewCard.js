import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { MAIN_COLOR } from '../constants/Colors';
import { DEVICE_WIDTH } from '../constants/Layout';

const FeatureReviewCard = (props) => {
    const { text, reviewCount } = props;
    const { container, featureText } = styles;
    return (
        <TouchableOpacity style={container}>
            <Text style={featureText}>{`"${text}"`}</Text>
            <Text note>{`In ${reviewCount} reviews`}</Text>
        </TouchableOpacity>
    );
};

export default FeatureReviewCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'transparent',
        width: DEVICE_WIDTH * 0.35,
        justifyContent: 'center'
    },
    featureText: {
        flexWrap: 'wrap',
        color: MAIN_COLOR,
        textAlign: 'center'
    }
});
