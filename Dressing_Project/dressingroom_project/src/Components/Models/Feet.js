import React, { Component } from 'react';

// IMPORT DATA
import { feetStyle } from '../../Data/initStyle'

class Feet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // footleftClass: footleftStyle,
            // footrightClass: footrightStyle,
            feet: feetStyle
        }
    }

    changeStyle = () => {
        this.setState({
            width: "500px",
            height: "1000px",
            // background: 'url("./images/shoes/shoes1.png")',
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1"
        })
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }
    render() {
        let imgSrc;
        let newStyle = this.state.feet;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            console.log(newStyle);
            let background = `url(${imgSrc})`;
            // newStyle.background = `url(${imgSrc})`; 
            newStyle = {...newStyle, background} // Dùng spread operator để xử lý 'Cannot assign to read only property of object '#<Object>''
        } else {
            newStyle = feetStyle;
        }
        return (
            <div>
                <div className="feet" style={newStyle}></div>
                {/* <div className="feetleft" style={this.state.footleftClass}></div>
                <div className="feetright" style={this.state.footrightClass}></div> */}
            </div>
        );
    }
}

export default Feet;
