import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainTabs from './MainTabs';
import CityStack from './CityStack';
import PlaceStack from './PlaceStack';
import Vietnam from '../screens/Others/Vietnam';

const AppStack = createStackNavigator(
    {
        MainTabs: { screen: MainTabs },
        CityStack: { screen: CityStack },
        PlaceStack: { screen: PlaceStack },
        Vietnam: { screen: Vietnam }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        mode: 'modal',
        initialRouteName: 'MainTabs'
        // transitionConfig: () => ({
        //     transitionSpec: {
        //         duration: 300,
        //         easing: Easing.out(Easing.poly(4)),
        //         timing: Animated.timing,
        //     },
        //     screenInterpolator: (sceneProps) => {
        //         const { layout, position, scene } = sceneProps;
        //         const { index } = scene;

        //         const height = layout.initHeight;
        //         const translateY = position.interpolate({
        //             inputRange: [index - 1, index, index + 1],
        //             outputRange: [height, 0, 0],
        //         });

        //         const opacity = position.interpolate({
        //             inputRange: [index - 1, index - 0.99, index],
        //             outputRange: [0, 1, 1],
        //         });

        //         return { opacity, transform: [{ translateY }] };
        //     }
        // })
    }
);

export default createAppContainer(AppStack);
