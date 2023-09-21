import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FiUser, FiMail, FiLock, FiArrowLeft, FiLogIn } from "react-icons/fi";
import classes from "./SignIn.module.css";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo-preview.png";
import signInLogo from "../../assets/sign-up-background.png";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container-fluid backgroundclr ">
      <div className="row">
        <div className="container backgroundclr col-lg-5">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className={classes["logo-item"]}
              src={logoImg}
              alt="eBarber Logo"
            />
          </div>
          <Form onSubmit={handleSubmit}>
            <h1 className={classes["hedding1clr"]}>Please sign in</h1>
            <Form.Group controlId="email" className="m-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className={"clrfill m-3"} controlId="password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
              <Button className={`custom-button m-3 `} type="submit">
                <Link
                  className="d-flex justify-content-center align-items-center deepbluclr"
                  to={"/deshboard"}
                >
                  Sign In
                </Link>
              </Button>
            </div>
            <a
              className={
                "d-flex justify-content-center align-items-center yellowButtonclr"
              }
              href="forgot"
            >
              Forgot your password?
            </a>
          </Form>
          <Link
                  className="d-flex justify-content-center align-items-center ylwclr"
                  
                  to={"/signUp"}
                >
                
                  Sign Up
                </Link>
        </div>
        <div className="col-lg-7">
          <img className="img-fluid h-100" src={signInLogo} alt="Side Photo" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
