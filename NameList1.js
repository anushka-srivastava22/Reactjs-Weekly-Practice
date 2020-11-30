import React from 'react'

function NameList1(){
    const  person = [
    {
        id: 1,
        n: 'Anu',
        age: 22,
        skill: 'web'
    },
    {
        id: 2,
        n: 'Ajju',
        age: 32,
        skill: 'app'
    },
    {
        id: 3,
        n: 'Avi',
        age: 18,
        skill: 'coder'
    }
]
const pl = person.map(person =>( <Person key= {person.id} person = {person} />),
    return <div> {pl} </div>
    
}

export default NameList1