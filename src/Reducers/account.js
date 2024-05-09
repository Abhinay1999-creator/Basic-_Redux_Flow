import {
    getAccUserFulFilled,
    getAccUserPending,
    getAccUserRejected,
    inc,
    dec,
    incByAmt
} from '../Action';

export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserPending:
            return {
                ...state, amount: action.payload, pending: true
            }
        case getAccUserFulFilled:
            return {
                pending: false
            }
        case getAccUserRejected:
            return {
                ...state, error: action.error, pending: true
            }
        case inc:
            return {
                amount: state.amount + 1
            }
        case dec:
            return {
                amount: state.amount - 1
            };
            case incByAmt:
                return { amount: state.amount + action.payload };
        default:
            return state
    }
}