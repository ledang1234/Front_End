import React, { Component } from 'react';

//IMPORT DATA
import { topStyle } from '../../Data/initStyle';

class Bikinitop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: topStyle
        }
    }

    changeStyle = () => {
        this.setState({
            style: {
                width: "500px",
                height: "500px",
                // background: `url(${this.props.imgSrc_2})`,
                position: "absolute",
                top: "-9%",
                left: "-5%",
                zIndex: "3",
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
            newStyle = topStyle;
        }
        return (
            <div>
                <div className="bikinitop" style={newStyle}></div>;
            </div>
        );
    }
}

export default Bikinitop;

