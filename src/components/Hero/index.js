import React from "react";

const Hero = ({
	imageFile,
	setImageFile,
	imageUrl,
	downloadUrl,
	handleUploadImage,
	handleViewImage,
}) => {
	return (
		<form>
			<label htmlFor="file">Upload Image</label>
			<input
				type="file"
				value={imageFile}
				onSubmit={(e) => setImageFile(e.target.value)}
			/>
			<p>{downloadUrl}</p>
			<button onClick={handleUploadImage}>Submit</button>
			<div>
				<p>Uploaded Image</p>
				<div>
					<img src={imageUrl} alt={imageFile[0].name} />
				</div>
				<button onClick={handleViewImage}>Show Images</button>
			</div>
		</form>
	);
};

export default Hero;
