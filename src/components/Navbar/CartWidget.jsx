import icon from "../../img/Cart.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function IconWidget() {
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <div className="flex">
        <img src={icon} alt="CartIcon" className="iconCart" />
        <p className="mx-1">{itemCount}</p>
      </div>
    </>
  );
}
export default IconWidget;
