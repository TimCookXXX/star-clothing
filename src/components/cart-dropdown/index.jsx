import { useNavigate } from "react-router-dom";
import { CartItem } from "../cart-item";
import { Button } from "../UI/Button";
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.styles";
import { setCartIsOpen } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("/checkout");
        dispatch(setCartIsOpen(false));
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    );
};
