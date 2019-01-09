/** @format */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import DevMenuTrigger from './DevMenuTrigger';

// AppRegistry.registerComponent(appName, () => <DevMenuTrigger><App /></DevMenuTrigger>);
AppRegistry.registerComponent(appName, () => App);
