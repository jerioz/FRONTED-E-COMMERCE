import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.styles.scss'
import { Card } from 'antd';

const { Meta } = Card;

const Products = () => {
    const { products, getProducts } = useContext(ProductsContext)


useEffect(() => {
    getProducts();
}, []);

return(
   <>
   <h1 className="releases__title">Releases</h1>
   <section className="releases__container-products">
   {products && products.map((product) => (
    <div key={product._id}>
        {/* <p>{product.name}</p>
        <p>Price: {product.price}</p> */}
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
  </Card>
    </div>
    ))}
    </section>
   </>
)

}

export default Products