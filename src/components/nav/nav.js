import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class Nav extends Component {
  state={
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="menu">
      <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <Menu.Item key="mail">
        <Icon type="home" />CALL API
      </Menu.Item>
      <Menu.Item >
      <Icon type="setting" /> Trang Chủ   
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="#" target="_blank" rel="noopener noreferrer">Quản Lý Sản Phẩm</a>
      </Menu.Item>
    </Menu>
      </div>
    );
  }
}

export default Nav;
