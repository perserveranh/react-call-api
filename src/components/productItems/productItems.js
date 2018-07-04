import React, { Component } from 'react';
import { Table, Button, Divider, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CallApi from './../../server/callApi';

class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }
  componentDidMount() {
    CallApi('products', 'GET', null).then(res => {
      console.log('addad', res.data);
      this.setState({
        product: res.data
      });
    });
  }
  render() {
    const columns = [{
      title: 'STT',
      key: 'stt',
      dataIndex: 'stt',
    }, {
      title: 'Mã',
      key: 'ma',
      className: 'column-money',
      dataIndex: 'ma',
    }, {
      title: 'Tên',
      key: 'name',
      dataIndex: 'name',
    }, {
      title: 'Giá',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Trạng Thái',
      dataIndex: true,
      render: () => (
        <span>
          <Button type="danger">{!'status' ? 'Còn hàng' : 'Hết hàng'}</Button>
        </span>
      ),
    },
    {
      title: 'Hành Động',
      key: 'action',
      render: (product) => (
        <span>
          <Link to={`/product/${product.id}/edit`} type="danger" onClick={() => handleEdit(product.id)}>Sửa</Link>
          <Divider type="vertical" />
          <Popconfirm title="Sure to delete?" onConfirm={() => hanleDelete(product.id)}>
            <Button  >Xóa</Button>
          </Popconfirm>
        </span>
      ),
    }
    ];
    const handleEdit = (id) => {
      CallApi(`products/${id}`, 'PUT', {

      }).then(res => {
        console.log(res);
      });
    }
    const hanleDelete = (id) => {
      var { product } = this.state;
      console.log('asdf', product);
      CallApi(`products/${id}`, 'DELETE', null).then(res => {
        console.log(res);
        if (res.status === 200) {
          var index = findIndex(product, id);
          if (index !== -1) {
            product.splice(index, 1);
            this.setState({
              product: product
            });
          }
        }
      })
    }
    const findIndex = (products, id) => {
      var result = -1
      products.forEach((product, index) => {
        if (product.id === id) {
          result = index;
        }
      });
      return result;
    };
    var { product } = this.state;
    return (
      <div className="productitems">
        <Table
          style={{ padding: '0 150px' }}
          columns={columns}
          dataSource={product}
          bordered
          title={() => <span style={{ color: 'blue' }}> Danh Sách Sản Phẩm</span>}
          footer={() => 'Code by Perserver Anh'}
        />,
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product
  };
}
export default connect(mapStateToProps)(ProductItems);
