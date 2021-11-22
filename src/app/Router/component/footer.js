import React from 'react';
import styled from 'styled-components';
import { Layout} from 'antd';

const { Footer } = Layout;

const FooterAdmin = (props) => {
    return (
        <> 
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </>
    )
}

export default React.memo(FooterAdmin) ;