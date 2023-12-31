import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.styles.scss'
import { Card, Button, Spin } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'

const { Meta } = Card;

const Products = () => {
    const { products, getProducts, addCart, cart, token } = useContext(ProductsContext)
    
    useEffect(() => {
    getProducts();
    }, []);
    
    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

return(
   <>
   <h1 className="releases__title">Releases</h1>
   <section className="releases__container-products">
   {products && products.map((product) => (
    <div key={product.id}>
    <Card
    style={{ width: 300 }}
    className="releases__card"
    cover={
      <img
        alt="photo"
        src={product.image}
        className="releases__img"
        />}
      >
        <Meta
        title={product.name}
        description={`${product.price} €`}
        />
        <Button type="primary" className="releases__button" onClick={() => addCart(product)} icon={<ShoppingCartOutlined />}>addCart</Button>
    </Card>
    </div>
    ))}
    </section>
    </>
  )
}
export default Products