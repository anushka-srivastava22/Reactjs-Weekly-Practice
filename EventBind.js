import React, { Component } from 'react'
class EventBind extends Component
{
   constructor(props)
   {
       super (props)
       this.state = {
           message : 'Hey'
       }
       this.clickHandler = this.clickHandler.bind(this)
   }
   
    
   /*clickHandler()
   {
       this.setState({
           message: 'GoodBye'
       })
       console.log('Good Bye')
   }*/

   clickHandler = () =>
   {
       this.setState({
           message: 'GoodBye'
       })
      
   }
    render()
    {
    return(

        <div>
            <div> {this.state.message}</div>
            <button onClick={this.clickHandler()} >Click me</button>
        </div>
    )
    }
}

export default EventBind
/*Binding in Render
<button onClick={this.clickHandler.bind(this)} >Click me</button>
Binding in arrow function
<button onClick={() => this.clickHandler()} >Click me</button>
Binding in constructor
this.clickHandler = this.clickHandler.bind(this)
 <button onClick={this.clickHandler()} >Click me</button>*/