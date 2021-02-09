import firebase from "firebase";
import React, { useState } from "react";

const Hero = () => {
	const [imageFile, setImageFile] = useState([]);
	const [downloadImageUrl, setDownloadImageUrl] = useState("");

	const handleChange = (e) => {
		const targetFile = e.target.files[0];
		setImageFile(targetFile);
		console.log(targetFile);
	};

	const handleImageUpload = () => {
		const folderName = "images";
		const file = imageFile;
		const storageRef = firebase.storage().ref(`${folderName}/${file.name}`);
		const uploadTask = storageRef.put(file);
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
			const downloadUrl = uploadTask.snapshot.metadata;
			setDownloadImageUrl(downloadUrl);
		});
	};

	const handleViewImage = () => {
		const storageRef = firebase.storage().ref();
		const spaceRef = storageRef.child(`images/${imageFile.name}`);
		spaceRef.getDownloadURL().then((url) => {
			document.getElementById("image").src = url;
		});
	};

	return (
		<div>
			<input type="file" onChange={handleChange} />
			<button onClick={handleImageUpload}>Upload</button>
			<div>
				<img id="image" alt="file" />
				<button onClick={handleViewImage}>View Images</button>
			</div>
		</div>
	);
};

export default Hero;
