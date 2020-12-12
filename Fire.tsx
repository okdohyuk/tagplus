import firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyAg6TStOAMMV5kEFSnoQlO42ox8H7JNgRU',
	authDomain: 'tagplus-5e0c2.firebaseapp.com',
	projectId: 'tagplus-5e0c2',
	storageBucket: 'tagplus-5e0c2.appspot.com',
	messagingSenderId: '1071190736096',
	appId: '1:1071190736096:web:cfa79dc924bc0df191a485',
};

class Fire {
	static shared: Fire;
	constructor() {
		firebase.initializeApp(firebaseConfig);
	}

	addPost = async ({ title, nfcuid, text, tag, localUri, localFileUri }: any) => {
		const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${this.uid}/${Date.now()}`);
		const remoteFileUri = await this.uploadFileAsync(
			localFileUri,
			`files/${this.uid}/${Date.now()}`,
		);

		return new Promise((res, rej) => {
			this.firestore
				.collection('posts')
				.add({
					title,
					nfcuid,
					text,
					tag,
					uid: this.uid,
					timestamp: this.timestamp,
					image: remoteUri,
					file: remoteFileUri,
				})
				.then((ref) => {
					res(ref);
				})
				.catch((error) => {
					rej(error);
				});
		});
	};

	uploadFileAsync = async (uri: any, filename: any) => {
		return new Promise(async (res, rej) => {
			const response = await fetch(uri);
			const file = await response.blob();

			let upload = firebase.storage().ref(filename).put(file);

			upload.on(
				'state_changed',
				(snapshot) => {},
				(err) => {
					rej(err);
				},
				async () => {
					const url = await upload.snapshot.ref.getDownloadURL();
					res(url);
				},
			);
		});
	};

	uploadPhotoAsync = async (uri: any, filename: any) => {
		return new Promise(async (res, rej) => {
			const response = await fetch(uri);
			const file = await response.blob();

			let upload = firebase.storage().ref(filename).put(file);

			upload.on(
				'state_changed',
				(snapshot) => {},
				(err) => {
					rej(err);
				},
				async () => {
					const url = await upload.snapshot.ref.getDownloadURL();
					res(url);
				},
			);
		});
	};

	createUser = async (user: any) => {
		let remoteUri = null;

		try {
			await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

			let db = this.firestore.collection('users').doc(this.uid);

			db.set({
				name: user.name,
				email: user.email,
				avatar: null,
			});

			if (user.avatar) {
				remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`);

				db.set({ avatar: remoteUri }, { merge: true });
			}
		} catch (error) {
			alert('Error: ', error);
		}
	};

	signOut = () => {
		firebase.auth().signOut();
	};

	get firestore() {
		return firebase.firestore();
	}

	get uid() {
		return (firebase.auth().currentUser || {}).uid;
	}

	get timestamp() {
		return Date.now();
	}
}

Fire.shared = new Fire();
export default Fire;
