import React from "react";
import UploadForm from "../UploadForm";
import ImageEditor from "../ImageEditor";
import Wrapper from "./Wrapper";
import Title from "../Title";

const Hero = () => {
	return (
		<Wrapper>
			<Title />
			<UploadForm />
			<ImageEditor />
		</Wrapper>
	);
};

export default Hero;
