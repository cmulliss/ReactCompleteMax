import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card'

const ExpenseItem = (props) => {
  // register state with = useState(porps.title)
  // then get back 2 values, the value itself, title, and the updating fn setTitle in this case
  const [title, setTitle] = useState(props.title)
  // call the updating fn, setTitle, whenever the state should change, and use to output in jsx
  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem

/* can add fn to button on the fly, as an anonymous fn, easy to add event listener, but adds a lot of code to jsx block

  /* <button
        onClick={() => {
          console.log('Clicked')
        }}
      > 
*/
