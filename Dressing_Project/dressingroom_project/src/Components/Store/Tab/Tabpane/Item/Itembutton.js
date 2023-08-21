import React, { Component } from 'react';

class Itembutton extends Component {

    // callback function
    buttonTransferImgSrc = () => {
        this.props.itemTransferImgSrc(this.props.item);
    }

    render() {
        return (
            <button onClick={this.buttonTransferImgSrc.bind(this)} >Thử đồ</button>
        )
    }
}

export default Itembutton;
