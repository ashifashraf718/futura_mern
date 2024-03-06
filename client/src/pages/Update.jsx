import React, { useState } from 'react'
import axios from "axios"
import "./signup.css"
import { updateApi } from './Api'
const Update = () => {
    const [name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Mob, setMob] = useState()
    const [Address, setAddress] = useState()
    const [Pin, setPin] = useState()
    const [Password, setPassword] = useState()


    let Id="65d8375e9d9419c4de793f6e"

    const submit = () => {
        console.log(name, Email, Mob, Address, Pin, Password);
        updateApi({name, Email, Mob, Address, Pin, Password},Id)
    }


  return (
    <div className='main'>
            <div className="signup">
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='mobile' onChange={(e) => setMob(e.target.value)} />
                <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                <input type="number" placeholder='Pin' onChange={(e) => setPin(e.target.value)} />
                <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button className='btn' onClick={submit}>Submit</button>
            </div>

        </div>
  )
}

export default Update