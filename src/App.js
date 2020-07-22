import React, { Component } from 'react';
import './App.scss'
import { Layout, Menu } from 'antd';
import {createFromIconfontCN,MailOutlined, UserOutlined, LaptopOutlined, NotificationOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Content, Sider } = Layout;
const Iconfont=createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
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
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          
          <Layout>
            
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
            <Layout style={{ padding: '0' ,background:'rgba(243, 243, 245, 1)'}}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content<br/>
                qwqewqre
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }

}

export default App;
