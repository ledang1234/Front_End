import React, { Component } from 'react'
import TabContent from "./TabContent/TabContent"

export default class Store extends Component {
    render() {
        return (
            <div className="store">
                <TabContent imgSrcTransferStore={this.props.imgSrcTransferApp}/>
            </div>
        )
    }
}
