import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import BottomNavigation, { ShiftingTab, Badge } from 'react-native-material-bottom-navigation';

import Search from '../screens/Main/Search';
import Explore from '../screens/Main/Explore';
import Profile from '../screens/Main/Profile';
import Activity from '../screens/Main/Activity';

export default class MainTabs extends Component {
    tabs = [
        {
            key: 0,
            icon: 'ios-search',
            type: 'Ionicons',
            label: 'Search',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount: 0
        },
        {
            key: 1,
            icon: 'compass',
            type: 'MaterialCommunityIcons',
            label: 'Explore',
            barColor: '#436fa8',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount: 0
        },
        {
            key: 2,
            icon: 'bell',
            type: 'Entypo',
            label: 'Activity',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount: 12
        },
        {
            key: 3,
            icon: 'person',
            type: 'MaterialIcons',
            label: 'Profile',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount: 0
        }
    ];

    constructor(props) {
        super(props);
        this.state = { activeIndex: 1 };
    }

    switchScreen(index) {
        this.setState({ activeIndex: index });
    }

    renderIcon = ({ icon, type }) => ({ isActive }) => (
        <Icon active={isActive} style={{ color: 'white' }} name={icon} type={type} />
    );

    renderBadge = badgeCount => () => <Badge>{badgeCount}</Badge>

    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          labelStyle={{ fontFamily: 'AvenirLTStd-Roman' }}
          renderIcon={this.renderIcon(tab)}
          showBadge={tab.badgeCount > 0}
          renderBadge={this.renderBadge(tab.badgeCount)}
        />
    );

    render() {
        const { navigation } = this.props;

        let AppComponent = Explore;
        const { activeIndex } = this.state;
        if (activeIndex === 0) {
            AppComponent = Search;
        } else if (activeIndex === 1) {
            AppComponent = Explore;
        } else if (activeIndex === 2) {
            AppComponent = Activity;
        } else {
            AppComponent = Profile;
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <AppComponent navigation={navigation} />
                </View>
                <BottomNavigation
                  onTabPress={newTab => this.switchScreen(newTab.key)}
                  renderTab={this.renderTab}
                  tabs={this.tabs}
                  activeTab={activeIndex}
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
