import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/auth.jsx"; // Make sure to import useAuth from the correct path
import styled from "styled-components";
const Register = () => {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  let [imgUploading, setImgUploading] = useState(false);

  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleImage = async (e) => {
    const files = e.target.files;
    try {
      setImgUploading(true);
      const res = await axios.post(
        "https://book-nest-backend.onrender.com/api/v1/cloudinaryimage",
        { image: files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("userImage", res.data.image);

      setPhoto(res.data.image);
      toast.success("Image uploaded successfully");

      setImgUploading(false);
    } catch (error) {
      setImgUploading(false);
      if (
        error.message == "imgRef is not defined" ||
        error.message == "Cannot set properties of undefined (setting 'src')"
      ) {
        console.log("avoid it");
        return;
      }
      // toast.error("error in creating author");
      console.log("error", error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== cpassword) {
        toast.error("Password and Confirm Password must be same");
        return;
      }
      const { data } = await axios.post(
        "https://book-nest-backend.onrender.com/api/v1/register",
        {
          name,
          email,
          password,
          address,
          phone,
          photo,
        }
      );
      console.log(data);

      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Registration successful");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Registration failed. Try again.");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mx-auto">
            <div className="account_form register">
              <h2>Register</h2>
              <p>
                Already have an account?
                <Link to="/login"> Log in instead!</Link>
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="DwE6PzeqV1B0wdKiIbVj1Xm0rOwhi8Qf0lsINciC"
                />
                <p>
                  <label>
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    defaultValue
                    required
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    defaultValue
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <p>
                  <label>
                    Mobile No. <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile No."
                    className="form-control"
                    name="mobile_no"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </p>
                <p>
                  <label>
                    Address <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address "
                    className="form-control"
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </p>

                <p>
                  <label>
                    Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    required
                    autoComplete="new-password"
                    aria-autocomplete="list"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </p>
                <p>
                  <label>
                    Confirm Password <span>*</span>
                  </label>
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    className="form-control"
                    name="password_confirmation"
                    required
                    autoComplete="new-password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </p>
                <p>
                  <label>
                    Image <span>*</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Profile Picture"
                    className="form-control"
                    name="photo"
                    style={{
                      height: "32px",
                      padding: "3px 8px",
                    }}
                    onChange={handleImage}
                  />
                </p>
                <div className="register login_submit">
                  <button
                    type="submit"
                    style={imgUploading?{width: "100%",background:"#fff",color:"#ccc",borderColor:"#ccc"  }:{width:"100%"}}
                  >
                    {imgUploading == true ? "uploading" : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    line-height: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #131921;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
  a,
  button,
  img,
  input,
  span {
    transition: all 0.3s ease 0s;
  }
  a,
  button {
    color: inherit;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  /* register form related syles */
  .account_form {
    margin: 8.5rem 0 !important;
  }
  .account_form form {
    border: 1px solid #ebebeb;
    padding: 23px 20px 29px;
    border-radius: 5px;
    background: #fff;
  }
  .account_form h2 {
    font-size: 28px;
    text-transform: capitalize;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 30px;
    text-align: center;
  }

  .account_form p {
    margin-bottom: 20px;
    text-align: center;
  }
  .account_form form {
    border: 1px solid #ebebeb;
    padding: 23px 20px 29px;
    border-radius: 5px;
    background: #fff;
  }
  .account_form input {
    border: 1px solid #ebebeb;
    height: 40px;
    max-width: 100%;
    padding: 0 20px;
    background: 0 0;
    width: 100%;
  }
  .account_form label {
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    line-height: 12px;
    margin-bottom: 12px;
  }
  .account_form a {
    color: #131921 !important;
  }
  .account_form a:hover {
    color: #f4d078 !important;
  }
  .login_submit {
    text-align: right;
  }

  .account_form button {
    color: #fff;
    background-color: #0fd178;
    border-color: #0fd178;
    box-shadow: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.85rem 1.5rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    min-width: 170px;
    border-radius: 0;
    white-space: normal;
    transition: all 0.3s;
  }
  // .account_form button {
  //   background: #f4d078;
  //   border: 0;
  //   color: #fff;
  //   display: inline-block;
  //   font-size: 12px;
  //   font-weight: 500;
  //   height: 34px;
  //   line-height: 21px;
  //   padding: 5px 20px;
  //   text-transform: uppercase;
  //   cursor: pointer;
  //   -webkit-transition: .3s;
  //   transition: .3s;
  //   margin-left: 20px;
  //   border-radius: 20px;
  // }

  /* login form extras */

  .login_submit label input[type="checkbox"] {
    width: 15px;
    height: 13px;
    margin-right: 3px;
  }

  .lost-password {
    margin-top: 5px !important;
    text-align: left;
  }

  /* media query */
  /* Styles for screen sizes between 767px and 1200px */
  @media (min-width: 767px) and (max-width: 1200px) {
    .lost-password {
      margin-top: 4px !important;
    }
  }

  /* medium device */
  @media (max-width: 767.98px) {
    .login_submit.register,
    .login_submit.fp {
      text-align: left;
    }
    .account_form button {
      margin-left: 0;
    }
  }
  /* small device */
  @media (max-width: 494px) {
    .lost-password {
      margin-top: 0 !important;
    }
  }
  @media (min-width: 394px) and (max-width: 494px) {
    .lost-password {
      margin-top: 4px !important;
    }
  }
`;

export default Register;
