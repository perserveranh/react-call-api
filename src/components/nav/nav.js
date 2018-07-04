import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="menu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail" >
            <Icon type="home" />CALL API
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              Trang Chủ
            </Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Link to="/product-list">
              Quản Lý Sản Phẩm
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Nav;
