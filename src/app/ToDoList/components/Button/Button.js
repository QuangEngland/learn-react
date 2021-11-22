import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = styled.button `
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    margin 20px;
    border-radius: 40px;
    cursor: pointer;
`

class ButtonAdd extends React.Component {
    render() { 
        return (
            <>
                <Button onClick={() => this.props.click()}>ADD</Button>
            </>
        )
    }
}
export default ButtonAdd;