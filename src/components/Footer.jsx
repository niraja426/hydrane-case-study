import React from 'react'

export default function Footer(props) {
    return (
        (!props.loading)?null: <tfoot>
            <tr>
                <td colspan="2">TOTAL</td>
                {(props.selectedAreaOrPopulation==="Area" ||props.selectedAreaOrPopulation==="All") 
                && <td>{props.data.reduce((a,i)=>{
                    return a+Number(i.areaInSqKm)
                },0)}
</td>}  
                {(props.selectedAreaOrPopulation==="Population"||props.selectedAreaOrPopulation==="All") && <td>{props.data.reduce((a,i)=>{
                        return a+Number(i.population)
                    },0)}
</td>}
            </tr>
         </tfoot>
        
    )
}
