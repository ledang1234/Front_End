import React, { Component } from "react";
import Item from "./Item/Item";
import dressingRoom from "../../../../Data/getData";

export default class Tabpane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListOfItems: dressingRoom.ListOfItems,
      item: null
    };
  }

//   imgSrcTranferTabpane = (item)=>{
//       this.setState(
//          item : item
//     )
//   }
  getTypeArray = tabType => {
    let tempArr = [];
    for (let item of this.state.ListOfItems) {
      if (item.type === tabType) {
        tempArr = [...tempArr, item];
      }
    }
    return tempArr;
  };

  getElmItem = tempArray => {
    let elmItem = tempArray.map((item, index) => {
      return <Item 
      key={index} 
      name={item.name}
      desc={item.desc}
      imgSrc_jpg={item.imgSrc_jpg}
      imgSrc_png={item.imgSrc_png}
      item={item} 
      imgSrcTranferTabpane={this.props.imgSrcTransferTapcontent}
      />;
    });
    return elmItem;
  };
  render() {
    // console.log(this.state.item);
    let elmItem = null;
    let tempArr = null;

    switch (this.props.button.tabName) {
      case "tabTopClothes":
        tempArr = this.getTypeArray("topclothes");
        elmItem = this.getElmItem(tempArr);
        break;
      case "tabBotClothes":
        tempArr = this.getTypeArray("botclothes");
        elmItem = this.getElmItem(tempArr);
        break;
      case "tabShoes":
        tempArr = this.getTypeArray("shoes");
        elmItem = this.getElmItem(tempArr);
        break;
      case "tabHandBags":
        tempArr = this.getTypeArray("handbags");
        elmItem = this.getElmItem(tempArr);
        break;
      case "tabNecklaces":
        tempArr = this.getTypeArray("necklaces");
        elmItem = this.getElmItem(tempArr);
        break;
      case "tabHairStyle":
        tempArr = this.getTypeArray("hairstyle");
        elmItem = this.getElmItem(tempArr);
        break;
      case "tabBackground":
        tempArr = this.getTypeArray("background");
        elmItem = this.getElmItem(tempArr);
        break;

      default:
        break;
    }

    return (
      <div className="tab-pane fade in " id={this.props.button.tabName}>
        {/* <Item button={this.props.button}/> */}
        {elmItem}
      </div>
    );
  }
}
