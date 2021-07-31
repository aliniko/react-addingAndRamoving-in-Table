import React, { Component } from 'react'
import Table from './Table'
class  App extends Component {
    render(){

        const charachters = [{
            name: 'John', 
            job: 'Developer',
        }, 
        {
            name: 'Latif',
            Job: "Manager",
        },
        {
            name: 'Ehsan',
            Job: "Electronik",
        },{
            name: 'Romi',
            job: 'Designer',
        },
    ]
    
    //     return (
    //       <div className="container">
    //        <Table />
    //       </div>
    //     );
    //   }

        return (
            <div className ='container'>
               <Table characterData={characters} />
            </div>
        
    )}
  
}

export default App
