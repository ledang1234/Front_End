import React, { Component } from 'react';

//IMPORT DATA
import { handbagStyle } from '../../Data/initStyle';

class Necklace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: handbagStyle //CSS của Handbag và Necklace giống nhau
        }
    }

    changeStyle = () => {
        this.setState({
            style: {
                width: "500px",
                height: "1000px",
                // background: 'url("./images/handbags/handbag1.png")',
                position: "absolute",
                bottom: "-40%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: "4"
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
            let background = `url(${imgSrc})`;
            // newStyle.background = `url(${imgSrc})`;
            newStyle = {...newStyle, background}
        } else {
            newStyle = handbagStyle;
        }
        return (
            <div>
                <div className="handbag" style={newStyle}></div>;
            </div>
        );
    }
}

export default Necklace;

