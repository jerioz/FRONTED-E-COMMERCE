import React, { useContext, useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Spin, Card, Button }  from 'antd'
import Photo from '../../assets/Photos_releases/vinyl.png'

const { Meta } = Card;

import './Admin.styles.scss'
import CreateProduct from "../Products/CreateProduct/CreateProduct";

const Admin = () => {
    const { getProducts, products, deleteProduct } = useContext(ProductsContext);
    

    useEffect(() => {
        getProducts();
    }, []);

     return (
        <>
        <h1 className="releases-update__title">Update Releases</h1>
        <CreateProduct />
        <section className="releases-update__container-products">
        {products && products.map((product) => (
         <div key={product.id}>
         <Card
         style={{ width: 300 }}
         className="releases-update__card"
         cover={
           <img
             alt="photo"
             src={Photo}      
           />
         }
       >
         <Meta
           title={product.name}
           description={`${product.price} €`}
         />
         <Button type="primary" danger className="releases-update__button" onClick={() => deleteProduct(product.id)} icon={<DeleteOutlined />}>DeleteProduct</Button>
       </Card>
         </div>
         
         ))|| <Spin size="large" /> }
         </section>
        </>
    )
}


export default Admin