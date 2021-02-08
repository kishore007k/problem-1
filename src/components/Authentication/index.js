import React from "react";
import Wrapper from "./Wrapper";

const Authentication = ({
	email,
	password,
	setEmail,
	setPassword,
	emailError,
	passwordError,
	handleSignIn,
	handleSignUp,
	setHasAccount,
	hasAccount,
}) => {
	return (
		<Wrapper>
			<label htmlFor="email" className="emailLabel">
				Email
			</label>
			<input
				type="email"
				required
				autoFocus
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="emailInput"
			/>
			<p className="error">{emailError}</p>
			<label htmlFor="text" className="passLabel">
				Password
			</label>
			<input
				type="text"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="passInput"
			/>
			<p className="error">{passwordError}</p>
			{hasAccount ? (
				<>
					<button onClick={handleSignIn} className="btn">
						Sign In
					</button>
					<p className="extra">
						Don't have an account ?{" "}
						<span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
					</p>
				</>
			) : (
				<>
					<button onClick={handleSignUp} className="btn">
						Sign Up
					</button>
					<p className="extra">
						Already have an account ?{" "}
						<span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
					</p>
				</>
			)}
		</Wrapper>
	);
};

export default Authentication;
