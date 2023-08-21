import React, { Component } from 'react';

// IMPORT COMPONENT
import Item from './Item/Item'

// IMPORT DATA
import dressingRoom from '../../../../Data/GetData';

class TabPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListOfItems: dressingRoom.ListOfItems,
            imgSrc: null
        }
    }

    // function trả về mảng dựa vào thuộc tính type của đối tượng
    getTypeArr = (tabType) => {
        let tempArr = [];
        for (let item of this.state.ListOfItems) {
            if (item.type === tabType) {
                tempArr = [...tempArr, item]
            }
        }
        return tempArr;
    }

    // function cấu trúc JSX của <Item /> dựa trên tempArr
    getElmItem = (tempArr) => {
        let elmItem = tempArr.map((item, index) => {
            return <Item key={index}
                id={item.id}
                name={item.name}
                desc={item.desc}
                imgSrc_jpg={item.imgSrc_jpg}
                imgSrc_png={item.imgSrc_png}
                item={item}

                // Callback function
                tabpaneTransferImgSrc={this.props.tabTransferImgSrc}
            />;
        })
        return elmItem;
    }

    render() {
        let elmItem = null;
        let tempArr = null;
        // Kiểm tra điều kiện của Tab
        switch (this.props.tabName) {
            case 'tabTopClothes':
                tempArr = this.getTypeArr("topclothes");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabBotClothes':
                tempArr = this.getTypeArr("botclothes");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabShoes':
                tempArr = this.getTypeArr("shoes");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabHandBags':
                tempArr = this.getTypeArr("handbags");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabNecklaces':
                tempArr = this.getTypeArr("necklaces");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabHairStyle':
                tempArr = this.getTypeArr("hairstyle");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabBackground':
                tempArr = this.getTypeArr("background");
                elmItem = this.getElmItem(tempArr);
                break;
            default:
                elmItem = <h1>Đây là thứ khác</h1>;
                break;
        }

        return (
            <div className="tab-pane fade in actives" id={this.props.tabName}>
                {/* <h3>{this.props.showName}</h3> */}
                {elmItem}
            </div>
        )
    }
}

export default TabPane;
