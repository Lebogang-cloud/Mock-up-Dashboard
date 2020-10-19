import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Components/Header';
import AssignedCard from './Components/AssignedCards';
import RequestReview from './Components/RequestReview';
import Feedback from './Components/Feedback';
import Complete from './Components/Complete';

const App = () => {
  return (
    <div>
      <Header/>
      <AssignedCard/>
      <RequestReview/>
      <Feedback/>
      <Complete/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
// ReactDOM.render(<AssignedCard/>,document.querySelector('#root'))