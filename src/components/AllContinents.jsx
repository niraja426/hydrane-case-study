import React, { Component } from 'react'
import Thead from './Thead'
import Piechart from './Piechart'


export default class AllContinents extends Component {
    //   handleClick=()
  
   
    render() {
        return (
            <tbody>


                    {this.props.data
                    .map((element)=>{
                        return(
                        <tr>
                            <td>{element.continentName}</td>
                            <td>{element.countryName}</td>
                            {(this.props.selectAreaOrPopulation==="Area" ||this.props.selectAreaOrPopulation==="All") && <td>{element.areaInSqKm}</td>}  
                            {(this.props.selectAreaOrPopulation==="Population"||this.props.selectAreaOrPopulation==="All") && <td>{element.population}</td>}  
                        </tr>
                        )

                    })}
               </tbody>
        )
    }
}
