import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
 Container, Content, Footer, FooterTab, Button, Text, Icon
} from 'native-base';
import { TabNavigator } from 'react-navigation';
import BottomNavigation, { FullTab, ShiftingTab } from 'react-native-material-bottom-navigation';

import { LightPrimary, DarkPrimary } from '../constants/Colors';
import Search from '../screens/Main/Search';
import Explore from '../screens/Main/Explore';
import Profile from '../screens/Main/Profile';

export default class MainTabs extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 1 };
    }

    tabs = [
        {
            key: 0,
            icon: 'ios-search',
            label: 'Search',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          },
          {
            key: 1,
            icon: 'compass',
            label: 'Explore',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          },
          {
            key: 2,
            icon: 'person',
            label: 'Profile',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          }
    ];

    switchScreen(index) {
        this.setState({ activeIndex: index });
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon active={isActive} color="white" name={icon} />
    );

    renderTab = ({ tab, isActive }) => (
        <FullTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          renderIcon={this.renderIcon(tab.icon)}
        />
    );

    render() {
        let AppComponent = null;
        const { activeIndex } = this.state;
        if (activeIndex === 0) {
            AppComponent = Search;
        } else if (activeIndex === 1) {
            AppComponent = Explore;
        } else {
            console.log(activeIndex);
            AppComponent = Profile;
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <AppComponent />
                </View>
                <BottomNavigation
                  onTabPress={newTab => this.switchScreen(newTab.key)}
                  renderTab={this.renderTab}
                  tabs={this.tabs}
                />
            </View>
        );
    }
}

// export default class MainTabScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { index: 1 };
//     }

//     switchScreen(index) {
//         this.setState({ index });
//     }

//     render() {
//         let AppComponent = null;
//         const { index } = this.state;
//         if (index === 0) {
//             AppComponent = Search;
//         } else if (index === 1) {
//             AppComponent = Explore;
//         } else {
//             AppComponent = Profile;
//         }

//         const { activeTab, deactiveTab } = styles;

//         return (
//             <Container>
//                 <Content>
//                     <AppComponent />
//                 </Content>
//                 <Footer>
//                     <FooterTab>
//                         <Button
//                           vertical
//                           active={index === 0}
//                           onPress={() => this.switchScreen(0)}
//                           style={index === 0 ? activeTab : deactiveTab}
//                         >
//                             <Icon active name="ios-search" />
//                             <Text>Search</Text>
//                         </Button>
//                         <Button
//                           vertical
//                           active={index === 1}
//                           onPress={() => this.switchScreen(1)}
//                           style={index === 1 ? activeTab : deactiveTab}
//                         >
//                             <Icon active name="compass" />
//                             <Text>Explore</Text>
//                         </Button>
//                         <Button
//                           vertical
//                           active={index === 2}
//                           onPress={() => this.switchScreen(2)}
//                           style={index === 2 ? activeTab : deactiveTab}
//                         >
//                             <Icon active name="person" />
//                             <Text>Profile</Text>
//                         </Button>
//                     </FooterTab>
//                 </Footer>
//             </Container>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     activeTab: {
//         backgroundColor: LightPrimary
//     },
//     deactiveTab: {
//         backgroundColor: DarkPrimary
//     }
// });
