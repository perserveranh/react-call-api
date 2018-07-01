import React, { Component } from 'react';
import {Table} from 'antd';
import data  from './data';
import columns from './columns';

class ProductItems extends Component {
  render() {
    return (
      <div className="productitems">
      <Table 
      style={{padding:'0 150px'}}
    columns={columns}
    dataSource={data}
    bordered
    title={() => <span style={{color:'blue'}}> Danh Sách Sản Phẩm</span>}
    footer={() => 'Code by Perserver Anh'}
  />,
      </div>
    );
  }
}

export default ProductItems;
