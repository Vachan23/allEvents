import React, { Component } from "react";
import { Form } from "reactstrap";
import { GoogleLogin } from "react-google-login";
import { NavLink } from "react-router-dom";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      url: ""
    };
  }

  responseGoogle = response => {
    console.log(response);
    this.setState({
      name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl
    });
  };

  render() {
    return (
      <div>
        <NavLink activeStyle={{fontWeight: "bold",color: "red"}} to="/details">Create Event</NavLink><br/><br/>
        <Form className="login-form">
          <h2 className="text-center">Welcome to allEvents</h2>
          <img src={this.state.imageUrl} alt={this.state.name} />
          <div className="text-center pt-3">
            <GoogleLogin
              clientId="315854245557-i0cjaqcqjmkd3lf61gdmup5hnh3qbroa.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </Form>
      </div>
    );
  }
}
