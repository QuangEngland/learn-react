import PropTypes from 'prop-types';


function Button (props) {
    return (
        <>
            <button onClick={() => props.result()} type={props.type}>{props.children}</button>
        </>
    )
}

Button.protoTypes = {

    type: PropTypes.string,
    children: PropTypes.node,
    result: PropTypes.func.isRequired
}

export default Button;