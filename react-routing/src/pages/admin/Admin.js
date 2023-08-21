import React, { Component } from 'react'
import * as action from "./../../redux/action";
import { connect } from "react-redux";

class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        taiKhoan: "",
        matKhau: ""
      };
    }
  
    handleOnchange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.login(this.state, this.props.history);
    };
  
    render() {
      return (
        <div className="container">
          <h3>Admin</h3>
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="matKhau"
                    onChange={this.handleOnchange}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (user, history) => {
        dispatch(action.actLoginAdminAPI(user, history));
      }
    };
  };
  
  export default connect(null, mapDispatchToProps)(Admin);
  