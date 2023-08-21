import React, { Component } from "react";
import UserItem from "./UserItem";

export default class User extends Component {
    renderTable = () => {
        return this.props.userList.map(user => {
          return (
            <UserItem
              key={user.id}
              user={user}
              delete={this.props.delete}
              getUserEdit={this.props.getUserEdit}
            />
          );
        });
      };
  render() {
    return (
        <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
