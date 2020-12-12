import React from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Fire from '../../Fire';
import UserPermissions from '../../utilities/UserPermissions';
import * as ImagePicker from 'expo-image-picker';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const TouchableOpacity = styled.TouchableOpacity`
	width: 100px;
	height: 100px;
	position: absolute;
	top: 50px;
	background-color: #e1e2e6;
	border-radius: 50px;
	margin-top: 48px;
	justify-content: center;
	align-items: center;
`;

const MainWarp = styled.View`
	background-color: white;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const ErrorView = styled.View`
	height: 40px;
	justify-content: center;
	align-items: center;
`;

const ErrorText = styled.Text`
	color: #e9446a;
	font-size: 13px;
	font-weight: 600;
	text-align: center;
`;

const Image = styled.Image`
	position: absolute;
	width: 100px;
	height: 100px;
	border-radius: 50px;
`;

const NameBloodWrap = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`;

const InputWrap = styled.View`
	width: 300px;
`;

const NameInput = styled.TextInput`
	width: 300px;
	height: 40px;
	border: solid 2px white;
	border-bottom-color: #f33328;
	margin-bottom: 20px;
	font-size: 20px;
`;

const TextInput = styled.TextInput`
	width: 300px;
	height: 40px;
	border: solid 2px white;
	border-bottom-color: #f33328;
	margin-bottom: 20px;
	font-size: 20px;
`;

const BtnWarp = styled.View`
	position: absolute;
	bottom: 30px;
`;

const RegisterBtn = styled.TouchableOpacity`
	width: 300px;
	height: 50px;
	margin-top: 80px;
	border-radius: 50px;
	background-color: #f33328;
	justify-content: center;
	align-items: center;
`;

const RegisterBtnText = styled.Text`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;

const LoginBtn = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 50px;
	border-radius: 50px;
`;

const LoginBtnText = styled.Text`
	color: #0000008d;
	font-size: 15px;
`;

export interface FormData {
	name: string;
	id: string;
	password: string;
	repassword: string;
}

interface Props {
	navigation: any;
}

export default class RegisterScreen extends React.Component<Props> {
	state = {
		user: {
			name: '',
			email: '',
			password: '',
			avatar: null,
		},
		errorMessage: null,
	};

	handlePickAvatar = async () => {
		UserPermissions.getCameraPermission();

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
		});

		if (!result.cancelled) {
			this.setState({ user: { ...this.state.user, avatar: result.uri } });
		}
	};

	handleSignUp = () => {
		Fire.shared.createUser(this.state.user);
	};

	render() {
		return (
			<MainWarp>
				<TouchableOpacity onPress={this.handlePickAvatar}>
					<Image source={{ uri: this.state.user.avatar }} />
					<Ionicons
						name="ios-add"
						size={40}
						color="#fff"
						style={{ marginTop: 6, marginLeft: 2 }}
					></Ionicons>
				</TouchableOpacity>
				<ErrorView>
					{this.state.errorMessage && <ErrorText>{this.state.errorMessage}</ErrorText>}
				</ErrorView>
				<InputWrap>
					<NameBloodWrap>
						<NameInput
							placeholder="이름"
							autoCapitalize="none"
							textContentType="name"
							value={this.state.user.name}
							onChangeText={(name: any) => this.setState({ user: { ...this.state.user, name } })}
						/>
					</NameBloodWrap>
					<TextInput
						placeholder="이메일"
						textContentType="emailAddress"
						keyboardType="email-address"
						autoCapitalize="none"
						value={this.state.user.email}
						onChangeText={(email: any) => this.setState({ user: { ...this.state.user, email } })}
					/>
					<TextInput
						placeholder="비밀번호"
						textContentType="password"
						autoCapitalize="none"
						secureTextEntry={true}
						value={this.state.user.password}
						onChangeText={(password: any) =>
							this.setState({ user: { ...this.state.user, password } })
						}
					/>
					{/* <TextInput 
        placeholder="비밀번호 확인"
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={this.state.repassword}
        onChange={(repassword: any) => this.setState({ repassword })} /> */}
				</InputWrap>
				<BtnWarp>
					<RegisterBtn onPress={this.handleSignUp}>
						<RegisterBtnText>회원가입</RegisterBtnText>
					</RegisterBtn>
					<LoginBtn onPress={() => this.props.navigation.navigate('SignIn')}>
						<LoginBtnText>로그인</LoginBtnText>
					</LoginBtn>
				</BtnWarp>
			</MainWarp>
		);
	}
}
