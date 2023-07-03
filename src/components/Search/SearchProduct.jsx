import React, { useContext, useEffect } from 'react'
import { Input, Space } from 'antd';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import Photo from '../../assets/Photos_releases/vinyl.png'
import { Card } from 'antd'
import './SearchProduct.styles.scss'

const { Meta } = Card;

const { Search } = Input;


const SearchProduct = () => {

  const { getProductByName, products } = useContext(ProductsContext)
  const onSearch = (value) => getProductByName(value)

  useEffect(() => {
    getProductByName();
  }, []);

  return (
    <>
    <h1 className="search__title">Search Products</h1>
    <div className='search__container-cart'>
      <Space>
        <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        />
      </Space>
    </div>
    <section className="search__container-cart">
    {products && products.map((product) => {
      <div key={product.id}>
        <p>{product.name}</p>
      </div>
     
    })}
   {/* {product.length > 0 && product.map((productItem) => (
    <div key={productItem.id}>
    <Card
    style={{ width: 300 }}
    className="search__card"
    cover={
      <img
        alt="photo"
        src={Photo}
      />
    }
  >
    <Meta
      title={productItem.name}
      description={`${productItem.price}€`}
    />
  </Card>
    </div>
    )) || <p>No products found</p>}  */}
    </section>
    </>
  )
}

export default SearchProduct