import Slider from "../Slider";
import React, { useState } from "react";
import SidebarItem from "../SidebarItem";
import Modal from "../Modals";
import ImageGrid from "../ImageGrid";

const DEFAULT_OPTIONS = [
	{
		name: "Brightness",
		property: "brightness",
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: "%",
	},
	{
		name: "Contrast",
		property: "contrast",
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: "%",
	},
	{
		name: "Saturation",
		property: "saturate",
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: "%",
	},
	{
		name: "Grayscale",
		property: "grayscale",
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: "%",
	},
	{
		name: "Sepia",
		property: "sepia",
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: "%",
	},
	{
		name: "Hue Rotate",
		property: "hue-rotate",
		value: 0,
		range: {
			min: 0,
			max: 360,
		},
		unit: "deg",
	},
	{
		name: "Blur",
		property: "blur",
		value: 0,
		range: {
			min: 0,
			max: 20,
		},
		unit: "px",
	},
];

const ImageEditor = () => {
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
	const [options, setOptions] = useState(DEFAULT_OPTIONS);
	const selectedOption = options[selectedOptionIndex];
	const [selectedImg, setSelectedImg] = useState(null);

	const handleSliderChange = ({ target }) => {
		setOptions((prevOptions) => {
			return prevOptions.map((option, index) => {
				if (index !== selectedOptionIndex) return option;
				return { ...option, value: target.value };
			});
		});
	};

	const getImageStyle = () => {
		const filters = options.map((option) => {
			return `${option.property}(${option.value}${option.unit})`;
		});
		return { filter: filters.join(" ") };
	};

	return (
		<div>
			<div className="container">
				<div className="main-image" style={getImageStyle()}>
					<ImageGrid setSelectedImg={setSelectedImg} />
					{selectedImg && (
						<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
					)}
				</div>
				<div className="sidebar">
					{options.map((option, index) => {
						return (
							<SidebarItem
								key={index}
								name={option.name}
								active={index === selectedOptionIndex}
								handleClick={() => setSelectedOptionIndex(index)}
							/>
						);
					})}
				</div>
			</div>
			<Slider
				min={selectedOption.range.min}
				max={selectedOption.range.max}
				value={selectedOption.value}
				handleChange={handleSliderChange}
			/>
		</div>
	);
};

export default ImageEditor;
