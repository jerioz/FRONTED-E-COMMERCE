import { Button, Modal, Form, InputNumber, Input } from "antd";
import React, { useEffect, useContext } from "react";
import { ProductsContext } from '../../../context/ProductsContext/ProductsState'
import FormProduct from "../../Form/FormProduct";

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
          <FormProduct />
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