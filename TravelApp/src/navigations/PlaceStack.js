import { createStackNavigator } from 'react-navigation';
import PlaceDetail from '../screens/PlaceDetail/PlaceDetail';
import WriteReview from '../screens/PlaceDetail/WriteReview';
import ArticleDetail from '../screens/Others/ArticleDetail';
// import MoreReviews from '../screens/PlaceDetail/MoreReviews';

const PlaceStack = createStackNavigator(
    {
        PlaceDetail: { screen: PlaceDetail },
        WriteReview: { screen: WriteReview },
        ArticleDetail: { screen: ArticleDetail }
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
