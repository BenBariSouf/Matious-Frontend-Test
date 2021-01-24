import React, { useMemo } from "react";

export const DropDownFilter = ({ column }) => {
	const { filterValue, setFilter } = column;

	return (
		<span>
			Search:{""}
			<input
				value={filterValue || ""}
				onChange={(e) => setFilter(e.target.value)}
			></input>
		</span>
	);
};
