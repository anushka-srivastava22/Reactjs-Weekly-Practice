import React from 'react';


class FirstClass extends React.Component{
    constructor()
    {
        super()
        this.state = { 
            Count : 0

        }
        this.countNumber = this.countNumber.bind(this)
    }
    countNumber(){
        this.setState((prevalue)=>{
            return {Count: prevalue.Count + 1}
        })
    }
    /*componentDidMount(){
        setTimeout(()=>
        {
            this.setState({
                Count: 5
            })
        },4000)
    }*/
    componentDidMount()
    {
        
    }
    render(){
       
        return(
            <div>
                <h1>{this.state.Count}</h1>
                
            </div>
        )
    }
}
export default FirstClass