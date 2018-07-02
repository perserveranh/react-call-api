import {Button,Divider} from 'antd';
import React from 'react';


const columns = [{
    title: 'STT',
    key:'stt',
    dataIndex: 'stt',
  }, {
    title: 'Mã',
    key:'ma',
    className: 'column-money',
    dataIndex: 'ma',
  }, {
    title: 'Tên',
    key:'name',
    dataIndex: 'name',
  },{
    title: 'Giá',
    key:'price',
    dataIndex: 'price',
  },
  {
    title: 'Trạng Thái',
    dataIndex:true,
    render: ()=>(
      <span>
      <Button type="danger">{!'status'? 'Còn hàng' : 'Hết hàng'}</Button>  
      </span>
    ),

  },
  {
    title: 'Hành Động',
    key:'action',
    render: ()=>(
      <span>
      <Button type="danger">Sửa</Button>  
        <Divider type="vertical" />
         <Button onClick={this.handDelete } >Xóa</Button> 
      </span>
    ),
  
  }
  
  ];

  export default columns;