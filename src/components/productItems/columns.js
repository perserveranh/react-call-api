import {Button,Divider,Popconfirm} from 'antd';
import React from 'react';
import CallApi from './../../server/callApi';
import data from './data'
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
    render: (id)=>(
      <span>
      <Button type="danger">Sửa</Button>  
        <Divider type="vertical" />
        <Popconfirm title="Sure to delete?" onConfirm={() => hanleDelete(id.key) }>
         <Button  >Xóa</Button> 
         </Popconfirm>
      </span>
    ),
  
  }
  
  ];
const hanleDelete = (id) =>{
  CallApi(`products/${data.key}`,'DELETE',null).then(res => {
    console.log(res);
   
  })
}
  export default columns;