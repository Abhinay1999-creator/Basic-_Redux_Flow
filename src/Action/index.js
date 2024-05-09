import axios from 'axios';
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/incrementByAmount';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulFilled = 'account/getUser/fulfilled';
export const getAccUserRejected = 'account/getUser/rejected';
export const incBonus = 'bonus/increment';


function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending());
            const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(getAccountUserFullfilled(data.id))
        } catch (err) {
            dispatch(getAccountUserRejected(err))
        }
    }
}

function getAccountUserRejected(error) {
    return {
        type: getAccUserRejected,
        payload: error
    }
}

function getAccountUserFullfilled(value) {
    return {
        type: getAccUserPending,
        payload: value
    }
}

function getAccountUserPending() {
    return {
        type: getAccUserPending
    }
}
export function increment() {
    return { type: inc }
}

export function decrement() {
    return { type: dec }
}

export function incrementByAmount(value) {
    return { type: incByAmt, payload:value }
}

export function incrementBonus(value) {
    return { type:incBonus };
  }