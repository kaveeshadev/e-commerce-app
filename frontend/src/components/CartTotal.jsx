import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCardAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl ">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between ">
          <p>Sub Total</p>
          <p>
            {currency} {getCardAmount()}.00{" "}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00{" "}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCardAmount() === 0 ? 0 : getCardAmount() + delivery_fee}.00{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
