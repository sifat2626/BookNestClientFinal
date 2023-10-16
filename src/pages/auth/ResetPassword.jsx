import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        token !== undefined &&
        token !== null &&
        token !== "" &&
        password !== undefined &&
        password !== null &&
        password !== ""
      ) {
      }
      const { data } = await axios.put(
        `https://book-nest-backend.onrender.com/api/v1/resetpassword/${token}`,
        {
          password,
        }
      );

      if (data) {
        toast.success("Password reset successful");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to change password. Try again.");
    }
  };

  return (
    <section style={{ backgroundColor: "#f8f9fa", minHeight: "75vh" }}>
      <div className="container py-5">
        <div className="card shadow">
          <div className="card-body">
            <h2
              className="card-title text-primary text-center mb-4"
              style={{
                backgroundColor: "#343a40",
                color: "white",
                padding: "10px",
              }}
            >
              Reset Password
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Submit new password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
