import { useContext, useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import { OrdersContext } from "../../context/OrderContext/OrderState"
import { Card, Button } from 'antd'
import { ClearOutlined, ShoppingOutlined } from '@ant-design/icons'
import './Cart.styles.scss' 

const { Meta } = Card;

const token = JSON.parse(localStorage.getItem("token"));

const Cart = () => {
    const { cart, clearCart } = useContext(ProductsContext)
    const { createOrder } = useContext(OrdersContext)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const createNewOrder = () => {
      createOrder(cart);
      clearCart();
      };

    return (
    <>
    <h1 className="cart__title">Cart</h1>
    <section className="cart__container-cart">
      {cart.length > 0 && cart.map((cartItem) => (
      <div key={cartItem.id}>
        <Card
        style={{ width: 300 }}
        className="cart__card"
        cover={
        <img
        alt="photo"
        src={cartItem.image}
        style={{height: 300}}
        />}
        >
          <Meta
          title={cartItem.name}
          description={`${cartItem.price}€`}
          />
        </Card>
        </div>
        )) || <p>You don´t have products in your cart</p>} 
    </section>
    <section>
        {cart.length > 0 && (
				<div className="cart__container-button">
          <Button type="primary" danger className="cart__button" onClick={() => clearCart()} icon={<ClearOutlined />}>Clear Cart</Button>
          <Button type="primary" className="cart__button" onClick={() => createNewOrder()} icon={<ShoppingOutlined />}>Create Order</Button>
				</div>)}
    </section>
    </>
  )
}



export default Cart