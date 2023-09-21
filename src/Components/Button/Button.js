import React from 'react'
import "./Button.scss"
export default function Button({render}) {
  return (
    <div className='inner-Button'>
    <button onClick={(e) => {render(1)}}>All</button>
    <button onClick={(e) => {render(2)}}>completed</button>
    <button onClick={(e) => {render(3)}}>no-completed</button>
    </div>
  )
}
