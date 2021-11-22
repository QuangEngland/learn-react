import PropTypes from 'prop-types';


function Result (props) {
    return (
        <>
            <h1>{props.result}</h1>
        </>
    )
}

Result.protoTypes = {

    result: PropTypes.string

}

export default Result;