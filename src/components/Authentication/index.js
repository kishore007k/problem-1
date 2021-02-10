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
			<h1 className="mainTitle">Login</h1>
			<div className="mainContainer">
				<form className="container">
					<div className="labelAndInput">
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
							placeholder="Enter your email"
						/>
						<p className="error">{emailError}</p>
					</div>
					<div className="labelAndInput">
						<label htmlFor="text" className="passLabel">
							Password
						</label>
						<input
							type="text"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="passInput"
							placeholder="Enter the password"
						/>
						<p className="error">{passwordError}</p>
					</div>
					<div className="bottom">
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
					</div>
				</form>
			</div>
		</Wrapper>
	);
};

export default Authentication;
