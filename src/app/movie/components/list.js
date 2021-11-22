import { Row, Col, Card, Spin } from 'antd';
import '../../../App.css';

const { Meta } = Card;

const ListMovie = (props) => {
    if(props.loading || props.listMovie.length === 0) {
        return(
            <Row>
                <Col span={28} style={{margin: '40vh auto'}} >    
                    <Spin  tip="Loading hihi..." size={'large'} />
                </Col>
            </Row>
        )
    }
    return (
        <>
            <Row style={{marginTop: '50px'}}>
                <Col span={20} offset={2}> 
                    <Row>
                        {props.listMovie.map((item,index) =>(
                            <Col key={index} className="gutter-row" span={6} style={{marginBottom: '50px'}} >
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                                >
                                    <Meta title={item.original_title} description={item.overview} className={"hiden-text"} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default ListMovie;