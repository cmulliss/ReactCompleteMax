import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card'

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('Clicked')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem

// can add fn to button on the fly, as an anonymous fn, easy to add event listener, but adds a lot of code to jsx block
{
  /* <button
        onClick={() => {
          console.log('Clicked')
        }}
      > */
}
