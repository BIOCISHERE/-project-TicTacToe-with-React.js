import React from "react";

const Square = ({ value, className, onClick }) => {
	return (
		<div className={className} onClick={onClick}>
            {  value }
        </div>
	);
};

export default Square;