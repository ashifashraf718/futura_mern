import React from 'react'
import { deleteApi } from './Api'

const Delete = () => {
    const id="65d8375e9d9419c4de793f6e"
    const submit=async()=>{
     deleteApi(id)
     console.log("deleted");
    }
 
    
  return (
    <div>

    <button onClick={submit}>Delete</button>

    </div>
  )
}

export default Delete