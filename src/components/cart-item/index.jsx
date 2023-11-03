import {
    CartItemContainer,
    ItemDetails,
    Name,
    RemoveCartItem,
} from "./cart-item.styles";
import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, quantity, price, imageUrl } = cartItem;
    const cartItems = useSelector(selectCartItems);

    const clearCartItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span>
                    {quantity} x {price}$
                </span>
            </ItemDetails>
            <RemoveCartItem onClick={clearCartItemHandler}>X</RemoveCartItem>
        </CartItemContainer>
    );
};
