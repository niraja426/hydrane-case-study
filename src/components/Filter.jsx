// import React, { Component } from 'react'

// export default class Filter extends Component {



//     render() {
//         return (
//             <div>
//                 <div className="filters-container">
//                 <div className="filter">
//                  <label>Filter by Continents</label>
//                         <select name="selectedContinent" value={this.state.selectedContinent} onChange={this.handleChange}>
//                              <option value="">All Continents</option>
//                                 {this.getContinents().map(continent => (<option key={continent} value={continent}>{continent}</option> ))}
//                         </select>
//                 </div>

//                 <div className="filter">
//                 <label>Filter by Population/Area</label>
//                 <select name="selectAreaOrPopulation" value={this.state.selectAreaOrPopulation} onChange={this.handleChange}>
//                         <option value=" ">All</option>
//                         <option value="Area">Area</option>
//                         <option value="Population">Population</option>
//                  </select>
//                 </div>

//                 <div className="filter">
//                 <label>Filter by Chart</label>
//                 <select name="chart" value={this.state.chart} onChange={this.handleChange}>
//                         <option value="5">5</option>
//                         <option value="10">10</option>
//                         <option value="15">15</option>
//                         <option value="20">20</option>

//                  </select>
//                 </div>

                
//             </div>
//             </div>
//         )
//     }
// }
