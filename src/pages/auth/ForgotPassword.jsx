import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				'https://book-nest-backend.onrender.com/api/v1/forgot-password', // Update the URL to your forgot password API endpoint
				{
					email,
				}
			);

			if (data?.error) {
				toast.error(data.error);
			} else {
				toast.success("Password reset link sent to your email");
				navigate("/login");
			}
		} catch (err) {
			console.log(err);
			toast.error("Failed to send reset link. Try again.");
		}
	};

	return (
		<section style={{ backgroundColor: '#f8f9fa', minHeight: '75vh' }}>
			<div className="container py-5">
				<div className="card shadow">
					<div className="card-body">
						<h2 className="card-title text-primary text-center mb-4" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px' }}>Forgot Password</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">Email address</label>
								<input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
							</div>
							<div className="d-flex justify-content-end">
								<button type="submit" className="btn btn-primary">Send Reset Link</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
