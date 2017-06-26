import React from 'react';

const EggIcon = ({ egg, height, width }) => {
	const mouseOffsetInPixels = 5;

	return(
		<div 	className="absolute egg-marker"
					style={{left: (egg.xPercent*width) - mouseOffsetInPixels + "px", 
								 	top: (egg.yPercent*height) - mouseOffsetInPixels + "px"}}></div>
	)
};

export default EggIcon;


