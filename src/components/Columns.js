import { format } from "date-fns"; //imports the format function from 'date-fns' library in order to format iso dates
import DropDownFilter from "./DropDownFilter"; //imports the dropDownFilter Component

export const COLUMNS = [
	{
		Header: "Product ID",
		accessor: "pid",
		Filter: DropDownFilter,
		disableFilters: true,
	},

	// Product Information Grouping
	{
		Header: "Product Information",
		columns: [
			{
				Header: "Product Name",
				accessor: "name",
				Filter: DropDownFilter,
				disableFilters: true,
			},

			{
				Header: "Category",
				accessor: "category",
				Filter: DropDownFilter,
				filter: "includes",
			},
			{
				Header: "Subcategory",
				accessor: "subcategory",
				Filter: DropDownFilter,
				disableFilters: true,
			},
			{
				Header: "Model ID",
				accessor: "modelId",
				Filter: DropDownFilter,
				disableFilters: true,
			},
			{
				Header: "Description",
				accessor: "description",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return <p className="text">{value}</p>;
				},
			},
			{
				Header: "Features",
				accessor: "features",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return <p className="text">{value}</p>;
				},
			},
		],
	},

	//Dates Grouping
	{
		Header: "Dates",
		columns: [
			{
				Header: "Created AT",
				accessor: "createdAt",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return format(new Date(value), "dd/MM/yyyy 'At' H:mm:s");
				},
			},
			{
				Header: "Updated AT",
				accessor: "updatedAt",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return format(new Date(value), `dd/MM/yyyy 'At' H:mm:s`);
				},
			},
		],
	},

	//Product Links Grouping
	{
		Header: "Product Links",
		columns: [
			{
				Header: "Thumbnail",
				accessor: "thumbnail",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return (
						<a href={value}>
							<img src={value} alt="product_thumbnail"></img>
						</a>
					);
				},
			},
			{
				Header: "Link",
				accessor: "link",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return <a href={value}>Go to link</a>;
				},
			},

			{
				Header: "Datasheet",
				accessor: "datasheet",
				Filter: DropDownFilter,
				disableFilters: true,
				Cell: ({ value }) => {
					return <a href={value}>Go to Datasheet</a>;
				},
			},
		],
	},
];
