import { Button, Form, InputNumber, Input, Upload } from "antd";
import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";

const CreateProduct = () => {
    const { createProduct } = useContext(ProductsContext);
    const onFinish = (values) => {
    createProduct(values);
    };

return(
<Form onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
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
    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form> 
  );
};

export default CreateProduct 







