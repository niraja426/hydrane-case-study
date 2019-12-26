import React,{Component}from 'react';
import './App.css';
import Home from './Home';
import FilterByContinent from './FIlterByContinent';
import FilterByMetrix from './FilterByMetrix'
import FilterChart from './FilterChart';
import axios from 'axios'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      continents:[]
    }
  }
  handleSubmit=()=>{
    axios.get('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane')
    .then(response=>console.log(response))
    .catch(err=>console.log(err))

  }
  render(){
  return (
    <div className="App">
      <Home onOkSubmit={this.handleSubmit}/>
        <div className="filters-container">
              <div className="filter">
                  <FilterByContinent/>
              </div>
              <div className="filter">
                  <FilterByMetrix/>
              </div>
              <div className="filter">
                  <FilterChart/>
              </div>
        </div>
  </div>
  );
}
}

