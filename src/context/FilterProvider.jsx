import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const FilterContext = createContext();

export function useFilterContext() {
	return useContext(FilterContext);
}

export function FilterProvider({ children }) {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedPublication, setSelectedPublication] = useState("");
	const [selectedAuthor, setSelectedAuthor] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [sort, setSort] = useState("");
	const [perPage, setPerPage] = useState(10);

	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState(0);

	const handleLoadMore = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setPerPage((prev) => prev + 4);
		}, 1000);
	};

	useEffect(() => {
		// Fetch the filtered books from the API and set the books state
		const fetchFilteredBooks = async () => {
			try {
				// Construct the query params based on selected filter criteria
				const queryParams = new URLSearchParams();
				if (selectedCategory) queryParams.append("categories", selectedCategory);
				if (selectedPublication) queryParams.append("publications", selectedPublication);
				if (selectedAuthor) queryParams.append("authors", selectedAuthor);
				if (minPrice) queryParams.append("minPrice", minPrice);
				if (maxPrice) queryParams.append("maxPrice", maxPrice);
				if (sort) queryParams.append("sort", sort);
				if (perPage) queryParams.append("perPage", perPage);

				// Fetch filtered books
				const response = await axios.get(
					`https://book-nest-backend.onrender.com/api/v1/filter?${queryParams}`
				);
				const data = response.data;

				setBooks(data.filteredBooks);
				setTotal(data.total);
			} catch (error) {
				console.error("Error fetching filtered books:", error);
			}
		};

		fetchFilteredBooks();
	}, [
		selectedCategory,
		selectedPublication,
		selectedAuthor,
		minPrice,
		maxPrice,
		sort,
		perPage,
	]);

	const handleClearFilter = () => {
		setSelectedCategory("");
		setSelectedPublication("");
		setSelectedAuthor("");
		setMinPrice("");
		setMaxPrice("");
		setSort("");
		setPerPage(10);
	};

	return (
		<FilterContext.Provider
			value={{
				selectedCategory,
				setSelectedCategory,
				selectedPublication,
				setSelectedPublication,
				selectedAuthor,
				setSelectedAuthor,
				minPrice,
				setMinPrice,
				maxPrice,
				setMaxPrice,
				sort,
				setSort,
				perPage,
				setPerPage,
				books,
				total,
				loading,
				handleLoadMore,
				handleClearFilter,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
