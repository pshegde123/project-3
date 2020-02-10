import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
//import bcrypt from 'bcryptjs';
import './style.css';

function login(e) {

  e.preventDefault();

  const email = document.getElementById("exampleEmail").value;
  const password = document.getElementById("examplePassword").value;

  let request = {
    "email": email,
    "password": password
  }
  axios.get('/api/games/login/' + email, request).then(resp => {

    console.log("login response:", resp);
    if (!resp.data) 
    {
      alert("User not registered.");
    } else {
      /*console.log("resp.data.password=",resp.data.password);
      console.log("password=",password);
      bcrypt.compare(resp.data.password,password,function(err,result){
        console.log("bcrypt result=",result);
      });*/
      if(resp.data.password === password){
        //save logged in users id to sessionStorage
        sessionStorage.setItem("user",email);
        
        document.getElementById("exampleEmail").value = "";
        document.getElementById("examplePassword").value = "";
        window.location.href = '/profile';
      }
      else{
        alert('Incorrect password');
      }
    }
  }).catch(err => {
    console.log(err)
  })
};

const LoginUser = (props) => {
  return (
    <div className="container">
      <h3>Welcome {sessionStorage.getItem("user")} !</h3>
      <Form className="login" onSubmit={(e) => login(e)}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" required/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter password" required/>
        </FormGroup>
        <Button >Submit</Button>
      </Form>
      <div>
        <p><a href="/register">New user register here</a></p>
      </div>
    </div>
  );
}

export default LoginUser;