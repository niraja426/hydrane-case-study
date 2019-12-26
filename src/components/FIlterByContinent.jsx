// import React,{Component} from 'react'
// import AllContinents from './AllContinents'

// export default class FIlterByContinent extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             selectedContinent:" "
//         }
//     }
//     handleChange=(e)=>{
//         this.setState({
//             selectedContinent:e.target.value
//         })
//     }

//     getContinents=()=>{
//         return this.props.data
//           .map(element => element.continentName)
//           .filter((continent, i, continents) => continents.indexOf(continent) === i)
//           .sort();
//       }
//       render(){
//     return (
//         <div>
//         <div>
//             <label>Filter by Continents</label>
//             <select name="selectContinent" value={this.state.selectedContinent} onChange={this.handleChange}>
//                  <option value="">All Continents</option>
//                 {this.getContinents().map(continent => (<option key={continent} value={continent}>{continent}</option> ))}
//             </select>
//         </div>

//         </div>
//     )
// }
// }
