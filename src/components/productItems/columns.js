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
    key:'status',
    dataIndex: 'status',
  },
  {
    title: 'Hành Động',
    key:'action',
    render: ()=>(
      <span>
      <Button type="danger">Sửa</Button>  
        <Divider type="vertical" />
         <Button>Xóa</Button> 
      </span>
    ),
  
  }
  
  ];
  export default columns;