import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/auth.jsx";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/login", // Update the URL to your login API endpoint
        {
          email,
          password,
        }
      );

      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Login successful");
        const intendedRoute = localStorage.getItem("intendedRoute") || "/";
        navigate(intendedRoute);
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mx-auto">
            <div className="account_form login my-4">
              <h2>Log in to your account</h2>
              <p>
                No Account?
                <Link to="/register">
                  {" "}
                  Create one here
                </Link>
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="DwE6PzeqV1B0wdKiIbVj1Xm0rOwhi8Qf0lsINciC"
                />
                <p>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    defaultValue
                    required
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <p>
                  <label>
                    Passwords <span>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="c-password"
                    placeholder="Password"
                    name="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </p>
                <input type="hidden" name="redirect" defaultValue="register" />
                <div className="login_submit d-flex justify-content-between flex-md-row flex-col">
                  <Link className="lost-password" to="/forgetpassword">
                    Lost your password?
                  </Link>
                  <div className="login_submit-left">
                    <button type="submit" >login</button>
                  </div>
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
.regibtn{
  width:100% !important;
}
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
export default Login;
