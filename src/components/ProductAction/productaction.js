import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import callApi from '../../server/callApi';
import { FormProps } from 'antd/lib/form';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class ProductAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      txtname: '',
      txtprice: '',
      ckbStatus: '',
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, 'GET', null).then(res => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtname: data.name,
          txtprice: data.price,
          ckbStatus: data.value
        })

      });
    }
  }
  handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'ckbStatus' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onSave = (e) => {

    e.preventDefault();
    var { txtname, txtprice, ckbStatus } = this.state;
    var { history } = this.props;
    callApi('products', 'POST', {
      name: txtname,
      price: txtprice,
      status: ckbStatus
    }).then(res => {
      history.goBack();
      console.log(res);
    })
  }
  onCancel = () => {
    var { history } = this.props;
    // history.push("/");
    history.go("/");
  }
  render() {

    var { ckbStatus, txtname, txtprice } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="productaction">
        <Form onSubmit={this.onSave}>
          <FormItem {...formItemLayout} label="Thêm sản phẩm">
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: 'Please do not empty',
              }],
            })(
              <Input placeholder="Please input your name" getFieldValue={txtname} name="txtname" onChange={this.handleChange} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Giá">
            {getFieldDecorator('price', {
              rules: [{
                required: true,
                message: 'Please input your nickname',
              }],
            })(
              <Input placeholder="Please input your nickname" getFieldValue={txtprice} name="txtprice" onChange={this.handleChange} />
            )}
          </FormItem>

          <FormItem {...formTailLayout}>
            <Checkbox
              value={ckbStatus}
              onChange={this.handleChange}
              name="ckbStatus"


            >
              Còn hàng
          </Checkbox>
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" onClick={this.onSave} style={{ marginRight: '20px' }}>
              Check
          </Button>
            <Button type="danger" onClick={this.onCancel}>
              cancel
        </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const WrappedDynamicFieldSet = Form.create()(ProductAction);
export default WrappedDynamicFieldSet;
