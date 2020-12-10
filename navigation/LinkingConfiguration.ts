import * as Linking from 'expo-linking';

export default {
	prefixes: [Linking.makeUrl('/')],
	config: {
		screens: {
			Auth: {
				screens: {
					SignIn: 'signin',
					SignUp: 'signup',
				},
			},
			Main: 'main',
			Settings: 'settings',
			UpLoad: 'upload',
			Detail: 'Detail',
			NotFound: '*',
		},
	},
};
