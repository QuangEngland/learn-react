import { Row, Col, Card } from 'antd';
import '../../../App.css';

const { Meta } = Card;

const ListMovie = (props) => {

    if(props.listMovieProp.length !== 0 && !props.loading) {
        return (
                <Row style={{marginTop: '50px'}}>
                    <Col span={20} offset={2}> 
                        <Row gutter={[16, 24]} >
                            {props.listMovieProp.map((item,index) => (
                                <Col key={index} className="gutter-row" span={6} >
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                                    >
                                        <Meta title={item.title} description={item.overview} className={'hiden-text'}/>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
        )
    }

    return (
        <></>
    )

}

export default ListMovie;