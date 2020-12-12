import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UpLoadScreen from '../screens/UpLoadScreen';
import DetailScreen from '../screens/DetailScreen';

import HeaderButton from '../components/HeaderButton';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTintColor: '#000000',
				headerBackTitleVisible: false,
			}}
		>
			<Stack.Screen
				name="Main"
				component={MainScreen}
				options={{
					title: '',
					headerStyle: { shadowColor: 'transparent' },
					headerRight: () => <HeaderButton />,
				}}
			/>
			<Stack.Screen name="Settings" component={SettingsScreen} options={{ title: '설정' }} />
			<Stack.Screen name="UpLoad" component={UpLoadScreen} options={{ title: 'NFC & 자료 등록' }} />
			<Stack.Screen name="Detail" component={DetailScreen} options={{ title: '자료' }} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
		</Stack.Navigator>
	);
}
