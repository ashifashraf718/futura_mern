import React, { useEffect, useState } from 'react'
import axios from "axios"

const Crud = () => {
    // const[state,setState]=useState([])
    let Id="65d82259ba5347d4e917cc9a"

    
        async function apiData(){
            let data=await axios.delete(`http://localhost:5000/data/deleteData/${Id}`)
            console.log("deleted successfully");
            
        }
        
    
    // console.log("state",state); 
    
  return (
    <div>
        <h2>delete data</h2>
         <button onClick={apiData}>Delete</button>   
    </div>
  )
}

export default Crud