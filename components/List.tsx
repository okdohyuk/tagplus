import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ListItem from './ListItem';
import firebase from 'firebase';
import 'firebase/firestore';

const FlatList = styled.FlatList`
	width: 100%;
	height: 100%;
	padding-top: 20px;
`;

export default function List() {
	const [loading, setLoading] = useState(true); // Set loading to true on component mount
	const [users, setUsers] = useState([]); // Initial empty array of users

	useEffect(() => {
		const subscriber = firebase
			.firestore()
			.collection('posts')
			.onSnapshot((querySnapshot) => {
				const users: any = [];

				querySnapshot.forEach((documentSnapshot) => {
					users.push({
						...documentSnapshot.data(),
						key: documentSnapshot.id,
					});
				});

				setUsers(users);
				setLoading(false);
			});

		// Unsubscribe from events when no longer in use
		return () => subscriber();
	}, []);

	const renderItem = (post: any) => <ListItem {...post} />;

	return (
		<FlatList
			data={users}
			renderItem={({ item }: any) => renderItem(item)}
			keyExtractor={(item: any) => item.title}
		/>
	);
}
