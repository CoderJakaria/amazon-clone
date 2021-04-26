import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../lib/StateProvider';
import { getBasketTotal } from '../../lib/reducer';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/* price  */}
            <CurrencyFormat
               renderText = {(value) => (
                   <>
                       <p>
                          Subtotal ({basket.length} items): <strong>{`${value}`}</strong> 
                        </p>

                       <small className="subtotal__gift">
                           <input type="checkbox"/> This order contains
                       </small>
                   </>
               )}
               value={getBasketTotal(basket)}
               decimalScale={2}
               displayType={"text"}
               thousandSeperator={true}
               prefix={"$"}
             />
            <button>Proced to Checkout</button>
        </div>
    )
}

export default Subtotal
