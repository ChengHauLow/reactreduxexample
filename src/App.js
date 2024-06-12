import { useState } from 'react';
import { Container, Header } from 'semantic-ui-react'
import './App.css';
import NewTransForm from './components/NewTransForm';
import TransactionItem from './components/TransactionItem';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';

function App() {
  const [transaction, setTransaction] = useState([
    {
      id:1,
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error fuga quis ducimus eveniet eius.',
      amount:10.00,
      type:'exp'
    },
    {
      id:2,
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati? Enim qui excepturi itaque eaque iure, quaerat autem aperiam temporibus ipsa omnis facilis quas, commodi molestias cupiditate ad reiciendis eveniet?',
      amount:8.99,
      type:'inc'
    },
    {
      id:3,
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum recusandae quis perferendis minus reprehenderit aliquam excepturi, ut beatae cum temporibus iste.',
      amount:101.12,
      type:'exp'
    },
  ])
  const [formItem, setFormItem] = useState({
    desc:'',
    amount:0
  })
  const handleDelete = (id)=>{
    if(window.confirm("Confirm delete this item?")){
      setTransaction(prev=> prev.filter(item=> item.id !== id))
    }

  }
  const handleAdd = (e, type)=>{
    e.preventDefault();
    console.log(type)
    let param = {
      id: transaction.length + 1,
      type:type
    }
    let transItem = Object.assign(formItem, param)
    setTransaction(prev=> [...prev, transItem])
    setFormItem({
      desc:'',
      amount:0
    })
  } 
  const handleAddFormItem = e=>{
    setFormItem(prev => Object.assign(prev, {[e.target.name]:e.target.name === 'amount'?parseFloat(e.target.value):e.target.value}))
  }
  return (
    <Container style={{paddingBottom:30}}>
      <Header as="h1">
        My Budget Details
      </Header>
     <DisplayBalance title="Your Balance: " color='black' size='small' value="3,000.42"  />
      <DisplayBalances  />
      <Header as='h3'>Add Transaction</Header>
      <NewTransForm  handleAdd={handleAdd} handleAddFormItem={handleAddFormItem}/>
      <Header as='h3'>History</Header>
      {transaction.length > 0 && transaction?.map((tranc, index) => (
        <TransactionItem key={index} transaction={tranc} handleDelete={handleDelete} currency='RM' />
      ))}
    </Container>
  );
}

export default App;
