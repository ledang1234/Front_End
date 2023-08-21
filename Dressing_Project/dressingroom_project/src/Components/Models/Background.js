import React, { Component } from 'react';

//IMPORT DATA
import { backgroundStyle } from '../../Data/initStyle';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: backgroundStyle
        }
    }

    render() {
        let imgSrc;
        let newStyle = this.state.style;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            let backgroundImage = `url(${imgSrc})`;
            // newStyle.background = `url(${imgSrc})`;
            newStyle = {...newStyle, backgroundImage}
        } else {
            newStyle = backgroundStyle;
        }
        return (
            <div>
                <div id="background" className="background" style={newStyle}></div>;
            </div>
        );
    }
}

export default Background;

