import React, { Component } from "react";
import Body from "./Contain/Body"
import Model from "./Contain/Model"

import Feet from "./Contain/Feet";
import Hairstyle from "./Contain/Hairstyle";
import Bikinitop from "./Contain/Bikinitop";
import Bikinibottom from "./Contain/Bikinibottom";
import Handbag from "./Contain/Handbag";
import Necklaces from "./Contain/Necklaces";

// IMPORT
export default class Contain extends Component {
  render() {
    console.log(this.props.chosenItems);
    const style = {
      containClass: {
        width: "460px",
        height: "590px",
        margin: "0 auto",
        // background: 'url("./images/background/background_998.jpg")',
        position: "relative"
      }
    };
    let elmBikinitop = <Bikinitop />;
    let elmBikinibottom = <Bikinibottom />;
    let elmFeet = <Feet />;
    let elmHandbag = <Handbag />;
    let elmNecklace = <Necklaces />;
    let elmhairstyle = <Hairstyle />;
    let elmBackground = <Contain />;

    for(let item of this.props.chosenItems) {
      if (item.type === "topclothes") {
        elmBikinitop = <Bikinitop item={item} />;
      }
      if (item.type === "botclothes") {
        elmBikinitop = <Bikinibottom item={item} />;
      }
      if (item.type === "shoes") {
        elmBikinitop = <Feet item={item} />;
      }
      if (item.type === "handbags") {
        elmBikinitop = <Handbag item={item} />;
      }
      if (item.type === "necklaces") {
        elmBikinitop = <Necklaces item={item} />;
      }
      if (item.type === "hairstyle") {
        elmBikinitop = <Hairstyle item={item} />;
      }

      // if (item.type === "background") {
      //   elmBikinitop = <Contain item={item} />;
      // }
    }
    return (
      <div className="contain" style={style.containClass}>
        <Body/>
        <Model/>
        {elmBikinitop}
        {elmBikinibottom}
        {elmFeet}
        {elmHandbag}
        {elmNecklace}
        {elmhairstyle}
        {elmBackground}
      </div>
    );
  }
}
