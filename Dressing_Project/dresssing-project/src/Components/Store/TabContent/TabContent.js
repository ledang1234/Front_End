import React, { Component } from 'react'
import Tabpane from './Tabpane/Tabpane'
import ButtonArray from  "./../../../Data/ButtonArray"


export default class TabContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            ButtonArray :ButtonArray
        }
    }
    render() {
        let elmTappane = this.state.ButtonArray.map((button, index) => {
            return <Tabpane 
            key={index} 
            button={button}
            imgSrcTransferTapcontent={this.props.imgSrcTransferStore}
            
            />
        })
        return (
            <div className="tab-content alo">
               {elmTappane}
            </div>
        )
    }
}
