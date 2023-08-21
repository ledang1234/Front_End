import React, { Component } from 'react';

class Body extends Component {
    render() {
        const styles = {
            // .body
            bodyClass: {
                width: "250px",
                height: "500px",
                background: 'url(./images/allbody/bodynew.png)',
                position: "absolute",
                top: "12%",
                left: "22%"
            }
        }

        return (
            <div className="body" style={styles.bodyClass}></div>
        );
    }
}

export default Body;
