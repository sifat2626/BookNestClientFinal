import React from "react";
import { useAuth } from "../../context/auth";

const UserProfile = () => {
  const [auth] = useAuth();
  const user = auth.user;
  // const user = {
  // 	"_id": {
  // 		"$oid": "64be8a0c92a8b72a8c570c9d"
  // 	},
  // 	"name": "sifat",
  // 	"email": "sifat@gmail.com",
  // 	"avatar": "https://res.cloudinary.com/dlkloclrg/image/upload/v1690634833/bookNest/bookPhotos/lowkeusikvdrwzzisugn.jpg",
  // 	"password": "$2b$12$sxq8XCs/CJaq82NxePNnauVVVDxhIoyaunZAFQP9L3x5xWeIRJuna",
  // 	"role": 1,
  // 	"createdAt": {
  // 		"$date": "2023-07-24T14:26:20.094Z"
  // 	},
  // 	"updatedAt": {
  // 		"$date": "2023-07-24T14:26:20.094Z"
  // 	}
  // };

  return (
    <section style={{ backgroundColor: "#f8f9fa",marginTop:"45px" }}>
      <div className="container py-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 d-flex align-items-center justify-content-center">
              <div className="card-body text-center ml-5">
                <div className="rounded-circle img-frame mb-3 pt-4 pb-4 overflow-hidden">
                  <img
                    src={
                      user.photo !== ""
                        ? user.photo
                        : "https://www.shareicon.net/data/256x256/2016/09/15/829443_man_512x512.png"
                    }
                    alt="avatar"
                    className="img-fluid ml-4"
                    style={{
                      height: "120px",
                      width: "120px",
                      borderRadius: "50%",
											objectFit:"cover"
                    }}
                  />
                </div>
                <h4 className="mb-0">{user.name}</h4>
                <p className="text-muted mb-2">{user.email}</p>
                <button type="button" className="btn btn-primary btn-sm">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card border-0 shadow-sm py-4">
              <div className="card-body py-5">
                <div className="row mb-3 py-3">
                  <div className="col-sm-3">
                    <p className="mb-0 text-secondary">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0">{user.name}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <p className="mb-0 text-secondary">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0 fw-bold">{user.email}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <p className="mb-0 text-secondary">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0">
                      {user.phone ? user.phone : "Not Given Yet"}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0 text-secondary">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="mb-0">
                      {user.address ? user.address : "Not Given Yet"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
