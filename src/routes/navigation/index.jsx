import { Outlet } from "react-router-dom";
import { ReactComponent as StarLogo } from "../../assets/crown.svg";
import { CartIcon } from "../../components/cart-icon";
import { CartDropdown } from "../../components/cart-dropdown";
import {
    LogoContainer,
    NavLinks,
    NavLinksContainer,
    NavigationContainer,
} from "./navigation.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

export const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const cartIsOpen = useSelector(selectCartIsOpen);
    const signOutUser = () => dispatch(signOutStart());
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
