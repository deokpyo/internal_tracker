import React from 'react'
import { Icon, List } from 'semantic-ui-react'

export default class Links extends React.Component {
    render() {
        return (
                <List>
                    <List.Item>
                        <List.Icon className='icon' name='calendar outline' />
                        <List.Content>Your Google Calendar</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='calendar outline' />
                        <List.Content>Your Google Calendar</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='calendar outline' />
                        <List.Content>Your Google Calendar</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='calendar outline' />
                        <List.Content>Your Google Calendar</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='calendar outline' />
                        <List.Content>Your Google Calendar</List.Content>
                    </List.Item>
                </List>
        )
    }
}