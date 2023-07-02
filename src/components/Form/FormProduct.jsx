import React from 'react'
import { Form, InputNumber, Input } from 'antd'

const FormProduct = () => {
  return (
    <>
     <Form.Item
        label="Product name"
        name="name"
      >
        <Input placeholder="name" />
      </Form.Item>

      <Form.Item label="Price">
        <Form.Item name="price" noStyle>
            <InputNumber />
            </Form.Item>
            <span className="ant-form-text"> €</span>
            </Form.Item>
            
            <Form.Item label="Stock">
        <Form.Item name="stock" noStyle>
            <InputNumber />
            </Form.Item>
            <span className="ant-form-text"></span>
            </Form.Item>
    </>
  )
}

export default FormProduct