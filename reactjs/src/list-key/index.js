import React, { Component } from "react";

export default class ListKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "Iphone", gia: 30000 },
        { maSP: 2, tenSP: "Samsung", gia: 20000 },
        { maSP: 3, tenSP: "Oppo", gia: 10000 }
      ]
    };
  }
  renderHTML = () => {
    return this.state.mangSanPham.map(sanPham => {
      return (
        <tr key={sanPham.maSP}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
          <h3 className="title">*ListKey</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Ma</th>
              <th>Ten</th>
              <th>Gia</th>
            </tr>
          </thead>
          <tbody>{this.renderHTML()}</tbody>
        </table>
      </div>
    );
  }
}
