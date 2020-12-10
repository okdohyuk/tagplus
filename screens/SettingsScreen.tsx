import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const MainWarp = styled.ScrollView`
	flex: 1;
`;

const SettingView = styled.View`
	margin-top: 10px;
	flex-direction: row;
	flex-wrap: wrap;
	background-color: white;
	border-bottom-color: rgb(230, 230, 230);
	border-bottom-width: 1px;
	box-shadow: rgb(230, 230, 230) 0px 0px 0px;
`;

const SettingBtn = styled.TouchableOpacity`
	width: 100%;
	padding: 15px;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
`;

const SettingIcons = styled(Ionicons)`
	height: 100%;
`;

const SettingText = styled.Text`
	height: 100%;
	margin-left: 20px;
	font-weight: 900;
	font-size: 15px;
`;

const iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

export default class SettingScreen extends React.Component {
	render() {
		return (
			<MainWarp>
				<SettingView>
					<SettingBtn onPress={() => {}}>
						<SettingIcons name={`${iconName}log-out`} size={26} />
						<SettingText>로그아웃</SettingText>
					</SettingBtn>
				</SettingView>
			</MainWarp>
		);
	}
}
