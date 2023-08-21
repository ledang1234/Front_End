import React, { Component } from "react";
import Search from "./Search";
import User from "./User";
import Modal from "./Modal";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dang Gia Le",
          username: "giale1234",
          email: "phuonggiale13@gmail.com",
          phoneNumber: "0938919001",
          type: "VIP"
        },
        {
          id: 2,
          name: "Dang Minh Tri",
          username: "minhtri1234",
          email: "minhtrideptrai@gmail.com",
          phoneNumber: "0901234567",
          type: "VIP"
        },
        {
          id: 3,
          name: "Gia Le Phuong",
          username: "le.dang1234",
          email: "le.dang@hcmut.edu.vn",
          phoneNumber: "0913622678",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyword:""
    };
  }
 /**
   * Tim Vi Tri
   */
  timViTri = id => {
    return this.state.userList.findIndex(user => {
      return user.id === id;
    });
  };

  

  /**
   * Submit (Add/Update)
   */
  handleSubmit = user => {
    if (user.id) {
      //UPDATE
      /**
       * 0. Tim vi tri index
       * 1. userList[index] = user;
       */
      let userList = [...this.state.userList];
      let index = this.timViTri(user.id);
      if (index !== -1) {
        userList[index] = user;

        this.setState({
          userList,
          userEdit: user
        });
      }
    } else {
      //ADD
      let userAdd = { ...user, id: Math.random() };
      let userList = [...this.state.userList, userAdd];

      this.setState({
        userList
      });
    }
  };

  handleGetUserEdit = user => {
    this.setState({
      userEdit: user
    });
  };

  handleDelete = user => {
      let userList = [...this.state.userList];
      let index  =  this.timViTri(user.id);

      if(index !== -1 ){
          userList.splice(index,1);
          this.setState({
              userList
          })
      }
  }
  handleSearch = (keyword) => {
    this.setState({
        keyword
    })
  }

  render() {
      let {userList, keyword}  = this.state
      userList = userList.filter(user=>{
          return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    return (
      <div>
        <div className="container">
          <h1 className="display-4 text-center my-3">User Management</h1>
          <div className="d-flex justify-content-between align-items-center">
            <Search keyword={this.handleSearch} />
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelIdUser"
            >
              Add user
            </button>
          </div>
          <User
            userList={userList}
            getUserEdit={this.handleGetUserEdit}
            delete={this.handleDelete}
          />
          <Modal submit={this.handleSubmit} userEdit={this.state.userEdit} />
        </div>
      </div>
    );
  }
}
