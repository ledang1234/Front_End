import React, { Component } from 'react';

class Model extends Component {
    render() {
        const styles = {
            // .model
            modelClass: {
                width: "60px",
                height: "77px",
                background: 'url("./images/model/1000new.png")',
                position: "absolute",
                top: "5%",
                left: "45.5%",
                zIndex: "1"
            }
        }

        return (
            <div className="model" style={styles.modelClass}></div>
        );
    }
}

export default Model;
