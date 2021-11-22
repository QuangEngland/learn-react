import React from "react";
import styled from "styled-components";

const Button = styled.button `
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    margin 20px 0;
    border-radius: 40px;
    cursor: pointer;
`

class ButtonCounter extends React.Component {
    render() { 
        return (
            <>
                <Button onClick={() =>this.props.click()} type={this.props.type}>{this.props.children}</Button>
            </>
        )
    }
}

export default ButtonCounter;