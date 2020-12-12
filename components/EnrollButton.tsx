import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonColor } from './Themed';
import { Text, View } from './Themed';

const UpLoadBtn = styled.TouchableOpacity`
	position: absolute;
	bottom: 10px;
	right: 10px;
`;

const BtnView = styled(View)`
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 5px;
	border-radius: 20px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.3);
`;

const BtnText = styled(Text)`
	text-align: left;
`;

const Icon = styled(MaterialCommunityIcons)``;

export default function Pin() {
	const navigation = useNavigation();
	return (
		<UpLoadBtn onPress={() => navigation.navigate('UpLoad')}>
			<BtnView>
				<BtnText>NFC 등록하기</BtnText>
				<Icon name="nfc" size={15} color="black" />
			</BtnView>
		</UpLoadBtn>
	);
}
