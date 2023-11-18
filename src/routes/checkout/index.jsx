import { CheckoutItem } from "../../components/checkout-item";
import {
    CheckoutContainer,
    CheckoutHeader,
    SignInInfo,
    TotalBlock,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";
import { PaymentForm } from "../../components/payment-form";
import { selectCurrentUser } from "../../store/user/user.selector";

export const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div>
                    <span>Product</span>
                </div>
                <div>
                    <span>Description</span>
                </div>
                <div>
                    <span>Quantity</span>
                </div>
                <div>
                    <span>Price</span>
                </div>
                <div>
                    <span>Remove</span>
                </div>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalBlock>Total: {cartTotal}$</TotalBlock>
            {currentUser ? (
                <PaymentForm />
            ) : (
                <SignInInfo to={`/auth`}>Sign In to pay for goods</SignInInfo>
            )}
        </CheckoutContainer>
    );
};
