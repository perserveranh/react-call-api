import React from 'react';
import { Button } from 'antd';
var initialState = [{
    id: '1',
    stt: '1',
    ma: '1',
    name: 'Iphone-X',
    price: '100$',
    status: <Button type="danger">Còn hàng</Button>,
},
{
    id: '2',
    stt: '2',
    ma: '2',
    name: 'Iphone-y',
    price: '100$',
    status: <Button type="danger">Còn hàng</Button>,
},
{
    id: '3',
    stt: '3',
    ma: '3',
    name: 'Iphone-z',
    price: '100$',
    status: <Button type="danger">Còn hàng</Button>,
}
];

const product = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}
export default product;