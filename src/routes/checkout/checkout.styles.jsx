import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const TotalBlock = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const SignInInfo = styled(Link)`
    font-size: 20px;
`
