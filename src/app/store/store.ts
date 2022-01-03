import { Action } from "@ngrx/store";

// export interface StoreInterface {
//     counter: StartState
// }

export interface StartState {
    n: number
}

let initState = {
    n: 1
}

// reducer
export function counterReducer(state = initState, action: Action) {
    if (action.type === 'increament') {
        return {
            n: state.n++
        }
    } else if (action.type === 'decreament') {
        return {
            n: state.n--
        }
    } else {
        return state
    }
    // return state
}