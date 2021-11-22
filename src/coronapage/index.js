import React from 'react';
import {Row, Col} from 'antd';
import Global from './components/Global';
import Countries from './components/Countries';
import CoronaProvider from './context/coronaprovider';

class PageCorona extends  React.PureComponent {
    render() {
        return (
            <>
                    <Row>
                        <Col span={20} offset={2}> 
                            <CoronaProvider>
                                <Global />
                                <Countries />
                            </CoronaProvider>
                        </Col>
                    </Row>
            </>
        )
    }
}

export default PageCorona;
