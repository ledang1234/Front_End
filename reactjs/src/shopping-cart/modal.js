import React, { Component } from "react";

export default class Modal extends Component {
  renderTable = () => {
    return this.props.gioHang.map(sanPham => {
      return (
        <tr key={sanPham.maSP}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img src={sanPham.hinhAnh} width="50" alt="" />
          </td>
          <td>
            <button onClick={()=> {this.props.tangGiamSoLuong(sanPham,false)}}>-</button>
            {sanPham.soLuong}
            <button onClick={()=> {this.props.tangGiamSoLuong(sanPham,true)}}>+</button>
          </td>
          <td>{sanPham.giaBan}</td>
          <td>{sanPham.soLuong * sanPham.giaBan}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>{this.props.delete(sanPham)}}>Delete</button>
          </td>
        </tr>
      );
    });
  };
  

  render() {
    return (
      <div
        className="modal fade "
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Dơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
