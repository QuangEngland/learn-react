import React from "react";
import PropTypes from 'prop-types';
const Couter = (props) => {
    return (
        <>
            <h1>{props.count}</h1>
        </>
    )
}

Couter.propTypes = {
    count: PropTypes.number
}

export default Couter;