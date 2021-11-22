import React from "react";
import styled from "styled-components";

const InputStyle = styled.input `
    width: 50%;
    height: 50px;
    margin: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
`

class Input extends React.Component {
    render() { 
        return (
            <>
                <InputStyle value={this.props.val} type="text" onChange={this.props.change} />
            </>
        )
    }
}

export default Input;