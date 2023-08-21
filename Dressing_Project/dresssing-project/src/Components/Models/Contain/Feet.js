import React, { Component } from 'react'

export default class Feet extends Component {
    render() {
        const style = {
           feetClass: {
            width: "500px",
            height: "1000px",
            // background: 'url("./images/shoes/shoes1.png")',
            
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1"
           }
        }
        return (
            <div className="feet" style={style.feetClass}>
                
            </div>
        )
    }
}
