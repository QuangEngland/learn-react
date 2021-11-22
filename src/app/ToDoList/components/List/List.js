import React from "react";
// import styled from "styled-components";

class List extends React.Component {
    render() { 
        return (
            <>
                <ul>
                    {this.props.listWork.map((item,index) => (
                        <li key={index}> 
                            <input type="checkbox" onClick={() => this.props.listDone(item.id_work)} />

                            <span className={`nameWork ${item.status_work ? 'doneWork' : ''} `} style={{margin: '0 0 0 20px'}}>{item.name_work}</span>  
                            <button onClick={() => this.props.del(item.id_work)} style={{margin: '0 0 0 20px'}}>xoa</button>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default List;