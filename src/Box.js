import React, { Component } from 'react';
import { choice } from './Choice';
import './Box.css';


class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxcolor: choice(this.props.colors)  // state is immutable, so this statement only execute once.
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        this.setState((st) => {
                let idx = this.props.colors.indexOf(st.boxcolor);
                var newArray = [].concat(this.props.colors);
                newArray.splice(idx, 1);
                let newColor = choice(newArray);
                return {
                    boxcolor: newColor
                }
        })
    } 
    handleChange(e){
        this.changeColor();
    }

    render(){
        return(
            <div className="box" style={{backgroundColor: this.state.boxcolor}} onClick={this.handleChange}>
            </div>
        )
    }
}

export default Box;