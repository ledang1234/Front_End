import React, { Component } from 'react'
import {connect} from "react-redux"

 class Search extends Component {
    render() {
        return (
            <input
            type="text"
            className="form-control mb-3 w-50"
            onChange = {e=> {
                this.props.getKeyword(e.target.value);
            }}
          />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getKeyword: keyword => {
            let action = {
                type:"SEARCH",
                keyword
            }
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps) (Search);