import { Input, Row, Col} from 'antd';
const { Search } = Input;

const InputSearch = (props) => {
    return(
        <>
            <Row>
                <Col span={18} offset={3}>
                    <Search placeholder="Name Movie ..." enterButton="Search" size="large" loading={props.loading} onSearch={val => props.search(val)} />
                </Col>
            </Row>
        </>
    )

}

export default InputSearch;

