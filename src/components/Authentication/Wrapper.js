import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #ddf8ff;

	.container {
		display: block;
		width: 500px;
		height: auto;
		background: linear-gradient(45deg, #7e4ca0, #8d4eb8);
		padding: 10px;
		color: aliceblue;
		border-radius: 10px;
		box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
	}

	.labelAndInput {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.emailLabel,
	.passLabel {
		margin-bottom: 20px;
		font-size: 25px;
		font-weight: 400;
	}

	.emailInput,
	.passInput {
		border: none;
		border-radius: 5px;
		outline: none;
		height: 35px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

		&::placeholder {
			padding-left: 5px;
		}
	}

	.bottom {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		text-align: center;
	}

	.btn {
		display: block;
		width: 100px;
		border: 0.5px solid #5d2980;
		border-radius: 50px;
		outline: none;
		font-size: 18px;
		padding: 5px 10px;
		background: #5d2980;
		color: aliceblue;
		box-shadow: 0px 5px 10px rgba(93, 41, 128, 0.5);
		cursor: pointer;
		transition: 0.5s ease-in-out all;

		&:hover {
			transform: scale(1.1);
		}
	}

	.extra {
		display: block;
		margin-left: auto;
		padding-right: 20px;

		span {
			color: #f7a919;
			font-size: 18px;
			font-weight: 500;
			cursor: pointer;
		}
	}
`;

export default Wrapper;
