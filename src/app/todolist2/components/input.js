import PropTypes from 'prop-types';


function InputList (props) {
    return (
        <>
            <input onChange={props.change} value={props.value} type={props.type}  />
        </>
    )
}

InputList.protoTypes = {

    type: PropTypes.string
}

export default InputList;