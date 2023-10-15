import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<footer className="footer mt-5">
				<div className="footer-middle">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-lg-3">
								<div className="widget widget-about">
									<h2 className="text-primary fs-3 fw-bold">BookNest</h2>
									<p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu
										erat. </p>
									<div className="widget-call">
										<i className="phone-icon"><svg xmlns="http://chaudhuree.netlify.app" width="25" height="25" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/></g></svg></i>
										Got Question? Call us 24/7
										<a href="tel:#">+01736 873 879</a>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-lg-3">
								<div className="widget">
									<h4 className="widget-title">Useful Links</h4>

									<ul className="widget-list">
										<li><Link to="/about">About BOOKLY</Link></li>
										<li><Link to="/">Our Services</Link></li>
										<li><Link to="/">How to shop on BOOKLY</Link></li>
										<li><Link to="/">FAQ</Link></li>
										<li><Link to="/contact">Contact us</Link></li>
									</ul>
								</div>
							</div>

							<div className="col-sm-6 col-lg-3">
								<div className="widget">
									<h4 className="widget-title">Customer Service</h4>

									<ul className="widget-list">
										<li><Link to="/">Payment Methods</Link></li>
										<li><Link to="/">Money-back guarantee!</Link></li>
										<li><Link to="/">Returns</Link></li>
										<li><Link to="/">Shipping</Link></li>
										<li><Link to="/">Terms and conditions</Link></li>
										<li><Link to="/">Privacy Policy</Link></li>
									</ul>
								</div>
							</div>

							<div className="col-sm-6 col-lg-3">
								<div className="widget">
									<h4 className="widget-title">My Account</h4>

									<ul className="widget-list">
										<li><Link to="/login">Sign In</Link></li>
										<li><Link to="/cart">View Cart</Link></li>
										<li><Link to="/wishlist">My Wishlist</Link></li>
										<li><Link to="/">Track My Order</Link></li>
										<li><Link to="/contact">Help</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="container">
						<p className="footer-copyright">Copyright © 2023 BOOKNEST Store. All Rights Reserved.</p>
						<figure className="footer-payments">
							<img src="https://i.ibb.co/PCPt3xV/payments.png" alt="Payment methods" width="272" height="20"/>
						</figure>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;