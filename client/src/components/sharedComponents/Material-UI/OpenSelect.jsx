import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class OpenSelect extends React.Component {
    state = { counter: 1 };

    handleIncrement = () => {
        this.setState(state => ({ counter: state.counter + 1 }));
    };

    handleDecrement = () => {
        if(this.state.counter>1){
            this.setState(state => ({ counter: state.counter - 1 }));
        }
    };
    render() {


        return (
            <ButtonGroup size="small" aria-label="small outlined button group" style={{paddingLeft:"8px"}}>
                <Button onClick={this.handleDecrement}>-</Button>
                <Button >{this.state.counter}</Button>
                <Button onClick={this.handleIncrement}>+</Button>
            </ButtonGroup>
        );
    }
}

export default OpenSelect;