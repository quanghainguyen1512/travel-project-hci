import React from 'react';
import { Text } from 'native-base';

const MyText = (props) => {
    const { children, type, style } = props;
    let font = 'AvenirLTStd-Roman';
    if (type === 'black') font = 'AvenirLTStd-Black';
    else if (type === 'book') font = 'AvenirLTStd-Book';
    else font = 'AvenirLTStd-Roman';
    return (
        <Text {...props} style={[style, { fontFamily: font }]}>{children}</Text>
    );
};

export default MyText;
