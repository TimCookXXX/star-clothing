import styled from "styled-components";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    button {
        margin-top: auto;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 20px;
        border: 3px solid grey;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;
