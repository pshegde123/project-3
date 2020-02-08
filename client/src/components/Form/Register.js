import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './style.css';

function register(e){
  e.preventDefault();
  let request={
      "name": document.getElementById("exampleName").value,
      "email": document.getElementById("exampleEmail").value,
      "password": document.getElementById("examplePassword").value
  }
  
  console.log("adding to database:",request);
  axios.post('/api/games',request).then(resp=>{
    alert("Congratulations!!!");
    document.getElementById("exampleName").value="";
    document.getElementById("exampleEmail").value="";
    document.getElementById("examplePassword").value="";
    window.location.href = '/login';
  }).catch(err => {console.log(err)
  })
};

const RegisterUser = (props) => {
  return (
    <div className="container">
    <h1>Register new user</h1>
    <Form className="register" onSubmit={(e)=>register(e)}>
    <FormGroup>
        <Label for="userName">User Name</Label>
        <Input type="text" name="username" id="exampleName" placeholder="Enter user name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  );
}

export default RegisterUser;