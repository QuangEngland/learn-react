import PropTypes from 'prop-types';


function Input (props) {
    return (
        <>
            <input onChange={props.getvalue} type={props.type} name={props.name} />
        </>
    )
}

Input.protoTypes = {

    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number

}

export default Input;