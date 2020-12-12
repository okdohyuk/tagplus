import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const View = styled.View``;

const BtnWrap = styled.View`
	width: ${WIDTH}px;
	position: absolute;
	bottom: 20px;
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	flex-wrap: wrap;
`;

const SaveBtn = styled.TouchableOpacity`
	width: 45%;
	height: 50px;
	background-color: #2fcc71;

	justify-content: center;
	align-items: center;
	border-radius: 30px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const SaveBtnText = styled.Text`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;

const ShareBtn = styled.TouchableOpacity`
	width: 45%;
	height: 50px;
	background-color: white;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const BtnTextWrap = styled.View`
  margin: 10px 0 10px 0;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
`;

const ShareBtnText = styled.Text`
	color: #2fcc71;
	font-size: 20px;
	font-weight: bold;
`;

const ContentIcon = styled(Ionicons)`
  width: 30px;
  padding: 5px;
	margin-right: 20px;
  margin-left: 20px;
`;

const Icon = styled(Ionicons)`
	margin-right: 10px;
`;

const EXView = styled.View`
	margin: 20px;
	height: 150px;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	border-radius: 20px;
	background-color: white;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const ContentsView = styled.View`
	margin: 20px;
	height: 200px;
	align-items: center;
	border-radius: 20px;
	background-color: white;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const ImageWrap = styled.View`
	width: 120px;
	height: 100%;
	justify-content: center;
`;

const Image = styled.Image`
	width: 120px;
	height: 120px;
`;

const TextWrap = styled.View`
	width: 120px;
	height: 100%;
	overflow: hidden;
`;

const Title = styled.Text`
	margin-top: 20px;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: bold;
`;

const Content = styled.Text``;

const ContentsWrap = styled.View`
	width: 100%;
	justify-content: center;
`;

const ContentsText = styled.Text`
	margin-top: 10px;
	font-size: 17px;
	text-align: center;
`;

export default function DetailScreen({
	route: {
		params: { title, text, tag, image, file },
	},
}: any) {
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<EXView>
				<ImageWrap>
					<Image source={{ uri: image }} />
				</ImageWrap>
				<TextWrap>
					<Title>{title}</Title>
					<Content>{text}</Content>
				</TextWrap>
			</EXView>
			<ContentsView>
				<ContentsWrap>
					<BtnTextWrap>
						<ContentIcon name="md-photos" size={30} color="black" />
						<ContentsText>IMG_0534.PNG</ContentsText>
					</BtnTextWrap>
				</ContentsWrap>

				<ContentsWrap>
					<BtnTextWrap>
						<ContentIcon name="md-attach" size={30} color="black" />
						<ContentsText>수학학습지.pdf</ContentsText>
					</BtnTextWrap>
				</ContentsWrap>
			</ContentsView>
			<BtnWrap>
				<SaveBtn>
					<BtnTextWrap>
						<Icon name="ios-save" size={24} color="white" />
						<SaveBtnText>오프라인 저장</SaveBtnText>
					</BtnTextWrap>
				</SaveBtn>
				<ShareBtn>
					<BtnTextWrap>
						<Icon name="md-share" size={24} color="#2fcc71" />
						<ShareBtnText>공유하기</ShareBtnText>
					</BtnTextWrap>
				</ShareBtn>
			</BtnWrap>
		</View>
	);
}
