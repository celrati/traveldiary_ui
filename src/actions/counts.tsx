import { COUNTER_CHANGE } from '../constants';



// it's like atoms with recoilJS
export function changeCount(count: number) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}