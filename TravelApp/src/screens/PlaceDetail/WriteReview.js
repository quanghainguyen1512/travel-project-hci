import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Container, Content, List, ListItem, Text, ActionSheet, Item,
    Input, Textarea, Button, Icon, DatePicker, Left, Right, Root, Body, Header, Title
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import { DEVICE_HEIGHT, HORIZONTAL_MARGIN } from '../../constants/Layout';

const BUTTONS = [
    'Solo',
    'Business',
    'Couples',
    'Friends',
    'Family with teenagers',
    'Family with young children',
    'Cancel'
];

const CANCEL_INDEX = 6;

export default class WriteReview extends Component {
    constructor(props) {
        super(props);
        this.state = { typeofvisit: 'Select type' };
    }

    // setDate(newDate) {
    //     this.setState({ chosenDate: newDate });
    // }

    handleActionSheet = () => {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: 'Type of visit'
            },
            (buttonIndex) => {
                this.setState({ typeofvisit: BUTTONS[buttonIndex] });
            }
        );
    }

    render() {
        const { navigation } = this.props;
        const { typeofvisit } = this.state;
        const {
            ratingContainer, form, submit, uploadPhoto,
            listitem
        } = styles;
        return (
            <Root style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        {/* <H3 style={{ color: 'white' }}>Bitexco Financial Tower</H3> */}
                        <Title>Bitexco Financial Tower</Title>
                    </Body>
                </Header>
                {/* <View style={{ flex: 1, flexDirection: 'column' }}> */}
                    <View style={{ flex: 1 }}>
                        <View style={ratingContainer}>
                            <AirbnbRating />
                        </View>
                        <View style={form}>
                            <List style={{ marginRight: HORIZONTAL_MARGIN }}>
                                <ListItem>
                                    <TouchableOpacity
                                      style={listitem}
                                    >
                                        <Text>Date visited:</Text>
                                        {/* <Text>
                                            {chosenDate.toString().substr(4, 12)}
                                        </Text> */}
                                        <DatePicker
                                        //   onDateChange={this.setDate}
                                          locale="en"
                                          timeZoneOffsetInMinutes={undefined}
                                          androidMode="default"
                                          animationType="fade"
                                          placeHolderText="Select date"
                                          disabled={false}
                                          modalTransparent={false}
                                          isVisible
                                          defaultDate={new Date()}
                                          maximumDate={new Date()}
                                          minimumDate={new Date(2018, 1, 1)}
                                        />
                                    </TouchableOpacity>
                                </ListItem>
                                <ListItem>
                                    <TouchableOpacity
                                      onPress={this.handleActionSheet}
                                      style={listitem}
                                    >
                                        <Text>Type of visit:</Text>
                                        <Text style={{ textAlign: 'right' }}>{typeofvisit}</Text>
                                    </TouchableOpacity>
                                    {/* <Left>
                                    </Left>
                                    <Right>
                                    </Right> */}
                                </ListItem>
                            </List>
                            <View style={{ paddingHorizontal: HORIZONTAL_MARGIN - 1 }}>
                                <Item>
                                    <Input placeholder="Title" />
                                </Item>
                                <Item>
                                    <Textarea rowSpan={5} placeholder="Write your review here" maxLength={200} />
                                </Item>
                            </View>
                        </View>
                        <View style={uploadPhoto}>
                            <Button large style={{ alignSelf: 'center', justifyContent: 'center', aspectRatio: 1 }}>
                                <Icon name="add" />
                            </Button>
                        </View>
                        <TouchableOpacity style={submit}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>SUBMIT</Text>
                        </TouchableOpacity>
                        {/* <Button
                        style={{ alignSelf: 'stretch' }}
                        >
                            <Text style={{ textAlign: 'center', alignSelf: 'stretch' }}>Submit</Text>
                        </Button> */}
                    </View>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ratingContainer: {
        // height: DEVICE_HEIGHT * 0.25,
        flex: 2,
        backgroundColor: 'lightgray',
        paddingVertical: 5
    },
    form: {
        flex: 6
    },
    uploadPhoto: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        marginVertical: 5,
        alignItems: 'center',
        paddingHorizontal: HORIZONTAL_MARGIN
    },
    submit: {
        // height: DEVICE_HEIGHT * 0.1,
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    }
});
