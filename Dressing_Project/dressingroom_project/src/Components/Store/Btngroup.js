import React, { Component } from 'react';

//IMPORT COMPONENT
import Button from './Button/Button';

// IMPORT DATA
import buttonArr from '../../Data/buttonArray';

import $ from 'jquery';
class Btngroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonArr: buttonArr
    }
  }
  render() {
    $(document).ready(function () {
      // Tạo màu khởi đầu cho Tab Áo
      // $("[href='#tabTopClothes']").addClass("btn-primary"); 

      $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        $(this).removeClass("btn-default").addClass("btn-primary");
      });
    });

    let elmButton = this.state.buttonArr.map((button, index) => {
      return (
        <Button key={index} tabName={button.tabName} showName={button.showName} />
      )
    })
    return (
      <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
        {/* <Button/> */}
        {elmButton}
      </div>
    )
  }
}

export default Btngroup;
