import React, { Component } from 'react'

export default class Necklaces extends Component {
    render() {
        const  style= {
            necklacesStyle :{
                width: "500px",
                height: "1000px",
                // background: 'url("./images/handbags/handbag1.png")',
                position: "absolute",
                bottom: "-40%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: "4"
            }
        }
        return (
            <div className="handbag" style={style.necklacesStyle}>
                
            </div>
        )
    }
}
