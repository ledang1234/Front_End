import React, { Component } from "react";
import { thisExpression } from "@babel/types";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        manv: "ss",
        tennv: "ss",
        email: "s"
      },
      error: {
        manv: "",
        tennv: "",
        email: ""
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false
    };
  }

  handleOnChange = event => {
    // let name = event.target.name;
    // let value  = event.target.value;

    // this.setState({
    //     [name]:value
    // })

    let { name, value } = event.target;

    this.setState({
      value: { ...this.state.value, [name]: value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    document.getElementById("manv").innerHTML = this.state.value.manv;
    document.getElementById("tennv").innerHTML = this.state.value.tennv;
    document.getElementById("email").innerHTML = this.state.value.email;
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let mess = value === "" ? "khong duoc rong" : "";
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess === "" ? false : true;
        if (value !== "" && value.length < 4) {
          manvValid = false;
          mess = "Ma nhan vien phai lon hon  3 ky tu";
        }
        break;
      case "tennv":
        tennvValid = mess === "" ? false : true;
        break;
      case "email":
        emailValid = mess === "" ? false : true;
        if (
          value !== "" &&
          !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
          emailValid = false;
          mess = "Email k dung dinh dang.";
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        error: { ...this.state.error, [name]: mess },
        manvValid,
        tennvValid,
        emailValid
      },
      () => {
        this.FormValidation();
      }
    );
  };

  FormValidation = () => {
    let { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid
    });
  };

  render() {
    return (
      <div className="container">
        <h3>* FormValidatiton</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Mã NV</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
          </div>
          {this.state.error.manv !== "" ? (
            <p className="alert alert-danger">{this.state.error.manv}</p>
          ) : (
            ""
          )}
          <div className="form-group">
            <label>Tên NV</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.error.tennv !== "" ? (
              <p className="alert alert-danger">{this.state.error.tennv}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.error.email !== "" ? (
              <p className="alert alert-danger">{this.state.error.email}</p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            <h2>Form Result</h2>
          <div>
            <p>
              Ma nhan vien:  <span id="manv"></span>{" "}
            </p>
          </div>
          <div>
            <p>
              Ten nhan vien:  <span id="tennv"></span>{" "}
            </p>
          </div>
          <div>
            <p>
              Email:  <span id="email"></span>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
