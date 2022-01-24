import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
  // useState hook for saving data from form and storing it in state
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor='title'>Title</label>
            <input type='text' onChange={titleChangeHandler} />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='amount'>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='date'>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
          </div>
        </div>
      </form>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </div>
  )
}

export default ExpenseForm
