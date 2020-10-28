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
      <Grid container spacing={2} direction="row"
      style={{padding: '5px'}}>
        <Grid items xs= {16} sm={4} md={4} lg={4} xl={4}>
          <AssignedCard/>
          </Grid>
          <Grid items xs= {16} sm={4} md={4} lg={4} xl={4}>
          <RequestReview/>
          </Grid>
          <Grid items xs= {16} sm={4} md={4} lg={4} xl={4}>
          <Feedback/>
          </Grid>
          <Grid items xs= {16} sm={4} md={4} lg={4} xl={4}>
          <Complete/>
          </Grid>
        </Grid>
    
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
// ReactDOM.render(<AssignedCard/>,document.querySelector('#root'))