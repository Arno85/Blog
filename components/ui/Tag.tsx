import React from 'react';

const Tag: React.FC<{ name: string; bgColor: string; fgColor: string }> = (props) => {
	return (
		<span
			className="py-1 px-2 mr-4 rounded-full font-text font-semibold text-sm"
			style={{ backgroundColor: props.bgColor, color: props.fgColor }}
		>
			{props.name}
		</span>
	);
};

export default Tag;
