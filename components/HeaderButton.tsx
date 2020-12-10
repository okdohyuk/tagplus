import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ButtonColor } from '../components/Themed';

export default function Pin() {
	const navigation = useNavigation();
	const iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
			<Ionicons
				name={`${iconName}settings`}
				// color={ButtonColor}
				size={30}
				style={{ marginRight: 10 }}
			/>
		</TouchableOpacity>
	);
}
