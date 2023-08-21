import React, { Component } from 'react'

export default class Hairstyle extends Component {
    render() {
        const style ={
            hairstyleClass:{
                width: "1000px",
                height: "1000px",
                // background: 'url("./images/hairstyle/hairstyle2.png")',
             
                position: "absolute",
                top: "-75%",
                right: "-57%",
                transform: "scale(0.15)",
                zIndex: "4"
            }
        }
        return (
            <div className="hairstyle" style={style.hairstyleClass}>
                
            </div>
        )
    }
}
