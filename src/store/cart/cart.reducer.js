import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_STATE = {
    cartIsOpen: false,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                cartIsOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state
    }
}