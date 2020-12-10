import React from 'react';
import styled from 'styled-components/native';

import ListItem from './ListItem';

const FlatList = styled.FlatList`
	width: 100%;
	height: 100%;
	padding-top: 20px;
`;

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: '통합과학',
		tag: '#과학',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: '수학 학습지',
		tag: '#수학',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: '수행평가과제',
		tag: '#수행평가',
	},
];

export default function List() {
	const renderItem = ({ item }: any) => <ListItem {...item} />;
	return (
		<FlatList
			data={DATA}
			renderItem={renderItem}
			keyExtractor={(item: any) => item.id}
		/>
	);
}
