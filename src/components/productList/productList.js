import React, { Component } from 'react';
import { Layout } from 'antd';
import ProductItems from './../productItems/productItems';

const {  Content } = Layout;
class ProductList extends Component {
  render() {
    return (
      <div className="productlist">
    <Layout>
      <Content>
      <ProductItems />
      </Content>
  </Layout>
      </div>
    );
  }
}

export default ProductList;
