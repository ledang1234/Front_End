import React, { Component } from 'react'

export default class Bikinibottom extends Component {
    constructor(props){
        super(props);
        this.state = {
            bikinibottomStyle :{
                width: "500px",
                height: "1000px",
                // background: 'url("./images/clothes/botcloth1.png")',
                background: 'url("./images/allbody/bikini_pants.png")',  
                position: "absolute",
                top: "-30%",
                left: "-5%",
                zIndex: "2",
                transform: "scale(0.5)"
            }
        }
    }
    changeStyle = ()=> {
        let imgSrc;
        let newStyle = this.state.bikinibottomStyle;
        if(this.props.item !== null){
            imgSrc = this.props.item.imgSrc_png;
            let background = `url(${imgSrc})`;
            newStyle = {...newStyle,background}
            this.setState({
                newStyle   
             })
        }
        
    }
    componentWillReceiveProps (){
        this.changeStyle();
    }
    
    render() {
       
        return (
            <div className="bikinibottom" style={this.state.bikinibottomStyle}>
                
            </div>
        )
    }
}
