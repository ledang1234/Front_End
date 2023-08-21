import React, { Component } from 'react'
import dressingRoom from "../../../../../Data/ChosenItems";
import Itembutton from './Itembutton';


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dressingRoom,
            imgSrc: null
        }
    }

    imgSrcTranferItem = (imgSrc) => {
        this.setState({
            imgSrc: imgSrc
        })
    }
    
    render() {
        return (
            <div className="item col-md-3" >
                {/* <h3>{this.props.button.showName}</h3> */}
                <img src={this.props.item.imgSrc_jpg} alt=""/> 
                <h4>{this.props.item.name}</h4>
                {/* <button className="btn btn-default"  onClick={this.imgSrcTranferItem.bind(this)}> Thử dồ</button> */}
                <Itembutton 
                imgSrc_png={this.props.imgSrc_png}
                item={this.props.item}
                itemTransferImgSrc={this.props.tabpaneTransferImgSrc}
                />
            </div>
        )
    }
}
