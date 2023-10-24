import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
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

export const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { cartIsOpen } = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <StarLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLinks to="/shop">
                        SHOP
                    </NavLinks>
                    {currentUser ? (
                        <NavLinks
                            as="span"
                            onClick={signOutUser}
                        >
                            SIGN OUT
                        </NavLinks>
                    ) : (
                        <NavLinks to="/auth">
                            SIGN IN
                        </NavLinks>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {cartIsOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};
