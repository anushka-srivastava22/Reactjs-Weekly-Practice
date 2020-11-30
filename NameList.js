import React from 'react'

function NameList(){
    const n = ['Anu', 'Avi' , 'Ajju']
    const nl = n.map( n => <h2>{n}</h2> )
    return (
        <div>
            {
                nl
            }
        </div>
    )
}

export default NameList

/*

            <h2>{n[0]}</h2>
            <h2>{n[1]}</h2>
            <h2>{n[2]}</h2>
            */