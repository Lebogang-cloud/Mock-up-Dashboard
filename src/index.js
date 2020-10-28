import React from 'react';
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid'
import Header from './Components/Header';
import AssignedCard from './Components/AssignedCards';
import RequestReview from './Components/RequestReview';
import Feedback from './Components/Feedback';
import Complete from './Components/Complete';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Grid container spacing={2} 
      style={{padding: '24px'}}>
        
        <Grid items xs= {12} md={3} >
          <h2>ASSIGNED CARD</h2>
          <AssignedCard/>
          <AssignedCard/>
          <AssignedCard/>
          </Grid>
          
          <Grid items xs= {12} md={3}  >
            <h2>REQUESTED REVIEW</h2>
          <RequestReview/>
          <RequestReview/>
          <RequestReview/>
          </Grid>
          
          <Grid items xs= {12} md={3}  >
            <h2>FEEDBACK</h2>
          <Feedback/>
          <Feedback/>
          <Feedback/>
          </Grid>
          
          <Grid items xs= {12}  md={3}>
            <h2>COMPLETE</h2>
          <Complete/>
          <Complete/>
          <Complete/>
          </Grid>
        </Grid>
    
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
// ReactDOM.render(<AssignedCard/>,document.querySelector('#root'))