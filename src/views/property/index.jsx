import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import  { Row,Col, Cascader, Select, Input, Button ,DatePicker, Divider, Tooltip, Table} from 'antd'
import Icon, {SearchOutlined} from '@ant-design/icons'
import {createFromIconfontCN} from '@ant-design/icons'
import '../../assets/css/property/propertyIndex.scss'
const {Option}=Select
const Iconfont=createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1953884_hctph12ypy.js'
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
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    { title: 'Column 9', dataIndex: 'address', key: '9' },
    { title: 'Column 10', dataIndex: 'address', key: '10' },
    { title: 'Column 11', dataIndex: 'address', key: '11' },
    { title: 'Column 12', dataIndex: 'address', key: '12' },
    { title: 'Column 13', dataIndex: 'address', key: '13' },
    { title: 'Column 14', dataIndex: 'address', key: '14' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
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
                    {
                      false?(<div className="index-more" >
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
                  </div>):null
                    }
                    <Divider style={{borderColor:'#e2e2ea'}}/>
                </div>
                <div className="index-menu">
                  <span className="menu-left">
                        <Tooltip title="刊登楼盘">
                          <Iconfont className="icon" type="icon-kandengloupan1-copy"/>
                        </Tooltip>
                        <Tooltip title="草稿箱">
                          <Iconfont className="icon" type="icon-caogaoxiang1-copy"/>
                        </Tooltip>
                        <Tooltip title="修改放盘人">
                          <Iconfont className="icon" type="icon-xiugaifangpanren"/>
                        </Tooltip>
                        <Tooltip title="显示">
                          <Iconfont className="icon" type="icon-xianshi"/>
                        </Tooltip>
                        <Tooltip title="隐藏">
                          <Iconfont className="icon" type="icon-yincang"/>
                        </Tooltip>
                        <span className="line"></span>
                        <Tooltip title="复制">
                          <Iconfont className="icon" type="icon-fuzhi"/>
                        </Tooltip>
                        <Tooltip title="修改">
                          <Iconfont className="icon" type="icon-xiugai"/>
                        </Tooltip>
                        <Tooltip title="续期">
                          <Iconfont className="icon" type="icon-xuqi"/>
                        </Tooltip>
                        <Tooltip title="付款">
                          <Iconfont className="icon" type="icon-fukuan"/>
                        </Tooltip>
                        <Tooltip title="楼盘状态">
                          <Iconfont className="icon" type="icon-loupanzhuangtai"/>
                        </Tooltip>
                        <Tooltip title="删除">
                          <Iconfont className="icon" type="icon-shanchu1"/>
                        </Tooltip>
                        <Tooltip title="重新置顶">
                          <Iconfont className="icon" type="icon-zhiding"/>
                        </Tooltip>
                  </span>
                  <span className="menu-right">
                    {/* <Tooltip title="自订栏目">
                      <Iconfont  className="icon mode" type="icon-shaixuanx"/>
                    </Tooltip> */}
                    <Tooltip title="列表">
                      <Iconfont className="icon mode" type="icon-liebiaomoshi-copy"/>
                    </Tooltip>
                    <Tooltip title="大图">
                      <Iconfont className="icon mode" type="icon-datumoshi"/>
                    </Tooltip>
                  </span>
                  <span className="menu-right2">
                    <span>售价<Iconfont className="icon sort" type="icon-morenpaixu"/></span>
                    <span>租价<Iconfont className="icon sort" type="icon-morenpaixu"/></span>
                    <span>到期时间<Iconfont className="icon sort" type="icon-morenpaixu"/></span>
                  </span>
                </div>
                <div className="index-table">
                  <div className="text-list">
                    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }}>

                    </Table>
                  </div>
                  <div className="img-list">

                  </div>
                </div>
            </div>
         );
    }
}
 
export default PropertyManager;