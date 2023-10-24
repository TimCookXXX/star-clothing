import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItemContainer, ItemDetails, Name, RemoveCartItem } from "./cart-item.styles";

export const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    const { clearItemFromCart } = useContext(CartContext);

    const clearCartItemHandler = () => clearItemFromCart(cartItem);

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span>
                    {quantity} x {price}$
                </span>
            </ItemDetails>
            <RemoveCartItem onClick={clearCartItemHandler}>
                X
            </RemoveCartItem>
        </CartItemContainer>
    );
};
