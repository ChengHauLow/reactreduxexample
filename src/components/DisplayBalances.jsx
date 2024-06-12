import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

const DisplayBalances = () => {
    return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
            <Grid.Row>
            <Grid.Column>
                <DisplayBalance title="Incoming" value="1,500.21" />
            </Grid.Column>
            <Grid.Column>
                <DisplayBalance title="Expenses" value='1,500.21'  />
            </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default DisplayBalances
