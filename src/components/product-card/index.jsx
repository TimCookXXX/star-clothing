import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button, BUTTON_TYPES } from "../UI/Button";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles";

export const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}$</Price>
            </Footer>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPES.inverted}>
                ADD TO CART
            </Button>
        </ProductCardContainer>
    );
};
