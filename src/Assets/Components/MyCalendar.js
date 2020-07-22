import React from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { connect } from "react-redux"

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    const useractivity= props.userActivity.map( (d,i) => 
    {
        return({
            start: new Date(d.start_time),
            end: new Date(d.end_time),
            id: i
        })
    })
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={useractivity}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

const mapStateToProps = store => {
    return{
        userActivity: store.userActivity
    }
}

export default connect(mapStateToProps, null)(MyCalendar)