import styled from "styled-components";

const Wrapper = styled.section`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr auto;
		grid-template-areas:
			"image sidebar"
			"slider sidebar";
		height: 100vh;
		width: 100vw;
		background-color: #dadada;
	}

	.main-image {
		grid-area: image;
		background-image: url("");
		width: 100%;
		height: 100%;
		background-position: top center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.sidebar {
		grid-area: sidebar;
		background-color: hsl(265, 100%, 86%);
		border-left: 1px solid hsl(265, 100%, 56%);
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.sidebar-item {
		cursor: pointer;
		border: none;
		outline: none;
		background-color: hsl(265, 100%, 86%);
		padding: 1rem;
		position: relative;
		transition: background-color 150ms;
	}

	.sidebar-item:hover,
	.sidebar-item:focus {
		background-color: hsl(265, 100%, 76%);
	}

	.sidebar-item.active {
		background-color: hsl(265, 100%, 70%);
	}

	.sidebar-item::after {
		content: "";
		position: absolute;
		width: 80%;
		left: 10%;
		bottom: 0;
		height: 1px;
		background-color: hsl(265, 100%, 46%);
	}

	.sidebar-item:last-child::after {
		display: none;
	}

	.slider-container {
		grid-area: slider;
		margin-top: 2rem;
		padding: 2rem;
	}

	.slider {
		width: 100%;
		cursor: pointer;
	}
`;

export default Wrapper;
