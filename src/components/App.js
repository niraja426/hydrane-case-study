import React,{Component}from 'react';
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Home from './Home';
import axios from 'axios'
import AllContinents from './AllContinents'
import PiechartPopulation from './PiechartPopulation';
import PiechartArea from './PiechartArea';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  //Data fetch from API 
  handleSubmit=()=>{
    axios.get('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane')
    .then(response=>{
      this.setState({
        data:response.data.geonames
      })
      console.log(this.state.data)
    })
    .catch(err=>console.log(err))

  }
  render(){
  return (
    <div className="App">
        <Home onOkSubmit={this.handleSubmit}/>
        <div className="piechart-container">
          <div className="piechart"> <PiechartPopulation data={this.state.data}/></div>
          <div className="piechart"><PiechartArea data={this.state.data}/></div>
        </div>
        
        <AllContinents data={this.state.data}/>
  </div>
  );
}
}

