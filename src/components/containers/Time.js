import React from 'react'
import Time from 'react-time'
import Moment from 'react-moment';

export default class TimeZones extends React.Component {
    render() {
        let now = new Date()
        let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400")
        return (
            <div>
                <h4>Bend, OR</h4>
                <span style={{ backgroundColor: 'yellow', padding: 10 }}></span><Moment tz="America/Creston" format="HH:mm">{now}</Moment>
            </div>
        )
    }
}