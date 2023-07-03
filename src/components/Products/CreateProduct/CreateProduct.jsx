import { Button, Form, InputNumber, Input, Upload } from "antd";
import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import FormProduct from "../../Form/FormProduct";




const CreateProduct = () => {
    const { createProduct } = useContext(ProductsContext);
    const onFinish = (values) => {
    createProduct(values);
  };
    

return(
  <>
  <div>
  <Form onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
      <FormProduct />
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
  </Form> 
  </div>
  </>
  );
};

export default CreateProduct 







