import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'

const TransactionItem = ({transaction, currency, handleDelete}) => {
  const handleItemClick = ()=>{
    handleDelete(transaction.id)
  }
  return (
    <Segment color={transaction.type === 'exp'?'red':'green'}>
        <Grid columns={3} textAlign='right'>
            <Grid.Column width={10} textAlign='left'>{transaction.desc}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{currency} {transaction.amount}</Grid.Column>
            <Grid.Column width={3}>
            <Icon name='edit' bordered style={{cursor:'pointer'}}></Icon>
            <Icon name='trash' onClick={handleItemClick} bordered style={{cursor:'pointer'}}></Icon>
            </Grid.Column>
        </Grid>
    </Segment>
  )
}

export default TransactionItem
