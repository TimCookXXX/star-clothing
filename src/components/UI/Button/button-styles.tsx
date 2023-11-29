import styled from "styled-components";
import { SpinnerContainer } from "../../spinner/spinner.styles";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    font-family: "IBM Plex Mono", monospace;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: ease-in 0.3s;
    align-items: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: ease-in 0.2s;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
`;
