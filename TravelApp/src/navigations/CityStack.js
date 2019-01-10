import { createStackNavigator } from 'react-navigation';
import CityDetail from '../screens/CityDetail/CityDetail';
import AboutCity from '../screens/CityDetail/AboutCity';
// import See from '../screens/CityDetail/See';
import PlaceStack from './PlaceStack';
import Vietnam from '../screens/Others/Vietnam';

const CityStack = createStackNavigator(
    {
        CityDetail: { screen: CityDetail },
        About: { screen: AboutCity },
        PlaceDetail: { screen: PlaceStack },
        Vietnam: { screen: Vietnam }
        // See: { screen: See }
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
