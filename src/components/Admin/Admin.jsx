import React, { useContext, useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Spin, Card, Button }  from 'antd'
import EditProduct from "../Products/EditProduct/EditProduct";

const { Meta } = Card;

import './Admin.styles.scss'
import CreateProduct from "../Products/CreateProduct/CreateProduct";

const Admin = () => {
    const { getProducts, products, deleteProduct, getProductById } = useContext(ProductsContext);
    

    useEffect(() => {
        getProducts();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (id) => {
      getProductById(id);
      setIsModalVisible(true);
    };

     return (
        <>
        <h1 className="releases-update__title">Add New Releases</h1>
        <CreateProduct />
        <h1 className="releases-update__title">Update/Delete Releases</h1>
        <section className="releases-update__container-products">
        {products && products.map((product) => (
         <div key={product.id}>
         <Card
         style={{ width: 300 }}
         className="releases-update__card"
         cover={
           <img
             alt="photo"
             src={product.image}      
           />
         }
       >
         <Meta
           title={product.name}
           description={`${product.price} €`}
         />
         <Button type="primary" danger className="releases-update__button" onClick={() => deleteProduct(product.id)} icon={<DeleteOutlined />}>DeleteProduct</Button>
          <Button type="primary" className="releases-update__button" onClick={() => showModal(product.id)} icon={<EditOutlined />}>UpdateProduct</Button>
       </Card>
         </div>
         
         ))|| <Spin size="large" /> }
        <EditProduct visible={isModalVisible} setVisible={setIsModalVisible} />
         </section>
        </>
    )
}


export default Admin