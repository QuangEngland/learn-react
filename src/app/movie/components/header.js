import { Row, Col, Avatar, Image } from "antd";
import React, {useContext} from "react";
import MovieContext from '../context/index';

const HeaderMovie = () => {

    const infor = useContext(MovieContext);
    console.log(infor)
    return(
        <>
           <Row style={{margin: '20px 0'}}>
                <Col span={20}></Col>
                <Col span={4}>
                    <span style={{margin: '0 5px'}}>{infor.email}</span>
                    <Avatar src={
                        <Image
                            src={infor.avatar}
                        />
                    }/>
                </Col>
            </Row> 
        </>
    )
}

export default React.memo(HeaderMovie);