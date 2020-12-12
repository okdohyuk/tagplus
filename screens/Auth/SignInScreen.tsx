import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import firebase from 'firebase';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

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
	top: ${HEIGHT / 7}px;
	background-color: white;
	width: 150px;
	height: 150px;
`;

const TextInput = styled.TextInput`
	width: 300px;
	height: 40px;
	border: solid 2px white;
	border-bottom-color: #f33328;
	margin: 10px 0 10px 0;
	font-size: 20px;
`;

const BtnWarp = styled.View`
	position: absolute;
	bottom: 30px;
`;

const LoginBtn = styled.TouchableOpacity`
	background-color: #f33328;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 50px;
	border-radius: 50px;
`;

const LoginBtnText = styled.Text`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;

const RegisterBtn = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 50px;
	border-radius: 50px;
`;

const RegisterBtnText = styled.Text`
	color: #0000008d;
	font-size: 15px;
`;

interface Props {
	navigation: any;
}

export default class SignInScreen extends React.Component<Props> {
	state = {
		email: '',
		password: '',
		errorMessage: null,
	};

	handleLogin = () => {
		const { email, password } = this.state;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((error) => this.setState({ errorMessage: error.message }));
	};
	render() {
		return (
			<MainWarp>
				<Image source={require('../../assets/images/icon.png')} />
				<ErrorView>
					{this.state.errorMessage && <ErrorText>{this.state.errorMessage}</ErrorText>}
				</ErrorView>
				<TextInput
					placeholder="이메일"
					autoCapitalize="none"
					value={this.state.email}
					onChangeText={(email: any) => this.setState({ email })}
				/>
				<TextInput
					placeholder="비밀번호"
					secureTextEntry={true}
					autoCapitalize="none"
					value={this.state.password}
					onChangeText={(password: any) => this.setState({ password })}
				/>
				<BtnWarp>
					<LoginBtn onPress={this.handleLogin}>
						<LoginBtnText>로그인</LoginBtnText>
					</LoginBtn>
					<RegisterBtn onPress={() => this.props.navigation.navigate('SignUp')}>
						<RegisterBtnText>회원가입</RegisterBtnText>
					</RegisterBtn>
				</BtnWarp>
				<StatusBar barStyle={'dark-content'} />
			</MainWarp>
		);
	}
}
