import React, { Component } from 'react';
import {Button} from 'antd';
import { Layout } from 'antd';
import ProductList from './../../components/productList/productList';
import ProductItems from './../../components/productItems/productItems';
import data from './../../components/productItems/data';
import columns from './../../components/productItems/columns';

const { Header } = Layout;
class ProductLists extends Component {
    showProducs(ProductItems){
        var result=null;
        if(ProductItems.length >0 ){
            result = ProductItems.map((product,data,columns,index) => {
                return (
                    <ProductItems 
                    key={index}
                    product ={product}
                    data={data}
                    columns={columns}
                    />
                );
            });
        }
        return result;
    }
  render() {
    return (
        <div>
        <Layout>
        <Header>    <Button type="primary" size="large">Thêm sản phẩm</Button></Header>
        <Layout>
          <ProductList >
          {this.showProducts(ProductItems)}
          </ProductList>
          
        </Layout>
     
      </Layout>
        </div>
    );
  }
}

export default ProductLists;
