import { LoginStatus } from "../providers/Auth";
import { useContext } from "react";

function ShoppingCart({ shoppingCart }) {
  const { setIsLogged } = useContext(LoginStatus);
  const handleLogOut = () => {
    setIsLogged(false);
    localStorage.removeItem("user");
  };

  return (
    <div className="headingShopping">
      <h1>Welcome to my e-shop page</h1>
      <div className="shoppingCart">
        Price:
        <p>{shoppingCart}$</p>
        <button className="addToShopping" onClick={() => handleLogOut()}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
