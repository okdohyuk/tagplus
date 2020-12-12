import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Auth/LoadingScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }: any) => (
	<RootStack.Navigator headerMode="none">
		<RootStack.Screen name="SignInScreen" component={SignInScreen} />
		<RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
		<RootStack.Screen name="SplashScreen" component={SplashScreen} />
	</RootStack.Navigator>
);

export default RootStackScreen;
