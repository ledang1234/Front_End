import React, { Component } from 'react';

// IMPORT DATA
import { botStyle } from '../../Data/initStyle';

class Bikinibottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: botStyle
        }
    }
    changeStyle = () => {
        this.setState({
            style: {
                width: "500px",
                height: "1000px",
                // background: 'url("./images/clothes/botcloth1.png")',
                position: "absolute",
                top: "-30%",
                left: "-5%",
                zIndex: "2",
                transform: "scale(0.5)"
            }
        })
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    render() {
        let imgSrc;
        let newStyle = this.state.style;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            newStyle.background = `url(${imgSrc})`;
        } else {
            newStyle = botStyle;
        }
        return (
            <div className="bikinibottom" style={newStyle}></div>
        );
    }
}

export default Bikinibottom;
