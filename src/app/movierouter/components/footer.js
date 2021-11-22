import { Layout } from 'antd';
import React from "react";

const { Footer} = Layout;

const FooterMovie = () => {
    return (
        <>
            <Footer style={{ textAlign: 'center' }}>Quang England Page ©2021 Created by Quang Anh </Footer>
        </>
    )
}

export default React.memo(FooterMovie);