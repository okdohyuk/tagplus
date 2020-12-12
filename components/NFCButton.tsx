import * as React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input';

const TouchableOpacity = styled.TouchableOpacity`
	padding: 10px;
	background-color: #2fcc71;
	border-radius: 50px;
	position: absolute;
	bottom: 40px;
	right: 20px;
`;

export default class NFCButton extends React.Component<{}, { isDialogVisible: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = {
			isDialogVisible: false,
		};
	}
	showDialog(isShow: any) {
		this.setState({ isDialogVisible: isShow });
	}
	sendInput(inputText: any) {
		console.log('sendInput (DialogInput#1): ' + inputText);
	}
	render() {
		return (
			<>
				<DialogInput
					isDialogVisible={this.state.isDialogVisible}
					title={'NFC 번호 입력'}
					submitInput={(inputText: any) => {
						this.sendInput(inputText);
					}}
					closeDialog={() => {
						this.showDialog(false);
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						this.showDialog(true);
					}}
					style={{ padding: 10 }}
				>
					<MaterialCommunityIcons name="nfc" size={50} color="white" />
				</TouchableOpacity>
			</>
		);
	}
}
