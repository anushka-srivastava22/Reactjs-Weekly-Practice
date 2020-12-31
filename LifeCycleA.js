import React, { Component } from 'react'

class LifeCycleA extends  Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name:'Anushka'
        }
        console.log('ifeCycleA constructor')
    }
    static getDerivedStateFromProps(props , state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA  ComponentDidMount')
    }
    render(){
        console.log('LifeCycleA render')
        return(
           
            <div> 
                LifeCycle
            </div>
        )
    }
}

export default LifeCycleA