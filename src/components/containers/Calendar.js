import React from 'react'
import { Grid } from 'semantic-ui-react'


export default class Calendar extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <div className='box'>
                            <h2 >April<br/>
                            24<span className='date'></span></h2>
                            <div className='bigevent'>Jim's 3 year anniversary</div>
                            <div className='event'>Brian Peterson is guest deskin'</div>
                        </div>

                    </Grid.Column>
                    <Grid.Column>
                        <div className='box'>
                            <h2 >April<br/>
                            24<span className='date'></span></h2>
                            <div className='bigevent'>Jim's 3 year anniversary</div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='box'>
                            <h2 >April<br/>
                            24<span className='date'></span></h2>
                            <div className='bigevent'>Jim's 3 year anniversary</div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}