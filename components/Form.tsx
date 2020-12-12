import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import DialogInput from 'react-native-dialog-input';
import { Dimensions, Platform } from 'react-native';
import Fire from '../Fire';

const firebase = require('firebase');
require('firebase/firestore');

import { Text, View } from './Themed';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const SafeView = styled.ScrollView``;

const FormWrap = styled(View)`
	width: ${WIDTH}px;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const Btns = styled.View`
	margin-top: 20px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const BtnView = styled.View``;

const BtnText = styled(Text)`
	text-align: center;
	font-size: 17px;
	margin-bottom: 20px;
`;

const ImgBtn = styled.TouchableOpacity`
	width: 85px;
	height: 85px;
	margin-top: 7px;
	background-color: white;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;

const Image = styled.Image`
	position: absolute;
	width: 100px;
	height: 100px;
	border-radius: 50px;
`;

const NFCBtn = styled.TouchableOpacity`
	width: 100px;
	height: 100px;
	background-color: #2fcc71;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;

const FileBtn = styled.TouchableOpacity`
	width: 85px;
	height: 85px;
	margin-top: 7px;
	background-color: white;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.2);
`;

const Inputs = styled.View`
	margin-top: 20px;
	justify-content: space-around;
`;

const TitleInput = styled.TextInput`
	height: 40px;
	margin: 20px 10px 20px 10px;
	padding: 8px;
	border: solid 1px #5e5e5e;
	border-radius: 5px;
	font-size: 13px;
`;

const ExInput = styled.TextInput`
	height: 100px;
	margin: 0 10px 0 10px;
	padding: 8px;
	border: solid 1px #5e5e5e;
	border-radius: 5px;
	font-size: 13px;
`;

const TagInput = styled.TextInput`
	height: 40px;
	margin: 20px 10px 20px 10px;
	padding: 8px;
	border: solid 1px #5e5e5e;
	border-radius: 5px;
	font-size: 13px;
`;

const SubmitBtn = styled.TouchableOpacity`
	width: 300px;
	height: 50px;
	margin: 0 10% 0 10%;
	background-color: #2fcc71;
	position: absolute;
	bottom: 20px;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const SubmitBtnText = styled.Text`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;

const SaveIcon = styled(Ionicons)`
	position: absolute;
	left: 50px;
`;

const ContentsView = styled(View)`
	margin: 20px;
	height: 150px;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	border-radius: 20px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.5);
`;

const ContentsWrap = styled(View)`
	height: 100%;
	justify-content: center;
`;

const ContentsText = styled(Text)`
	margin-top: 10px;
	font-size: 17px;
	text-align: center;
`;

interface Props {
	navigation: any;
}

export default class Form extends React.Component<Props> {
	state = {
		isDialogVisible: false,
		title: '',
		nfcuid: '',
		text: '',
		tag: '',
		image: null,
		file: null,
	};

	handlePost = () => {
		Fire.shared
			.addPost({
				title: this.state.title,
				nfcuid: this.state.nfcuid,
				text: this.state.text,
				tag: this.state.tag,
				localUri: this.state.image,
				localFileUri: this.state.file,
			})
			.then((ref) => {
				this.setState({
					title: '',
					nfcuid: '',
					text: '',
					tag: '',
					image: null,
					file: null,
				});
				this.props.navigation.goBack();
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			});
	};

	pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
		});

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};

	pickDocument = async () => {
		let result = await DocumentPicker.getDocumentAsync({});

		if (!result.cancelled) {
			this.setState({ file: result.uri });
		}
	};

	showDialog(isShow: any) {
		this.setState({ isDialogVisible: isShow });
	}

	sendInput(inputText: any) {
		console.log('sendInput (DialogInput#1): ' + inputText);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<SafeView scrollEnabled={false}>
					<FormWrap>
						<Btns>
							<BtnView>
								<BtnText>대표 사진</BtnText>
								<ImgBtn onPress={this.pickImage}>
									<Ionicons name="ios-add" size={50} color="#2fcc71" />
								</ImgBtn>
							</BtnView>
							<BtnView>
								<BtnText>NFC 등록</BtnText>
								<DialogInput
									isDialogVisible={this.state.isDialogVisible}
									title={'NFC 번호 입력'}
									submitInput={(inputText: any) => {
										this.setState({ nfcuid: inputText });
									}}
									closeDialog={() => {
										this.showDialog(false);
									}}
								/>
								<NFCBtn
									onPress={() => {
										this.showDialog(true);
									}}
								>
									<MaterialCommunityIcons name="nfc" size={50} color="white" />
								</NFCBtn>
							</BtnView>
							<BtnView>
								<BtnText>파일 업로드</BtnText>
								<FileBtn onPress={this.pickDocument}>
									<Ionicons name="ios-attach" size={50} color="black"></Ionicons>
								</FileBtn>
							</BtnView>
						</Btns>
						<Inputs>
							<TitleInput
								placeholder="자료의 제목을 입력해주세요."
								placeholderTextColor="#646464"
								value={this.state.title}
								onChangeText={(title: any) => this.setState({ title })}
								returnKeyType="done"
								underlineColorAndroid="transparent"
							/>
							<ExInput
								placeholder="자료의 설명을 기재해주세요."
								placeholderTextColor="#646464"
								underlineColorAndroid="transparent"
								value={this.state.text}
								onChangeText={(text: any) => this.setState({ text })}
								multiline
							/>
							<TagInput
								placeholder="#태그를 입력해주세요."
								placeholderTextColor="#646464"
								value={this.state.tag}
								onChangeText={(tag: any) => this.setState({ tag })}
								returnKeyType="done"
								underlineColorAndroid="transparent"
							/>
						</Inputs>
					</FormWrap>
					<ContentsView>
						<ContentsWrap>
							<Ionicons name="md-photos" size={60} color="black" />
							<ContentsText>{this.state.image ? '1' : '0'} 개</ContentsText>
						</ContentsWrap>
						<ContentsWrap>
							<Ionicons name="md-attach" size={60} color="black" />
							<ContentsText>{this.state.file ? '1' : '0'} 개</ContentsText>
						</ContentsWrap>
					</ContentsView>
				</SafeView>
				<SubmitBtn onPress={this.handlePost}>
					<SaveIcon name="ios-save" size={24} color="white" />
					<SubmitBtnText>자료 등록하기</SubmitBtnText>
				</SubmitBtn>
				<KeyboardAccessoryNavigation
					nextFocusDisabled={false}
					previousFocusDisabled={false}
					nextHidden={true}
					previousHidden={true}
					avoidKeyboard={true}
					androidAdjustResize
					multiline={true}
				/>
			</View>
		);
	}
}
