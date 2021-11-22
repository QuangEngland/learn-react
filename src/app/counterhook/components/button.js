import React from "react";
import PropTypes from 'prop-types';
const Button = (props) => {
    return (
        <>
            <button type={props.type} onClick={() => props.click()} >{props.children}</button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    click: PropTypes.func
}

export default Button;