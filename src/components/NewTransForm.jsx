import React, { useState } from 'react';
import { Form, Button, FormField, Radio } from 'semantic-ui-react';

const NewTransForm = ({handleAdd, handleAddFormItem}) => {
    const clearForm =()=>{
        document.getElementById('tranDesc').value = ''
        document.getElementById('transAmount').value = ''
        setType('exp')
    }
    const [type, setType] = useState('exp')
    const handleTypeChange = (e, {value})=>{
        setType(value)
    }
    const handleSubmit = e=>{
        handleAdd(e, type)
        clearForm()
    }
    return (
    <Form unstackable onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Input placeholder='Add New Transaction' name='desc' id='tranDesc' onChange={handleAddFormItem} icon='tags' label='Description' width={12}/>
            <Form.Input placeholder='Add Amount' icon='dollar' type='number' id='transAmount' name='amount' onChange={handleAddFormItem} iconPosition='left' label='Amount' width={4}/>
        </Form.Group>
        <FormField>
          Type of the transaction:
        </FormField>
        <FormField>
          <Radio
            label='Expense'
            name='type'
            value='exp'
            checked={type === 'exp'}
            onChange={handleTypeChange}
          />
        </FormField>
        <FormField>
          <Radio
            label='Income'
            name='type'
            value='inc'
            checked={type === 'inc'}
            onChange={handleTypeChange}
          />
        </FormField>
        <Button.Group style={{marginTop:10,marginBottom:10}}>
            <Button primary>OK</Button>
            {/* <Button.Or /> */}
            <Button>Cancel</Button>
        </Button.Group>
        </Form>
    )
}

export default NewTransForm
