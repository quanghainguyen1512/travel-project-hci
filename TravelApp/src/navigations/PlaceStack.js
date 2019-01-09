import { createStackNavigator } from 'react-navigation';
import PlaceDetail from '../screens/PlaceDetail/PlaceDetail';
import WriteReview from '../screens/PlaceDetail/WriteReview';
import MoreReviews from '../screens/PlaceDetail/MoreReviews';
import ReviewsTab from '../screens/PlaceDetail/ReviewsTab';

const PlaceStack = createStackNavigator(
    {
        PlaceDetail: { screen: PlaceDetail },
        WriteReview: { screen: WriteReview },
        MoreReviews: { screen: MoreReviews },
        // ReviewsTab: { screen: ReviewsTab }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        mode: 'modal',
        initialRouteName: 'PlaceDetail'
    }
);

export default PlaceStack;
