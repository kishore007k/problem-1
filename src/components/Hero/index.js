import React from "react";

const Hero = ({
	imageFile,
	setImageFile,
	imageUrl,
	// downloadUrl,
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
			{/* <p>{downloadUrl}</p> */}
			<button onClick={handleUploadImage}>Submit</button>
			<div>
				<p>Uploaded Image</p>
				{imageUrl && (
					<div>
						<img alt={imageFile[0].name} id="image" />
					</div>
				)}
				<button onClick={handleViewImage}>Show Images</button>
			</div>
		</form>
	);
};

export default Hero;
