import React, { Component } from 'react';
import {Table,Button} from 'antd';
import data  from './data';
import columns from './columns';
import {connect} from 'react-redux';
import CallApi from './../../server/callApi';

class ProductItems extends Component {
  constructor(props){
    super(props);
    this.state={
      product:[]
    }
  }
  componentDidMount(){
    CallApi('products','GET',null).then(res=> {
      console.log('addad',res.data);
      this.setState({
        product: res.data
        
      });
    });
  }
  render() {
    // var {product} =this.props;
    
    var {product}=this.state;
   
    return (
      <div className="productitems">
      <Table 
      style={{padding:'0 150px'}}
    columns={columns }
    dataSource={product}
    bordered
    title={() => <span style={{color:'blue'}}> Danh Sách Sản Phẩm</span>}
    footer={() => 'Code by Perserver Anh'}
  />,
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product:state.product
  };
}
export default connect(mapStateToProps)(ProductItems);
