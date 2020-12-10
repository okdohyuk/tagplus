import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import UserArea from '../components/UserArea';
import NFCButton from '../components/NFCButton';
import List from '../components/List';
import { Text, View } from '../components/Themed';

export default function MainScreen() {
	return (
		<View style={styles.container}>
			<UserArea />
			<List />
			<NFCButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
