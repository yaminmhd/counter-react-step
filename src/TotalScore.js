import React, { Component } from 'react'
import Counter from './Counter'

class TotalScore extends Component{
  render(){
    return(
      <div>
        <Counter user="Billy" initialScore={50}/>
        <Counter user="Joe" initialScore={40} />
      </div>
    )
  }
}

export default TotalScore