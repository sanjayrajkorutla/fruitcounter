/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count1: 0,count2: 0}

  onIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    
    const {count1} = this.state
    const {count2} = this.state
     return (
        <div className="container">
         <div className="container1">
             <h1>Bob ate <span>{count1} </span>mangoes <span>{count2} </span> bananas</h1>
<div className="row">
<div className="column">
<img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"/>
<button  type="button" className="button" onClick={this.onIncrement}>
          Eat Mango
        </button></div>
<div className="column">       
<img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"/>
        <button type="button" className="button" onClick={this.onDecrement}>
          Eat Banana
        </button></div> 
      </div>             
         </div>
        </div>
    )
  }
}

export default Counter
