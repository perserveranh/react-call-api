import React, { Component } from 'react';
import { Layout } from 'antd';
import ProductItems from './../productItems/productItems';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const { Content, Header } = Layout;
class ProductList extends Component {
  render() {
    return (
      <div className="productlist">
        <Layout>
          <Header>
            <Link to="/product/add" type="primary" size="large">Thêm sản phẩm</Link>
          </Header>
          <Content>
            <ProductItems />
          </Content>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}
export default connect(mapStateToProps, null)(ProductList);
