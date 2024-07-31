import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent(){
    const message = "Hello from parent";
    const username= "Mr Wole";
    const gender= "Male";
    const age= '10';   
     return(
        <>
        <div>
            {/* <ChildComponent name= "Olamiji age="10" gender= "femail"/> */}
            <ChildComponent message={message} username={username} gender={gender} age={age}/>
        </div>

        </>
    )
}

