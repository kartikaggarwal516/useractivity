export const ACTIVITY = "ACTIVITY"

export const activityRecord = activities => {
    return{
        type : ACTIVITY,
        payload : activities
    }
}