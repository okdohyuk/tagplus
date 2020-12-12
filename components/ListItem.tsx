import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Text, View } from './Themed';

const MainView = styled(View)`
	height: 70px;
	margin: 0 20px 20px 20px;
	border-radius: 20px;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.1);
	overflow: visible;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const ImageWarp = styled.View`
	height: 100%;
	margin-left: 20px;
	justify-content: center;
`;

const Image = styled.Image`
	width: 50px;
	height: 50px;
`;

const TextWarp = styled.View`
	height: 100%;
	margin-left: 10px;
	justify-content: center;
`;

const Title = styled(Text)`
	margin-bottom: 5px;
	font-size: 20px;
`;

const Tag = styled(Text)`
	font-size: 15px;
`;

export default function ListItem({ title, text, tag, image, file }: any) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Detail', { title, text, tag, image, file })}
		>
			<MainView>
				<ImageWarp>
					<Image source={{ uri: image }} />
				</ImageWarp>
				<TextWarp>
					<Title>{title}</Title>
					<Tag>{tag}</Tag>
				</TextWarp>
			</MainView>
		</TouchableOpacity>
	);
}
