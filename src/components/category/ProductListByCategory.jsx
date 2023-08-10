import React from 'react';
import '../../assets/rahim/productListByCategory.css'

// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BookCard from './BookCard';

const ProductListByCategory = () => {
	return (
		<div className="container-fluid">

			<div className="row parent-container">
				<div className="col-lg-3 col-md-3 col-sm-4 col-12 mt-3 search-container">
					<div className="mb-3 overflow-auto my-card">
						<h4 className="text-center">Category</h4>
						<hr />
						<h6>Bengali Literature (132)</h6>
						<hr />
						<p>Novel</p>
						<hr />
						<p>Choto Golpo</p>
						<hr />
						<p>BCS</p>
						<hr />
						<p>CSE</p>
						<hr />
						<p>College</p>
						<hr />
					</div>
					<div className="mb-3 overflow-y-scroll my-card">
						<h4 className="text-center">Sort by Author</h4>
						<hr />
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Kazi Nazrul Islam</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Humayun Ahmed</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">MD. Abdur Rahim</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">All</label>
						</div>
					</div>
					<div className="mb-3 overflow-y-scroll my-card">
						<h4 className="text-center">Sort by Publisher</h4>
						<hr />
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Kazi Nazrul Islam</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Humayun Ahmed</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">MD. Abdur Rahim</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">All</label>
						</div>
					</div>
					<div className="mb-3 overflow-y-scroll my-card">
						<h4 className="text-center">Sort by Price</h4>
						<hr />
						<div>
							<input type="radio" />
							<label>0-100</label>
						</div>
						<div>
							<input type="radio" />
							<label>100-200</label>
						</div>
						<div>
							<input type="radio" />
							<label>200-300</label>
						</div>
						<div>
							<input type="radio" />
							<label>300-over</label>
						</div>
						<div>
							<input type="radio" />
							<label>All</label>
						</div>
					</div>
					<div className="mb-3 overflow-y-scroll my-card">
						<h4 className="text-center">Sort by Discount</h4>
						<hr />
						<div>
							<input type="radio" />
							<label>1-9%</label>
						</div>
						<div>
							<input type="radio" />
							<label>10-19%</label>
						</div>
						<div>
							<input type="radio" />
							<label>20-29%</label>
						</div>
						<div>
							<input type="radio" />
							<label>30-More</label>
						</div>
						<div>
							<input type="radio" />
							<label>All</label>
						</div>
					</div>
					<div className="mb-3 overflow-y-scroll my-card">
						<h4 className="text-center">Sort by Language</h4>
						<hr />
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Bangla</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">English</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Arabic</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">All</label>
						</div>
					</div>
					<div className="mb-3 overflow-y-scroll my-card">
						<h4 className="text-center">Sort by Country</h4>
						<hr />
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Bangladesh</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">Saudi Arabia</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">USA</label>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="form-check-label">All</label>
						</div>
					</div>
				</div>
				<div className="col-lg-9 col-md-9 col-sm-8 col-12 mt-3 data-container">
					<div className="border">
						<h6 className="p-2 text-center head">Bengali Literature Books</h6>
					</div>
					<div className="row">
						{/* <div className="col-3 mt-2 book-list">
							<div className="text-center img-container">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0cFvMn0N2QoGAGVa2k2ZcmrxW8_6JkGU6g&usqp=CAU" />
								<button className="border border-0 p-2 bg-warning text-white fw-bold add-to-cart-btn">Add to
									Cart</button>
								<button className="add-to-fav-btn border border-0 p-2 bg-warning mt-2 text-white fw-bold">Favourite</button>
							</div>
							<div className="mt-2">
								<p><span className="fw-bold">Book :</span> Pragoitihasik</p>
								<p><span className="fw-bold">Author :</span> Manik Bondhopadhay</p>
								<p><span className="fw-bold">Price :</span> 250</p>
							</div>
						</div>
						<div className="col-3 mt-2 book-list">
							<div className="text-center img-container">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0cFvMn0N2QoGAGVa2k2ZcmrxW8_6JkGU6g&usqp=CAU" />
								<button className="border border-0 p-2 bg-warning text-white fw-bold add-to-cart-btn">Add to
									Cart</button>
								<button className="add-to-fav-btn border border-0 p-2 bg-warning mt-2 text-white fw-bold">Favourite</button>
							</div>
							<div className="mt-2">
								<p><span className="fw-bold">Book :</span> Pragoitihasik</p>
								<p><span className="fw-bold">Author :</span> Manik Bondhopadhay</p>
								<p><span className="fw-bold">Price :</span> 250</p>
							</div>
						</div> */}

						<Swiper
							// install Swiper modules
							modules={[Autoplay, Pagination,]}
							
							breakpoints={
								{
									0: {
										spaceBetween: 10,
										slidesPerView: 2,
									},
									460: {
										spaceBetween: 10,
										slidesPerView: 2,
									},
									768: {
										spaceBetween:10,
										slidesPerView: 2,
									},
									1024: {
										spaceBetween: 10,
										slidesPerView: 4,
									}
								}
							}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false
							}}

							pagination={{ clickable: true }}

						>

							{[1,2,3,4,5,6,7,8,9,10].map((d, i) => {
								return (
									<SwiperSlide key={i}>
										{/* <div className="col-3 mt-2 book-list border">
											<div className="text-center img-container">
												<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0cFvMn0N2QoGAGVa2k2ZcmrxW8_6JkGU6g&usqp=CAU" />
												<button className="border border-0 p-2 bg-warning text-white fw-bold add-to-cart-btn">Add to
													Cart</button>
												<button className="add-to-fav-btn border border-0 p-2 bg-warning mt-2 text-white fw-bold">Favourite</button>
											</div>
											<div className="mt-2">
												<p><span className="fw-bold">Book :</span> Pragoitihasik</p>
												<p><span className="fw-bold">Author :</span> Manik Bondhopadhay</p>
												<p><span className="fw-bold">Price :</span> 250</p>
											</div>
										</div> */}

										<BookCard/>
									</SwiperSlide>
								)
							})
							}


						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductListByCategory;