import React, { useState, useEffect } from 'react'


export default function ThemPhim () {
    const  [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: ""
    })

    const hanldeOnChange = event => {
        const { name, value } = event.target;
        setState({
          ...state,
          [name]: value
        });
      };
      useEffect(() => {
        console.log(state);
      }, [state]);
        return (
            <div>
            <form className="container">
              <h3>Thêm người dùng</h3>
              <div className="form-group">
                <span>Tài khoản</span>
                <input
                  className="form-control"
                  name="taiKhoan"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <span>Mật khẩu</span>
                <input
                  className="form-control"
                  name="matKhau"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <span>Họ tên</span>
                <input
                  className="form-control"
                  name="hoTen"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  className="form-control"
                  name="email"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  className="form-control"
                  name="soDt"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <span>Mã nhóm</span>
                <input
                  className="form-control"
                  name="maNhom"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <span>Mã loại người dùng</span>
                <input
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Thêm người dùng
                </button>
              </div>
            </form>
          </div>
        )
    
}
