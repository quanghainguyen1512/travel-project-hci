import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import * as Progress from 'react-native-progress';
import { MAIN_COLOR } from '../constants/Colors';
import { DEVICE_WIDTH } from '../constants/Layout';

const ReviewBar = (props) => {
    const { title, value, total } = props;
    const { container, titletxt, valuetxt } = styles;
    return (
        <View style={container}>
            <Text note style={titletxt}>{title}</Text>
            <Progress.Bar
              progress={value / total}
            //   style={{ marginLeft: 'auto' }}
              color={MAIN_COLOR}
              borderRadius={2}
              height={13}
              width={DEVICE_WIDTH * 0.6}
            />
            <Text note style={valuetxt}>{value}</Text>
        </View>
    );
};

export default ReviewBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginVertical: 5
    },
    titletxt: {
        flex: 2,
        textAlign: 'left',
        alignSelf: 'stretch'
    },
    valuetxt: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'stretch'
    }
});
