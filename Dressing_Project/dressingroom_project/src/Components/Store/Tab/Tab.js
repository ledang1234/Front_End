import React, { Component } from 'react';
import $ from 'jquery';

//IMPORT COMPONENT
import Tabpane from './Tabpane/Tabpane'

// IMPORT DATA
import ButtonArr from '../../../Data/buttonArray';

class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {
            ButtonArr: ButtonArr
        }
    }

    render() {
        let elmTab = this.state.ButtonArr.map((Button, index) => {
            return (
                <Tabpane key={index} tabName={Button.tabName} showName={Button.showName} tabType={Button.type}
                    tabTransferImgSrc={this.props.storeTransferImgSrc}
                />
            )
        })

        $(document).ready(function () {
            // $("#tabTopClothes").addClass("active"); 
            // Tạo màu khởi đầu cho Tab Áo
          });

        return (
            <div className="tab-content">
                {elmTab}
            </div>
        )
    }
}

export default Tab;
