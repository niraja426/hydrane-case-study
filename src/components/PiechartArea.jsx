import {Pie} from 'react-chartjs-2'
import React, { Component } from 'react'

export default class PiechartArea extends Component {
  

getLabels=()=>{
    var sorted=this.props.data.slice(0,5);
    var labels=sorted.map((s)=>{
        return s.countryName
    })
    console.log("hello labels", labels)
    return labels
   
}
getValues=()=>{
    var sorted=this.props.data.slice(0,5)
    var sorteddata=sorted.map((s)=>{
        return s.areaInSqKm
    })
    console.log("hello sorteddata", sorteddata)
   return sorteddata
}

    render() {
        return (
            <div>
                <h3> Country Area</h3>
                <Pie
                    data={{
                        labels:this.getLabels(),
                        datasets:[{
                            data:this.getValues(),
                            backgroundColor:["red","yellow","green","blue","purple"]}]
                    }}
                    height='80%'
                />
            </div>
        )
    }
}

