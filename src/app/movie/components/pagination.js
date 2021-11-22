import { Pagination , Row, Col } from 'antd';

const PaginationMovie = (props) => {
    return (
        <>
            <Row>
                <Col style={{margin: '50px auto 0'}}>
                    <Pagination        
                        pageSize={20}             
                        current={props.curentPage} 
                        total={props.totalItem}  
                        onChange={e => props.change(e)}
                    />
                </Col>  
            </Row>
        </>
    )
}

export default PaginationMovie;