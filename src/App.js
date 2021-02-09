import { fire } from "./firebase/config";
import Hero from "./components/Hero/index";
import React, { useState, useEffect } from "react";
import Authentication from "./components/Authentication/index";

const App = () => {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [hasAccount, setHasAccount] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const [userLoggedIn, setUserLoggedIn] = useState(false);

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
		setUserLoggedIn(true);
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
		setUserLoggedIn(true);
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
			{!userLoggedIn ? (
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
			) : (
				<>
					<Hero />
				</>
			)}
		</div>
	);
};

export default App;
