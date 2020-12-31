import React, { Component } from 'react'

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { 
           isLoggedIn: true

        }
       
    }
   
    render()
    {
       
        return  this.state.isLoggedIn && <div>Welcome Jaanu</div> 

    }
}

export default UserGreeting

/*Inside Render
1  -  If Else

        if(this.state.isLoggedIn)
        {
            return(
                <div>
                    Welcome Jaanu
                    
                </div>
            )

        }
        else{
            return(
                <div>
                    Welcome Friend
                    
                </div>
            )
        }

2 - Element Variable Approach
let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Jaanu</div>
        }
        else
        {
            message = <div>Welcome Friend</div>       
        }
        return <div>{message}</div>
3 - Ternary Operator 
 return(
            this.state.isLoggedIn ?
            <div>Welcome Jaanu</div> : 
            <div>Welcome Friend</div>
        )
4 - Short Circult Approach
done Above        
        */