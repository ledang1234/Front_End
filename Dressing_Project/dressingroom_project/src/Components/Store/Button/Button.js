import React, { Component } from 'react';

//IMPORT COMPONENT

class Button extends Component {
    render() {
        const styles = {
            // button.btn
            buttonBtnElement: {
              width: "141px"
            }
          }
          
        return (
            <button type="button" className="btn btn-default" href={`#${this.props.tabName}`} data-toggle="tab" style={styles.buttonBtnElement}>
                <div className="hidden-xs">{this.props.showName}</div>
            </button>
        )
    }
}

export default Button;
