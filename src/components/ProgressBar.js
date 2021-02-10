import { motion } from "framer-motion";
import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
	const { progress, url } = useStorage(file);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<motion.div
			className="progressBar"
			initial={{ width: 0 }}
			animate={{ width: progress + "%" }}
		></motion.div>
	);
};

export default ProgressBar;
