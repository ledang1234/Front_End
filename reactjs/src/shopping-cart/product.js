import React, { Component } from "react";


export default class Product extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="" />
          <div className="card-body">
            <h3>{sanPham.tenSP}</h3>
            <button className="btn btn-success" onClick={()=>{this.props.detailProduct(sanPham)}}>
                Chi tiet
            </button>

            <button className="btn btn-danger" onClick={()=>{this.props.gioHang(sanPham)}}>
                Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
