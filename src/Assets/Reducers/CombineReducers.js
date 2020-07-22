import React from "react"
import ActivityReducer from "./ActivityReducer"
import {combineReducers} from "redux"

export default combineReducers({
        userActivity: ActivityReducer
})