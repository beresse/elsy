import React from "react";

class Box extends React.Component {
    render() {
        if (this.props.toto === "water") {
            return (<div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ color: this.props.color, fontSize: "100px" }}>
                    {this.props.icon}

                </span>

                <p>{this.props.value}</p>
                <p>{this.props.unit}</p>
            </div>)

        } else {
            return (<div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ color: this.props.color, fontSize: "100px" }}>
                    {this.props.icon}

                </span>
                <div>
                    <input type="range"
                        min={this.props.min}
                        max={this.props.max}
                        value={this.props.value}
                        onInput={this.props.onChange}>
                        
                        </input>
                </div>



                <p>{this.props.value}</p>
                <p>{this.props.unit}</p>
            </div>)

        }

    };
}

export default Box;