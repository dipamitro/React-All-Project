import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FiUser, FiMail, FiLock, FiArrowLeft, FiLogIn } from "react-icons/fi";
import classes from "../../signIn/SignIn.module.css"
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/logo.png";
import SignUpLogo from "../../../assets/sign-in-background.png";
function SignUp() {
  const [formDataa, setFormDataa] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataa({
      ...formDataa,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDataa);
  };
  return (
    <div className="container-fluid backgroundclr ">
      <div className="row">
      <div className="col-lg-7">
          <img className="img-fluid h-100" src={SignUpLogo} alt="Side Photo" />
        </div>
        <div className="container backgroundclr col-lg-5">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className={classes["logo-item"]}
              src={logoImg}
              alt="eBarber Logo"
            />
          </div>
          
          <Form onSubmit={handleSubmit}>
            <h3 className={classes["hedding1clr"]}>Create your Scissor'S Cut account now</h3>
            <div className="d-flex justify-content-center align-items-center">
            <a className="m-1" href="">I'm a Clint</a>
            <a className="m-1" href="">I'm a Barber</a>
          </div>
            <Form.Group controlId="name" className="m-3">
              <Form.Control className={"formClr"}
                type="name"
                name="email"
                placeholder="Name"
                value={formDataa.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="m-3">
              <Form.Control  className={"formClr"}
                type="email"
                name="email"
                placeholder="E-mail"
                value={formDataa.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className={"clrfill m-3"} controlId="password">
              <Form.Control  className={"formClr"}
                type="password"
                name="password"
                placeholder="Password"
                value={formDataa.password}
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
                  Sign Up
                </Link>
              </Button>
            </div>
           
          </Form>
          <Link
                  className="d-flex justify-content-center align-items-center ylwclr"
                  
                  to={"/"}
                >
                
                 Return to Sign In
                </Link>
        </div>
        
      </div>
    </div>
  );
}

export default SignUp;

