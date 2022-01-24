import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <h3>New Expense</h3>
      <ExpenseForm />
    </div>
  )
}

export default NewExpense
