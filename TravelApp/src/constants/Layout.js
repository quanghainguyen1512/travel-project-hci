import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
export const ASPECT_RATIO = width / height;

// export const HORIZONTAL_MARGIN = 15;
export const HORIZONTAL_MARGIN = width * 0.03;
export const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 50;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
