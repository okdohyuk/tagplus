import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Navigation from './navigation';
import SignInScreen from './screens/Auth/SignInScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import LoadingScreen from './screens/Auth/LoadingScreen';

import firebase from 'firebase';
import { decode, encode } from 'base-64';

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

const firebaseConfig = {
	apiKey: 'AIzaSyAg6TStOAMMV5kEFSnoQlO42ox8H7JNgRU',
	authDomain: 'tagplus-5e0c2.firebaseapp.com',
	projectId: 'tagplus-5e0c2',
	storageBucket: 'tagplus-5e0c2.appspot.com',
	messagingSenderId: '1071190736096',
	appId: '1:1071190736096:web:cfa79dc924bc0df191a485',
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const AppStack = createStackNavigator(
	{
		Home: {
			screen: Navigation,
		},
	},
	{
		headerMode: 'none',
		navigationOptions: {
			header: null,
		},
	},
);

const AuthStack = createStackNavigator(
	{
		SignIn: SignInScreen,
		SignUp: SignUpScreen,
	},
	{
		headerMode: 'none',
		navigationOptions: {
			header: null,
		},
	},
);

export default createAppContainer(
	createSwitchNavigator(
		{
			Loading: LoadingScreen,
			App: AppStack,
			Auth: AuthStack,
		},
		{
			initialRouteName: 'Loading',
		},
	),
);
