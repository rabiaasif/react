import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import axios from 'axios';
import Home from "./Home";
import Stuff from "./Stuff";
import User from "./User";
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;




class App extends Component {
    
   
  render() {
    
    return (





    


 


 
  

      <div>


 <Layout className="layout" style={{height:"100vh"}}>
    
    <Content style={{ padding: '0 50px' }}>
    
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>


<HashRouter>
        <div>
          <div >
          <Col span={8}></Col>
            
          </div>
          <ul className="header">
            <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><li><NavLink to="/">Home</NavLink></li></Menu.Item>
        <Menu.Item key="2"><li><NavLink to="/search">Search</NavLink></li></Menu.Item>
        <Menu.Item key="3"><li><NavLink to="/user">Create User</NavLink></li></Menu.Item>
      </Menu>
            
            
            
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/search" component={Stuff}/>
            <Route path="/user" component={User}/>
          </div>
        </div>
      </HashRouter>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
 
    </Footer>
  </Layout>



      </div>

  
   
    





    );
  }
}

export default App;
