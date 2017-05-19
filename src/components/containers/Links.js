import React from 'react'
import { Icon, List } from 'semantic-ui-react'
export default class Links extends React.Component {
    render() {
        return (
                <List>
                    <List.Item>
                       <a> <List.Icon className='icon' name='calendar outline' />
                        <List.Content>Your Google Calendar</List.Content></a>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='globe' />
                        <List.Content><a>Funsize Wiki</a></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='repeat' />
                        <List.Content><a>Gusto</a></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='protect' />
                        <List.Content><a>Switch to the dark version</a></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon className='icon' name='setting' />
                        <List.Content><a>Settings</a></List.Content>
                    </List.Item>
                </List>
        )
    }
}