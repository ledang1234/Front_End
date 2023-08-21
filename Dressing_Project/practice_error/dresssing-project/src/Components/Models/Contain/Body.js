import React from 'react';

const Body = () => {
    const style = {
      bodyClass: {
        width: "250px",
        height: "500px",
        background: 
          'url("./images/allbody/bodynew.png")',
        position: "absolute",
        top:"12%",
        left:"22%"
      }
    };
    return (
        
        <div className="body" style={style.bodyClass}>
            
        </div>
    );
};

export default Body;