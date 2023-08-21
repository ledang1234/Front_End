import React, { Component } from 'react';

//IMPORT COMPONENT
import Tab from './Tab/Tab';

class Store extends Component {
  render() {
    const styles = {
      // .well
      wellClass: {
        backgroundColor: "#eff1f1",
        height: "600px"
      }
    }
    
    return (
      <div className="Well" style={styles} >
        <Tab storeTransferImgSrc={this.props.appTransferImgSrc} />
      </div>
    )
  }
}

export default Store;
