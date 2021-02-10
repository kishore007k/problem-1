import React from "react";

const SidebarItem = ({ name, active, handleClick }) => {
	return (
		<button
			className={`sidebarItem ${active ? "active" : ""}`}
			onClick={handleClick}
		>
			{name}
		</button>
	);
};

export default SidebarItem;
