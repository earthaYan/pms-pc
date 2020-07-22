import React, { Component } from 'react';
import '../assets/css/homepage.scss'
import {Card,Row,Col,Progress} from 'antd'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="wrapper">
                <div className="company">
                    <h2>鲁能国际</h2>
                    <div>
                        <Row gutter="20">
                            <Col span="6">
                                <Card style={{textAlign:'center',fontSize:16}}>
                                    <div>2020年07月</div>
                                    <div>
                                        <Progress type="circle" percent={70} width={280}
                                            trailColor="rgba(0, 98, 255, 1)" strokeColor="rgba(255, 197, 66, 1)"	
                                            format={percent => `${percent} Days`} />
                                    </div>
                                    <div className="data">
                                        <span><i style={{background:'rgba(255, 197, 66, 1)'}}></i>收入：51584</span>
                                        <span><i style={{background:'rgba(0, 98, 255, 1)'}}></i>支出：8453</span>
                                    </div>
                                </Card>
                            </Col>
                            <Col span="18">右边</Col>
                        </Row>
                    </div>
                </div>
                <div className="private">
                    
                </div>
            </div>
        );
    }
}
 
export default HomePage;