import PropTypes from 'prop-types';


function ButtonAdd (props) {
    return (
        <>
            <button onClick={() => props.click()} type={props.type}>{props.children}</button>
        </>
    )
}

ButtonAdd.protoTypes = {

    type: PropTypes.string,
    children: PropTypes.node
}

export default ButtonAdd;