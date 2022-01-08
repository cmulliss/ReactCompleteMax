import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>2 June 2021</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>£220</div>
      </div>
    </div>
  )
}

export default ExpenseItem
