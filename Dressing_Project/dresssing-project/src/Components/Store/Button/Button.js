import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
     <div className="btn-group" role="group">
           <button type="button" className="btn btn-primary" href={`#${this.props.buttonItem.tabName}`} data-toggle="tab" >
            <div className="hidden-xs">{this.props.buttonItem.showName}</div>
        </button>
     </div>
        )
    }
}
