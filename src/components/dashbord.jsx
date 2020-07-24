import React, { Component } from 'react';
import {Card,Row,Col,Divider} from 'antd'
import Progress from '../components/progress/index'
import {createFromIconfontCN} from '@ant-design/icons'
import '../assets/css/dashbord.scss'
const Iconfont=createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1953884_1fzjr5hm2kn.js',
})

class Dashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <Row gutter="20">
                <Col span="6">
                    <Card style={{textAlign:'center',fontSize:16}}>
                        <div>2020年07月</div>
                        <div className="charts">
                            <Progress type="circle" percent={10} width={200}
                                strokeLinecap="square"
                                strokeWidth="8" trailwidth="4"
                                trailColor="rgba(0, 98, 255, 1)" strokeColor="rgba(255, 197, 66, 1)"	
                                format={(percent) => 
                                    (
                                        <div>
                                            <div className="rest">59087</div>
                                            <div className="coin">目前金币数量</div>
                                        </div>
                                    )
                                }
                                />
                        </div>
                        <div className="data">
                            <span><i className="icon" style={{background:'rgba(0, 98, 255, 1)'}}></i>收入：<font style={{fontWeight:'bold'}}>51584</font></span>
                            <span><i className="icon" style={{background:'rgba(255, 197, 66, 1)'}}></i>支出：<font style={{fontWeight:'bold'}}>5222</font></span>
                        </div>
                    </Card>
                </Col>
                <Col span="18">
                    <Card style={{textAlign:'center',fontSize:16}} className="content-all">
                        <div className="content-top">
                            <Row>
                                <Col span="16">
                                    <div className="in-title">
                                        <span><i className="icon" style={{background:'rgba(0, 98, 255, 1)'}}></i>收入<font style={{fontWeight:'bold',fontSize:28,marginLeft:10}}>51584</font></span>
                                    </div>
                                    <div className="in-content">
                                        <Row>
                                            <Col className="in-item">
                                                <div>上期结余</div>
                                                <div className="item-num">2000</div>
                                            </Col>
                                            <Col className="in-item">
                                                <div>存入</div>
                                                <div className="item-num">2000</div>  
                                            </Col>
                                            <Col className="in-item">
                                                <div>购买</div>
                                                <div className="item-num">2000</div>
                                            </Col>
                                            <Col className="in-item">
                                                <div>分配获得</div>
                                                <div className="item-num">2000</div>
                                            </Col>
                                            <Col className="in-item">
                                                <div>回收</div>
                                                <div className="item-num">2000</div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span="8">
                                    <div className="in-title">
                                        <span><i className="icon" style={{background:'rgb(255, 197, 66)'}}></i>支出<font style={{fontWeight:'bold',fontSize:28,marginLeft:10}}>23</font></span>
                                    </div>
                                    <div className="in-content">
                                        <Row>
                                            <Col className="in-item">
                                                <div>分配</div>
                                                <div className="item-num">2000</div>
                                            </Col>
                                            <Col className="in-item">
                                                <div>被回收</div>
                                                <div className="item-num">2000</div>  
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Divider/>
                        <div className="content-bottom">
                            <div className="table-header">
                                <Row className="fb">
                                    <Col span="5" offset="5">总数</Col>
                                    <Col span="5">精选盘</Col>
                                    <Col span="5">标准盘</Col>
                                </Row>
                            </div>
                            <div className="table-body">
                                <Row>
                                    <Col span="5" className="table-title">
                                        <Iconfont type="icon-shouye" className="icon-index" style={{background:'rgb(61, 213, 152)'}}/>
                                        售盘
                                    </Col>
                                    <Col span="5" className="fb table-item" style={{color:'#0062ff'}}>8</Col>
                                    <Col span="5" className="fb table-item">1</Col>
                                    <Col span="5" className="fb table-item">7</Col>
                                </Row>
                                <Row>
                                    <Col span="5">
                                        <Iconfont type="icon-shouye" className="icon-index" style={{background:'rgb(255, 151, 74)'}}/>
                                        租盘
                                    </Col>
                                    <Col span="5" className="fb table-item" style={{color:'#0062ff'}}>8</Col>
                                    <Col span="5" className="fb table-item">100</Col>
                                    <Col span="5" className="fb table-item">70</Col>
                                </Row>
                            </div>
                        </div>
                        <div className="privateData">
                            <Row>
                                <Col span="5">即将到期：<span style={{color:'red'}}>2</span></Col>
                                <Col span="5">已过期楼盘：<span style={{color:'red'}}>4</span></Col>
                                <Col span="5">待付款楼盘：<span style={{color:'#026efe'}}>6</span></Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
         );
    }
}
 
export default Dashbord;