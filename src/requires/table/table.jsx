import React from 'react';
import './table.scss';

export const Table = ({f, val}) => {
    let l =[];
    let i =0;
    for( const[key, value] of f.entries()){
        if(i<val){
            l.push(<tr key={i+1} ><td>{i+1}</td><td>{key}</td><td>{value}</td></tr>);
            i++;
        }
        else{
            break;
        }
    }
    return(
        <table>
                <tr className="tr">
                    <td>S.No</td>
                    <td>Word</td>
                    <td>Frequency</td>
                </tr>
                {l}
        </table>
    )
}