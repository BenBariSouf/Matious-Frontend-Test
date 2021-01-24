import React, { useState, useMemo } from "react";
import axios from "axios";

import { useTable, useFilters } from "react-table";
import { COLUMNS } from "./Columns";

import "./table.css";

export const ReactTable = () => {
	const [displayData, setDisplayData] = useState(false);
	const [products, setProducts] = useState([]);

	const columns = useMemo(() => COLUMNS, []);
	const data = products;

	//getProducts function to fetch the API data using axios
	const getProducts = () => {
		axios.get("https://app.getrecall.com/api/products").then((response) => {
			setProducts(response.data.products);
			setDisplayData(true);
		});
	};

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			//we can use the es6 shorthand syntax, so instead of saying columns:columns, we shorthand it to columns
			columns,
			data,
		},
		useFilters
	);

	return (
		<div>
			<button className="products" onClick={getProducts}>
				Fetch Products
			</button>
			<div style={{ display: !displayData && "none" }}>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render("Header")}
										<div>
											{column.canFilter ? column.render("Filter") : null}
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
