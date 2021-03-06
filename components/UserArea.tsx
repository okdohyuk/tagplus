import * as React from 'react';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Fire from '../Fire';

import EnrollButton from './EnrollButton';

import { Text, View } from './Themed';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainView = styled(View)`
	width: ${WIDTH}px;
	height: ${HEIGHT / 6}px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.1);
	flex-direction: row;
	flex-wrap: wrap;
`;

const ImageWarp = styled.View`
	height: 100%;
	margin-left: 20px;
	justify-content: center;
`;

const Btnfix = styled.View``;

const Image = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 50px;

	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.3);
`;

const ImageModBtn = styled.TouchableOpacity`
	width: 30px;
	height: 30px;
	align-items: center;
	justify-content: center;
	background-color: white;
	padding: 1px;
	border-radius: 50px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.3);
	position: absolute;
	bottom: -5px;
	right: -5px;
`;

const NameWarp = styled.View`
	height: 100%;
	margin-left: 20px;
	justify-content: center;
`;

const Name = styled(Text)`
	font-size: 25px;
	font-weight: bold;
	line-height: 30px;
`;

const NameUnderLine = styled.View`
	border-bottom-color: #2fcc71;
	border-bottom-width: 2px;
`;

const iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

export default class UserArea extends React.Component {
	state = {
		user: {},
	};

	unsubscribe = null;

	componentDidMount() {
		const user = this.props.uid || Fire.shared.uid;

		this.unsubscribe = Fire.shared.firestore
			.collection('users')
			.doc(user)
			.onSnapshot((doc) => {
				this.setState({ user: doc.data() });
			});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<MainView>
				<ImageWarp>
					<Btnfix>
						<Image
							source={
								this.state.user.avatar
									? { uri: this.state.user.avatar }
									: require('../assets/images/default_profile.jpg')
							}
						/>
						<ImageModBtn>
							<Ionicons
								name={`${iconName}settings`}
								// color={ButtonColor}
								size={25}
							/>
						</ImageModBtn>
					</Btnfix>
				</ImageWarp>
				<NameWarp>
					<NameUnderLine>
						<Name>{this.state.user.name}</Name>
					</NameUnderLine>
				</NameWarp>
				<EnrollButton />
			</MainView>
		);
	}
}
