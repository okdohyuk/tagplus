import React from 'react';
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

export default function ListItem({ title, tag }: any) {
	return (
		<MainView>
			<ImageWarp>
				<Image source={require('../assets/images/default_file.png')} />
			</ImageWarp>
			<TextWarp>
				<Title>{title}</Title>
				<Tag>{tag}</Tag>
			</TextWarp>
		</MainView>
	);
}
