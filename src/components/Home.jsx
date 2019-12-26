import React,{Component} from 'react'

export default class Home extends Component {
    
    handleClick=()=>{
        this.props.onOkSubmit()
    }
    
    render(){
    return (
        <div>
            <div className="header">
                <h1>HYDRANE REACTJS FRONTEND DEV CASE STUDY</h1>
                <button onClick={this.handleClick} className="button">GO</button>             
            </div>
        </div>
    )
}
}
