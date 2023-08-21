import React, { Component } from "react";
import { topStyle } from '../../../Data/initStyle';

export default class Bikinitop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   bikinitopStyle: {
    //     width: "500px",
    //     height: "500px",
    //     // background: `url(${this.props.imgSrc_2})`,
    //     background: 'url("./images/allbody/bikini_bra.png")',  
    //     position: "absolute",
    //     top: "-9%",
    //     left: "-5%",
    //     zIndex: "3",
    //     transform: "scale(0.5)"
    //   }
        bikinitopStyle: topStyle
    };
  }

//   changeStyle = () => {
//       this.setState ({
//         bikinitopStyle: {
//             width: "500px",
//             height: "500px",
//             // background: `url(${this.props.imgSrc_2})`,
//             // background: `url(${this.props.item.imgSrc_png})`,
//             position: "absolute",
//             top: "-9%",
//             left: "-5%",
//             zIndex: "3",
//             transform: "scale(0.5)"
//           }
//       })
//   }
//   componentWillReceiveProps(){
//     this.changeStyle();
// }

  render() {

    // let imgSrc;
    // let newStyle = this.state.bikinitopStyle;
    // if(typeof this.props.item !== null){
    //     imgSrc = this.props.item.imgSrc_png;
    //     let background= `url(${imgSrc})`
    //     newStyle = {...newStyle,background}
    // }else{
    //     newStyle = topStyle;
    // }
    return <div className="bikinitop" style={this.state.bikinitopStyle} ></div>;
  }
}
