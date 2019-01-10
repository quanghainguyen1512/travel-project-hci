import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { MAIN_COLOR } from '../constants/Colors';
import MyText from './MyText';

export default class FilterCountryItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isSelected: false };
    }

    render() {
        const { cate, style } = this.props;
        const { isSelected } = this.state;
        return (
            <TouchableOpacity
              style={[
                style,
                {
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    backgroundColor: isSelected ? MAIN_COLOR : 'white'
                }
              ]}
              activeOpacity={1}
              onPress={() => this.setState({ isSelected: !isSelected })}
            >
                <MyText style={{ color: isSelected ? 'white' : 'black', fontSize: 13 }}>{cate}</MyText>
            </TouchableOpacity>
        );
    }
}
