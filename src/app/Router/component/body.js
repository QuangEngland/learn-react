import { Layout} from 'antd';
import React from 'react';
import FooterAdmin from './footer';
import HeaderAdmin from './header';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerBody = styled.div`
    min-height: 83vh;
    padding: 24px;
    background: #fff;
`
const { Content} = Layout;

const BodyAdmin = (props) => {
    return (
        <> 
            <HeaderAdmin />
                <Content>
                    <ContainerBody>
                        {props.children}
                    </ContainerBody>
                </Content>
            <FooterAdmin />
        </>
    )
}

BodyAdmin.propTypes = {
    children: PropTypes.node.isRequired
}

export default React.memo(BodyAdmin) ;