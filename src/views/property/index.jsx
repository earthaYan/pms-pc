import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import  { Row,Col, Cascader, Select, Input, Button ,DatePicker, Divider} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import {createFromIconfontCN} from '@ant-design/icons'
import '../../assets/css/property/propertyIndex.scss'
const {Option}=Select
const Iconfont=createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1953884_zq8mi7mxsgo.js'
})
const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hanzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]
class PropertyManager extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onChange(value) {
        console.log(value);
    }
    render() { 
        return ( 
            <div className="property-index">
                <div className="idnex-head">
                    <h2>楼盘管理</h2>
                    <div className="index-filter">
                        <Row>
                            <Col span="24">
                                <Cascader className="w150 filter" placeholder="组织" options={options} onChange={this.onChange} changeOnSelect />
                                <Select className="w150 filter" placeholder="全部楼盘">
                                    <Option>全部楼盘</Option>
                                    <Option>个人放盘</Option>
                                    <Option>个人代理放盘</Option>
                                </Select>
                                <Select className="w100 filter" placeholder="租售">
                                    <Option>全部</Option>
                                    <Option>放售</Option>
                                    <Option>放租</Option>
                                </Select>
                                <Input className="w280 filter" placeholder="放盤人、樓盤編號、物業編號、屋苑"  suffix={<SearchOutlined />}/>
                                <Select className="w100 filter" placeholder="展示状态">
                                    <Option>全部</Option>
                                    <Option>显示</Option>
                                    <Option>隐藏</Option>
                                </Select>
                                <span className="btn-filter">
                                    <Button type="danger">搜寻</Button>
                                    <Button style={{background:'#bbb',color:'#fff'}}>重置</Button>
                                    <Button style={{background:'#E1C999',color:'#fff'}}>更多</Button>
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <div className="index-more">
                        <Row>
                          <Col span="24">
                            <Select className="w150 filter" placeholder="楼盘类型">
                              <Option>租盘</Option>
                              <Option>售盘</Option>
                            </Select>
                            <Select className="w150 filter" placeholder="付款状态">
                              <Option>未付款</Option>
                              <Option>已付款</Option>
                            </Select>
                            <Select className="w150 filter" placeholder="地区">
                              <Option>上海</Option>
                            </Select>
                            <Select className="w150 filter" placeholder="楼市片区">
                              <Option>中寰</Option>
                            </Select>
                            <Select className="w150 filter" placeholder="放盘状态">
                              <Option>已售</Option>
                            </Select>
                            <Select className="w150 filter" placeholder="放盘方式">
                              <Option>全部</Option>
                            </Select>
                            <Select className="w150 filter" placeholder="VR">
                              <Option>全部</Option>
                            </Select>
                          </Col>
                          <Col span="24">
                            <span>放盘时间：</span>
                            <DatePicker  placeholder="选择日期" className="w150 picker"/> 
                              —
                            <DatePicker  placeholder="选择日期" className="w150 picker"/> 
                            <span>到期时间：</span>
                            <DatePicker  placeholder="选择日期" className="w150 picker"/> 
                              —
                            <DatePicker  placeholder="选择日期" className="w150 picker"/> 
                          </Col>
                        </Row>
                    </div>
                    
                </div>
                <Divider style={{borderColor:'#e2e2ea'}}/>
            </div>
         );
    }
}
 
export default PropertyManager;