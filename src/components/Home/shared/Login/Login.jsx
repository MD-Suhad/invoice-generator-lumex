import React,{useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import  './Login.css';

const Login = () => {
   

   const [loginData,setLoginData] = useState({});


   const handleOnChange = e =>{
      const field = e.target.name;
      const value = e.target.value;
      console.log(value);
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData)
   }


   // const handleLoginSubmit = e =>{
   //    loginUser(loginData.email,loginData.password);
   //    e.preventDefault();
   // }








   return (
      <>
        <Row className='login-container'>
         <Col md={12} xs={12} lg={12}
         className='login-header'
         >
         <Form className="bg-blac w-25 ">
        <Form.Group className="mb-3 bg-blac" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label> 
          <Form.Control
           type="email"
           name="email"
           onBlur ={handleOnChange} 
           placeholder="Enter email" /> 
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password" 
           name="password"
           onBlur ={handleOnChange}
           placeholder="Password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
         </Col>
         </Row> 

      </>
   );
};

export default Login;