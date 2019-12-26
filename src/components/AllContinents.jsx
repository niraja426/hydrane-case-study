import React, { Component } from 'react'
import FilterByMetrix from './FilterByMetrix'
import FilterChart from './FilterChart'


export default class AllContinents extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedContinent:" "
        }
    }
    handleChange=(e)=>{
        this.setState({
            selectedContinent:e.target.value
        })
    }

    getContinents=()=>{
        return this.props.data
          .map(element => element.continentName)
          .filter((continent, i, continents) => continents.indexOf(continent) === i)
          .sort();
      }
    render() {
        return (
            <>
            <div className="filters-container">
                <div className="filter">
                 <label>Filter by Continents</label>
                        <select name="selectContinent" value={this.state.selectedContinent} onChange={this.handleChange}>
                             <option value="">All Continents</option>
                                {this.getContinents().map(continent => (<option key={continent} value={continent}>{continent}</option> ))}
                        </select>
                </div>

                <div className="filter">
                    <FilterByMetrix/>
                </div>
                <div className="filter">
                    <FilterChart/>
                </div>
            </div>
            <div className="table-container table-wrapper-scroll-y my-custom-scrollbar ">
                <table className="table table table-bordered table-striped mb-0">
                <thead>
                            <tr>
                                    <th scope="col">Continent</th>
                                    <th scope="col">Country </th>
                                    <th scope="col">Area</th>
                                    <th scope="col">Population</th>
                                </tr>
                 </thead>
                    

                    {this.props.data
                    .filter(d=>{
                        return(d.continentName.includes(this.state.selectedContinent))
                    })
                    .map((element)=>{
                        return(
                            <tr>
                                <td>{element.continentName}</td>
                                <td>{element.countryName}</td>
                            </tr>
                        )

                    })}
                </table>
            </div>
            </>
        )
    }
}
