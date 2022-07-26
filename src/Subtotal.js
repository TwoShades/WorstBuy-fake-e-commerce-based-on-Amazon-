import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
// import { useHistory } from "react-router-dom";

function Subtotal() {
    // const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();


    let totalValue = 0;

    basket.forEach((item) => totalValue += item.price)




    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{` ${Math.round(totalValue * 100) / 100} `}</strong></p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} />

            <button>Proceed to Chekcout</button>
        </div>
    )
}

// getBastetTotal(basket)

export default Subtotal