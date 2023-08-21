import React, { Component } from 'react';

//IMPORT DATA
import { hairStyle } from '../../Data/initStyle';

class Hairstyle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: hairStyle
        }
    }

    changeStyle = () => {
        this.setState({
            style: {
                width: "1000px",
                height: "1000px",
                // background: 'url("./images/hairstyle/hairstyle2.png")',
                position: "absolute",
                top: "-75%",
                right: "-57%",
                transform: "scale(0.15)",
                zIndex: "4"
            }
        })
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    render() {
        const style = {
            width: "1000px",
            height: "1000px",
            background: 'url("./images/hairstyle/hairstyle2.png")',
            position: "absolute",
            top: "-75%",
            right: "-57%",
            transform: "scale(0.15)",
            zIndex: "4"
        }
        let imgSrc;
        let newStyle = this.state.style;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            let background = `url(${imgSrc})`;
            // newStyle.background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }
        } else {
            newStyle = hairStyle;
        }
        return (
            <div>
                <div className="hairstyle" style={newStyle}></div>;
            </div>
        );
    }
}

export default Hairstyle;

