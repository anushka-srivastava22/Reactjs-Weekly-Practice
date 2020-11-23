import React from 'react'

function FirstPractice(props)
{
    return (
        <div>
            <div className = "details">
                <img src = {props.PersonProp.imgurl} ></img>
                <h2>{props.PersonProp.name}</h2>
                <p>Tasting : {props.PersonProp.Taste}</p>
            </div>
        </div>
    )
}

export default FirstPractice