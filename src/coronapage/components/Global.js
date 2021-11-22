import React from "react";
import { Card, Col, Row } from 'antd';
import CoronaContext from '../context/MyContext';
import { Skeleton } from 'antd';

class Global extends React.PureComponent {
    render() {
        return(
            <>
                <CoronaContext.Consumer>
                    {context => {
                        console.log(context);
                        if (context.loading || context.virus.length === 0) {
                            return <Skeleton active />
                        }
                        else {
                            return (
                                <div className="site-card-wrapper">
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card title="Confirmed" bordered={true}>
                                                <p> New Confirmed: {context.virus.Global.NewConfirmed} </p>
                                                <p> Total Confirmed: {context.virus.Global.TotalConfirmed}</p>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card title="Deaths" bordered={true}>
                                                <p> New Deaths:  {context.virus.Global.NewDeaths}</p>
                                                <p> Total Deaths:  {context.virus.Global.TotalDeaths}</p>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card title="Recovered" bordered={true}>
                                                <p> New Recovered:  {context.virus.Global.NewRecovered}</p>
                                                <p> Total Recovered:  {context.virus.Global.TotalRecovered}</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div> 
                            )
                        }

                    } 
                    }
                </CoronaContext.Consumer>
            </>
        )
    }
}

export default Global;

 