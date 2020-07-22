import {ACTIVITY} from "../Actions/Actions"

let defaultstate = []
export default function ActivityReducer(state = defaultstate, action)
{
    switch(action.type){
        case ACTIVITY : {
            state = action.payload
            return state
        }
        default : return state
    }
}