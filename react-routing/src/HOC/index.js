import React, { Component } from "react";
import WithModal from "./WithModal";
import FormNhanVien from "./FormNhanVien";
import FormSanPham from "./FormSanPham";


var FormModal = WithModal(FormSanPham);

export default class HOC extends Component {
 
  render() {
    return (
      <div>
          <h3>HOC</h3>
        <FormModal />
      </div>
    );
  }
}
