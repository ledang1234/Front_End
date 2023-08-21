import React, { Component } from 'react'
import ButtonArray from "./../../Data/ButtonArray"
import Button from "./Button/Button"
import $ from "jquery"

export default class BtnGroup extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            ButtonArray : ButtonArray
        }
    }
    
    render() {
        $(document).ready(function(){
            $(".btn-pref .btn").click(function(){
                $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
                $(this).removeClass("btn-default").addClass("btn-primary")
            })
        });

        let eleButton = this.state.ButtonArray.map((buttonItem, index)=>{
            return <Button key={index} buttonItem={buttonItem}  />
        })
        return (
            <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group">
                {eleButton}
            </div>
        )
    }
}
