import React from 'react'
import { Calendar, Time, Links } from '../containers'
import { Container, Header, Grid, Icon, Segment, Dimmer, Loader, Image } from 'semantic-ui-react';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Grid celled stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <h4>Funsize</h4>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            empty
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <h1>This Week</h1>
                        </Grid.Column>
                        <Grid.Column width={11}>
                             <Calendar />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Links />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Time />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}