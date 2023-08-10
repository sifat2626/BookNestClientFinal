import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import BookCard from "../category/BookCard.jsx";
import axios from "axios";

const HomeComponents = ({category}) => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const fetchBooksByCategory = async () => {
			try {
				const response = await axios.get(`http://localhost:5000/api/v1/search/category/${category.name}`);
				setBooks(response.data);
			} catch (error) {
				console.error('Error fetching books:', error);

			}
		};

		fetchBooksByCategory();
	}, [category.name])


	return (
		<div className="data-container container">
			<div className="row">
             <h1 className='my-5'>{category.name}</h1>
				<Swiper
					// install Swiper modules
					// modules={[Autoplay, Pagination,]}
					modules={[ Pagination,]}

					breakpoints={
						{
							0: {
								spaceBetween: 10,
								slidesPerView: 2,
							},
							460: {
								spaceBetween: 10,
								slidesPerView: 3,
							},
							768: {
								spaceBetween: 10,
								slidesPerView: 3,
							},
							1024: {
								spaceBetween: 10,
								slidesPerView: 5,
							}
						}
					}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false
					}}

					pagination={{clickable: true}}

				>

					{books?.map((book,i) => {
						return (
							<>
								<h3>{category.name}</h3>
								<SwiperSlide key={i}>
									<BookCard book={book} category={category}/>
								</SwiperSlide>
							</>


						)
					})

					}

					


				</Swiper>
			</div>
		</div>
	);
};

export default HomeComponents;