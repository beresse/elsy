import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color:"black", fontSize:"100px"}}>   
                    directions_walk
                    </span>
                <p> Welcome to my amazing blog</p>
            </div>
        )
    };
}

export default Box;