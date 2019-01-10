import { createStackNavigator } from 'react-navigation';
import CityDetail from '../screens/CityDetail/CityDetail';
import AboutCity from '../screens/CityDetail/AboutCity';
import PlaceStack from './PlaceStack';
import Vietnam from '../screens/Others/Vietnam';
import SightSeeing from '../screens/CityDetail/SightSeeing';

const CityStack = createStackNavigator(
    {
        CityDetail: { screen: CityDetail },
        About: { screen: AboutCity },
        PlaceDetail: { screen: PlaceStack },
        Vietnam: { screen: Vietnam },
        Sightseeing: { screen: SightSeeing }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        mode: 'modal',
        initialRouteName: 'CityDetail'
    }
);

export default CityStack;
