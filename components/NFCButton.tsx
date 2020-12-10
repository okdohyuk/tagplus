import * as React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TouchableOpacity = styled.TouchableOpacity`
	padding: 10px;
	background-color: #2fcc71;
	border-radius: 50px;
	position: absolute;
	bottom: 40px;
	right: 20px;
`;

export default function NFCButton() {
	return (
		<TouchableOpacity>
			<MaterialCommunityIcons name="nfc" size={50} color="white" />
		</TouchableOpacity>
	);
}
