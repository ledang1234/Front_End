import React, { Component } from 'react';

// IMPORT CONTAINER
import Body from './Body';
import Model from './Model';
import Bikinitop from './Bikinitop';
import Bikinibottom from './Bikinibottom';
import Feet from './Feet';
import Handbag from './Handbag';
import Necklace from './Necklaces';
import Hairstyle from './Hairstyle';
import Background from './Background';

class Contain extends Component {

  render() {
    // console.log(this.props.chosenItems);
    const styles = {
      // .contain
      containClass: {
        width: "460px",
        height: "590px",
        margin: "0 auto",
        // background: 'url(./images/background/background_998.jpg)',
        // background: "#eff1f1",
        position: "relative"
      }
    }
    let elmBikinitop = <Bikinitop />;
    let elmBikinibottom = <Bikinibottom />;
    let elmFeet = <Feet />
    let elmHandbag = <Handbag />
    let elmNecklace = <Necklace />
    let elmhairstyle = <Hairstyle />
    let elmBackground = <Background />

    for(let item of this.props.chosenItems){
      if(item.type === "topclothes"){
        elmBikinitop = <Bikinitop item={item} />
      }
      if(item.type === "botclothes"){
        elmBikinibottom = <Bikinibottom item={item} />
      }
      if(item.type === "shoes"){
        elmFeet = <Feet item={item} />
      }
      if(item.type === "handbags"){
        elmHandbag = <Handbag item={item} />
      }
      if(item.type === "necklaces"){
        elmNecklace = <Necklace item={item} />
      }
      if(item.type === "hairstyle"){
        elmhairstyle = <Hairstyle item={item} />
      }
      if(item.type === "background"){
        elmBackground = <Background item={item} />
      }
    }


    return (
      <div className="contain" style={styles.containClass}>
        <Body />
        <Model />
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

export default Contain;
