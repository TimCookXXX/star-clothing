import { Outlet } from "react-router-dom";
import { ReactComponent as StarLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon";
import { CartDropdown } from "../../components/cart-dropdown";
import {
    LogoContainer,
    NavLinks,
    NavLinksContainer,
    NavigationContainer,
} from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartIsOpen } from "../../store/cart/cart.selector";

export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartIsOpen = useSelector(selectCartIsOpen);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <StarLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLinks to="/shop">SHOP</NavLinks>
                    {currentUser ? (
                        <NavLinks as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLinks>
                    ) : (
                        <NavLinks to="/auth">SIGN IN</NavLinks>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {cartIsOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};
