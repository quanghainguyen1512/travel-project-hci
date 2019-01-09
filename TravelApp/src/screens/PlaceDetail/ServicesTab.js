import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
 Container, Content, List, ListItem, Left, Thumbnail, Body, Text 
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';

export default class ServicesTab extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <Left>
                            <Thumbnail small />
                        </Left>
                        <Body>
                            <Text>Bitexco Financial Tower - Saigon Skydeck</Text>
                            <AirbnbRating
                              showRating={false}
                              ratingColor="#3498db"
                              ratingBackgroundColor="#c8c7c8"
                              ratingCount={5}
                              isDisabled
                              size={15}
                              defaultRating={4}
                            />
                        </Body>
                    </ListItem>
                    <Text>Book in Advance</Text>
                    <List>
                        
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});
