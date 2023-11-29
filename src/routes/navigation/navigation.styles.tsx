import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(NavLink)`
    height: 100%;
    width: 70px;
    padding: 10px;
`;

export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLinks = styled(NavLink)`
    padding: 10px 15px;
    cursor: pointer;
    transition: ease-in 0.3s;
    &:hover {
        color: grey;
        transition: ease-in 0.3s;
    }

    &.active {
        border: 1px solid rgb(119, 119, 119);
    }
`;
