import React from 'react'
import { Statistic } from 'semantic-ui-react'

const DisplayBalance = ({title, value, color='noColor', size='tiny'}) => {
    return (
    <Statistic size={size} color={color === 'noColor'?title==='Incoming'?'green':'red':'black'}>
        <Statistic.Label style={{textAlign:'center'}}>
            {title}
        </Statistic.Label>
        <Statistic.Value>
            {value}
        </Statistic.Value>
    </Statistic>
    )
}

export default DisplayBalance
