// import PropTypes from 'prop-types';


function List (props) {
    return (
        <>
            <ul>
                {props.listWork.map((item,index) => (
                    <li key={index} >
                        <input type="checkbox" onClick={() => props.done(item.name_id)} />
                        <span className={`Name_Work ${item.name_status ? 'doneNhe' : ''} `}>{item.name_work}</span>
                        <button onClick={() => props.del(item.name_id)}>DELL</button>
                    </li>
                )) }
            </ul>
        </>
    )
}


export default List;