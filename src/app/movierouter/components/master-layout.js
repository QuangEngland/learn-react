import React from 'react';
import HeaderMovie from './header';
import FooterMovie from './footer';
import { Layout } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SiteLayout = styled.div`
    min-height: 70vh;
    padding: 24px;
    background: #fff;
`
const {Content} = Layout;

const MasterLayoutMovie = (props) => {
    return (
        <Layout>
            <HeaderMovie />
                <Content >
                    <SiteLayout>
                        {props.children}
                    </SiteLayout>
                </Content>
            <FooterMovie />
        </Layout>
    )
}

MasterLayoutMovie.propsTypes = {
    children: PropTypes.node.isRequired
}

export default React.memo(MasterLayoutMovie)