import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.styles.scss'
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'


const { Meta } = Card;

const Products = () => {
    const { products, getProducts, addCart, cart } = useContext(ProductsContext)


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
    // cover={
    //   <img
    //     alt="example"
    //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    //   />
    // }
  >
    <Meta
      title={product.name}
      description={product.price}
    />
    {/* <button onClick={() => addCart(product)}>Add Cart</button> */}
    <Button type="primary" className="releases__button" onClick={() => addCart(product)} icon={<ShoppingCartOutlined />}>addCart</Button>
  </Card>
    </div>
    ))}
    </section>
   </>
)

}

export default Products