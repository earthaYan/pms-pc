import React, { Component } from 'react';
import './App.scss'
import { Layout, Menu,Dropdown } from 'antd';
import {createFromIconfontCN, UserOutlined, LaptopOutlined, NotificationOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import {BrowserRouter as Router,Route, Redirect,Switch} from "react-router-dom";
import menu from './assets/js/menu'
import HomePage from './views/homepage'
import PropertyIndex from './views/property/index'
import PropertyMessages from './views/property/messages'
import PropertyAgents from './views/property/agents'
const { Header, Content, Sider } = Layout;
const Iconfont=createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1953884_1fzjr5hm2kn.js',
});
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      collapsed:true
    }
  }
  toggle=()=>{
    this.setState({
      collapsed:!this.state.collapsed
    })
  }
  render(){
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo">
              <img src="/assets/Logo_white.svg"/>
            </div>
            <Menu theme="dark"  mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">楼盘管理</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            <div className="right-my">
              <div className="download">
                <Iconfont type="icon-phone" className="icon" style={{transform: 'scale(0.6)'}}/>
              </div>
              <div className="text">
                <span>下载APP</span>
              </div>
              <div className="info">
                <Iconfont type="icon-xiaoxi1" className="icon"  style={{transform: 'scale(0.7)'}}/>
              </div>
              <div className="avatar">
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              </div>
              <div className="userName">
                <span>我是总行</span>
              </div>
              <div className="drop">
                <Dropdown overlay={menu} placement="bottomRight" arrow overlayStyle={{borderRadius:'50%'}}>
                  <Iconfont type="icon-zhankaigengduo" className="icon"  style={{transform: 'scale(0.6)'}}/>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Layout className="main-app" style={{minHeight:'auto'}} >
            <Sider width={140} collapsible trigger={null} collapsed={this.state.collapsed}>
              <Menu mode="inline" defaultSelectedKeys={['9']}  style={{ height: '100%', borderRight: 0 }}>
                  <Menu.Item key="9"  icon={<UserOutlined/>}>option9</Menu.Item>
                  <Menu.Item key="10" icon={<LaptopOutlined/>}>option10</Menu.Item>
                  <Menu.Item key="11" icon={<NotificationOutlined/>}>option11</Menu.Item>
                  <Menu.Item key="12" icon={<UserOutlined/>} >option12</Menu.Item>
              </Menu>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            </Sider>
            <Layout style={{ padding: '20px'  }}>
              <Content
                className="site-layout-background"
                style={{
                  padding:0,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Router>
                  <Route exact path="/" render={()=>(
                    <Redirect to="/homepage"/>
                  )}></Route>
                  <Route path="/homepage" exact component={HomePage}></Route>
                  <Route>
                    <Router>
                      <Switch>
                        <Route path="/property/index" exact component={PropertyIndex}></Route>
                        <Route path="/property/messages" exact component={PropertyMessages}></Route>
                        <Route path="/property/agent" exact component={PropertyAgents}></Route>
                      </Switch>
                    </Router>
                  </Route>
                </Router>

              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }

}

export default App;
