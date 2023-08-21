import React, { Component } from "react";
import data from "./data.json";


export default class ExampleListKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data
    };
  }

  renderHTML = () => {
    const { listMovie } = this.state;
    return listMovie.map(movie => {
      return (
        <div className="col-sm-4" key={movie.maPhim}>
          <div className="card">
            <div className="card-header">
              <img className="img-fluid" src={movie.hinhAnh} />
            </div>
            <div className="card-body">
              <h3> {movie.tenPhim}</h3>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
            {this.renderHTML()}
        </div>
      </div>
    );
  }
}
