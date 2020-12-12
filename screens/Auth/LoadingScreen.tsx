import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import firebase from 'firebase';

import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

interface Props {
	navigation: any;
}

export default class LoadingScreen extends React.Component<Props> {
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			this.props.navigation.navigate(user ? 'App' : 'Auth');
		});
	}
	render() {
		return (
			<Container>
				<Text>Loading...</Text>
				<ActivityIndicator size="large"></ActivityIndicator>
			</Container>
		);
	}
}
