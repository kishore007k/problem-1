import fire from "./fire";
// import firebase from "firebase";
// import Hero from "./components/Hero/index";
import React, { useState, useEffect } from "react";
import Authentication from "./components/Authentication/index";

const App = () => {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [hasAccount, setHasAccount] = useState(false);
	// const [imageFile, setImageFile] = useState(null);
	// const [imageUrl, setImageUrl] = useState("");
	// const [downloadURL, setDownloadUrl] = useState("");

	// const handleUploadImage = () => {
	// 	const folderName = "images";
	// 	const file = imageFile[0];
	// 	const storageRef = firebase.storage().ref(`${folderName}/${file.name}`);
	// 	const uploadTask = storageRef.put(file);
	// 	uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
	// 		const downloadURL = uploadTask.snapshot.downloadURL;
	// 		setDownloadUrl(downloadURL);
	// 	});
	// };

	// const handleViewImage = () => {
	// 	const storageRef = firebase.storage().ref();
	// 	const spaceRef = storageRef.child(`images/${imageFile[0].name}`);
	// 	spaceRef.getDownloadURL().then((url) => {
	// 		console.log(url);
	// 		setImageUrl(url);
	// 	});
	// };

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
	};

	const handleSignIn = () => {
		clearErrors();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
					default:
						break;
				}
			});
	};

	const handleSignUp = () => {
		clearErrors();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
					default:
						break;
				}
			});
	};

	const handleSignOut = () => {
		fire.auth().signOut();
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser("");
			}
		});
	};

	useEffect(() => {
		authListener();
	}, []);

	return (
		<div className="App">
			<Authentication
				user={user}
				email={email}
				password={password}
				emailError={emailError}
				passwordError={passwordError}
				hasAccount={hasAccount}
				setEmail={setEmail}
				setPassword={setPassword}
				setHasAccount={setHasAccount}
				handleSignOut={handleSignOut}
				handleSignIn={handleSignIn}
				handleSignUp={handleSignUp}
			/>
			{/* <Hero
				imageFile={imageFile}
				setImageFile={setImageFile}
				imageUrl={imageUrl}
				downloadURL={downloadURL}
				handleUploadImage={handleUploadImage}
				handleViewImage={handleViewImage}
			/> */}
		</div>
	);
};

export default App;
