import { useContext } from "react";
import { totalItem, totalPrice } from "../Features/CartReducer";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-8">
            {cart.map((p) => (
              <CartProduct product={p} />
            ))}
          </div>
          <div className="col-4 ">
            <div className="bg-secondary p-2 text-white">
              <h5>Total Items:{totalItem(cart)}</h5>
              <h5>Total Price: ${totalPrice(cart)}</h5>
              <button className="btn btn-warning">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
