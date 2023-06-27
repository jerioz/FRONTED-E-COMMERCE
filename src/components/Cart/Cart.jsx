import { useContext, useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"

const token = JSON.parse(localStorage.getItem("token"));

const Cart = () => {
    const { cart, clearCart } = useContext(ProductsContext)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
        <div>
        {(cart.length > 0 &&
				cart.map((cartItem) => (
					<div key={cartItem.id}>
						<span>{cartItem.name}</span>
						<span>{cartItem.price} €</span>
					</div>
				))) || <span>No tienes ningún producto añadido</span>}
        </div>
        {cart.length > 0 && (
				<div>
					<button onClick={() => clearCart()}>Clear cart</button>
					<button onClick={() => createNewOrder()}>Create Order</button>
				</div>
			)}
        </>
    )

}



export default Cart