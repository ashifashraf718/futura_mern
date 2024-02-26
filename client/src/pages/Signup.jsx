import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./signup.css"

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mob, setMob] = useState("")
    const [address, setAddress] = useState("")
    const [pin, setPin] = useState()
    const [password, setPassword] = useState("")

    const submit = () => {
        console.log(name, email, mob, address, pin, password);
        axios.post("http://localhost:5000/data/signup", { name, email, mob, address, pin, password })
    }


    useEffect(()=>{
        async function apiData(){
            let data=await axios.get("http://localhost:5000/data/fetchData")
            console.log("data :",data.data);
        }
        apiData()
    },[])
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

export default Signup