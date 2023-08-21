import React, { Component } from 'react'
import Child from "./child";
import Pure from "./pure";

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
          username: "Cybersoft"
        };
      }
      UNSAFE_componentWillMount() {
        console.log("componentWillMount");
      }
    
      componentDidMount() {
        /* Quan trọng */
        console.log("componentDidMount");
      }

      UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
      }
      componentDidUpdate() {
        console.log("componentDidUpdate");
      }
    
      render() {
        console.log("render");
        return (
          <div>
            <h3 className="title">Lifecycle</h3>
            <h4>Username: {this.state.username}</h4>
            <Child username={this.state.username} />
            <Pure />
            <button
              className="btn btn-success"
              onClick={() => {
                this.setState({ username: "NguyenDP" });
              }}
            >
              Click
            </button>
          </div>
        );
      }
}
