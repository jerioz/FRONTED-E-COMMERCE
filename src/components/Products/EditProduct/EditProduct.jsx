import { Button, Modal, Form, InputNumber, Input } from "antd";
import React, { useEffect, useContext } from "react";
import { ProductsContext } from '../../../context/ProductsContext/ProductsState'


const EditProduct = ({ visible, setVisible }) => {

    const { product, editProduct } = useContext(ProductsContext);

    const [form] = Form.useForm();

    useEffect(() => {
      form.setFieldsValue(product);
      }, [product]);
    
    const onFinish = (values) => {
        editProduct(values, product.id);
        setVisible(false);
    };

    return(

        <Modal
        title="Edit Product"
        visible={visible}
        footer={[]}
        >
        <Form onFinish={onFinish}
              form={form}
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
                UpdateProduct
                </Button>
              </Form.Item>
            </Form> 
            </Modal>
          );
        };
        
        export default EditProduct 