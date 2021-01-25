import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color:this.props.color, fontSize:"100px"}}>   
                    {this.props.icon}
                    </span>
                <p> Welcome to my amazing blog</p>
            </div>
        )
    };
}

export default Box;