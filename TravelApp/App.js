import React from 'react';
import AppStack from './src/navigations/AppStack';
import SightSeeing from './src/screens/CityDetail/SightSeeing';

export default class App extends React.Component {
  render() {
    return (
      // <WriteReview />
      // <PlaceDetail />
      // <MainTabs />
      // <Profile />
      // <AppContainer />
      // <SightSeeing />
      <AppStack />
    );
  }
}
