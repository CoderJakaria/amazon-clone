import React from 'react';
import "./Checkout.css";
import { useStateValue } from '../../lib/StateProvider';
import CheckoutProduct from '../../components/checkout_product/CheckoutProd';
import Subtotal from '../../components/subtotal__component/Subtotal';

const Checkout = () => {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
          <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

            {
                basket?.length === 0 ? (
                    <div>
                        <h2>You Shopping Basket is empty</h2>
                        <p>You have no items in you basket To buy one or more items, click "Add to basket" next to the item</p>
                    </div>
                )  : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                    </div>
                )
            }

            {
                basket?.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))
            }
            </div>

            {
                basket?.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
