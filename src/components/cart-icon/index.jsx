import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../../store/cart/cart.action";
import {
    selectCartCount,
    selectCartIsOpen,
} from "../../store/cart/cart.selector";

export const CartIcon = () => {
    const dispatch = useDispatch();
    const cartIsOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleIsCartOpen = () => dispatch(setCartIsOpen(!cartIsOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};
