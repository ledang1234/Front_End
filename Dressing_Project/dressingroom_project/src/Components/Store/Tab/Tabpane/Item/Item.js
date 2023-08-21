import React, { Component } from 'react';

// IMPORT COMPONENT
import Itembutton from './Itembutton';

// IMPORT DATA
import dressingRoom from '../../../../../Data/GetData';

class TabPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dressingRoom,
            imgSrc: null
        }
    }

    itemTranserImgSrc = (imgSrc) => {
        this.setState({
            imgSrc: imgSrc
        })
    }
    render() {

        return (
            <div className="col-md-3" >
                <div className="card text-center">
                    <img src={this.props.imgSrc_jpg} alt={this.props.name} />
                    <h4><b>{this.props.name}</b></h4>
                    <Itembutton
                        imgSrc_png={this.props.imgSrc_png}
                        item={this.props.item}
                        itemTransferImgSrc={this.props.tabpaneTransferImgSrc}
                    />
                </div>
            </div>
        )
    }
}

export default TabPane;
