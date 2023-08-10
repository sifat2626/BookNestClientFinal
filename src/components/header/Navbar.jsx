
const Navbar = () => {

	

	return (
		<div className="container">
			<div className="header-top d-flex bg-light py-3">
				<div className="header-left">
					<a href="src/layout/client/Navbar-prev.jsx#"><i className="icon-phone"></i>Call: +0123 456 789</a>
				</div>
				<div className="header-right">
					<a href="src/layout/client/Navbar-prev.jsx#"><i className="icon-phone"></i>Call: +0123 456 789</a>
				</div>
			</div>
			<div className="row py-4">
				<div className="col-md-4">
					<h3 className="text-primary">BookNest</h3>
				</div>
				<div className="col-md-4">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">@</span>
						<input type="search" className="form-control" placeholder="Search Book" aria-label="Username"
						       aria-describedby="basic-addon1"/>
					</div>
				</div>
				<div className="col-md-4">
					<ul className="d-flex">
						<li className="">
							<a className="nav-link active" aria-current="page" href="#">
								<h6 className="text-center">Hotline:</h6>
								<h6 className="text-center">0123456789</h6>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							   data-bs-toggle="dropdown" aria-expanded="false">
								Sign In
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#">Login</a></li>
								<li><a className="dropdown-item" href="#">Register</a></li>
							</ul>
						</li>
						<li className="nav-item d-flex">
							<button className="mr-3 btn-primary"  >WishList</button>
							<button className=" btn-primary"  >Cart</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
						        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
						        aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item dropdown mr-5">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
									   data-bs-toggle="dropdown" aria-expanded="false">
										All Books
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Categories</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Top Selling</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Top Rated</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Author</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Publisher</a>
								</li>

							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
