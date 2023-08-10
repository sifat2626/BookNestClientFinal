import React, { useState } from 'react';

const MyOrders = () => {
	const orders = [
		{
			orderId: 'ORD123456',
			date: '2023-08-15',
			totalAmount: 125.75,
			status: 'Delivered',
			paymentMethod: 'Credit Card',
			items: [
				{ bookId: 'B001', title: 'The Great Gatsby', quantity: 2 },
				{ bookId: 'B002', title: 'To Kill a Mockingbird', quantity: 1 }
			],
			shippingAddress: '123 Main St, Cityville, CA'
		},
		{
			orderId: 'ORD789012',
			date: '2023-08-10',
			totalAmount: 84.50,
			status: 'Processing',
			paymentMethod: 'PayPal',
			items: [
				{ bookId: 'B003', title: 'Pride and Prejudice', quantity: 1 },
				{ bookId: 'B004', title: '1984', quantity: 3 }
			],
			shippingAddress: '456 Elm Rd, Townsville, NY'
		},
		{
			orderId: 'ORD345678',
			date: '2023-08-05',
			totalAmount: 59.20,
			status: 'Cancelled',
			paymentMethod: 'Debit Card',
			items: [
				{ bookId: 'B005', title: 'The Catcher in the Rye', quantity: 1 }
			],
			shippingAddress: '789 Oak Ave, Villageton, TX'
		}
	];

	const [hoveredIndex, setHoveredIndex] = useState(-1);

	return (
		<section style={{ backgroundColor: '#f8f9fa', minHeight: '75vh' }}>
			<div className="container py-5">
				<div className="card shadow">
					<div className="card-body">
						<h2 className="card-title text-primary text-center mb-4" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px' }}>My Orders</h2>
						<div className="table-responsive">
							<table className="table table-bordered table-striped text-center">
								<thead>
								<tr style={{ backgroundColor: '#f2f2f2' }}>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Order ID</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Date</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Total Amount</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Status</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Payment Method</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Book Title</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Quantity</th>
									<th scope="col" style={{ backgroundColor: '#343a40', color: 'white' }}>Shipping Address</th>
								</tr>
								</thead>
								<tbody>
								{orders.map((order, index) => (
									<tr
										key={order.orderId}
										style={{
											backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white',
											transition: 'background-color 0.3s',
											boxShadow: hoveredIndex === index ? '0px 2px 6px rgba(0, 0, 0, 0.2)' : 'none',
											cursor: 'pointer'
										}}
										onMouseEnter={() => setHoveredIndex(index)}
										onMouseLeave={() => setHoveredIndex(-1)}
									>
										<td>{order.orderId}</td>
										<td>{order.date}</td>
										<td>${order.totalAmount.toFixed(2)}</td>
										<td style={{ color: order.status === 'Delivered' ? 'green' : order.status === 'Processing' ? 'orange' : 'red', fontWeight: 'bold' }}>{order.status}</td>
										<td>{order.paymentMethod}</td>
										<td>
											<ul className="list-unstyled mb-0">
												{order.items.map((item) => (
													<li key={item.bookId}>{item.title}</li>
												))}
											</ul>
										</td>
										<td>
											<ul className="list-unstyled mb-0">
												{order.items.map((item) => (
													<li key={item.bookId}>{item.quantity}</li>
												))}
											</ul>
										</td>
										<td>{order.shippingAddress}</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyOrders;
