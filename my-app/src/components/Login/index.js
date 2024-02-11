import { useState } from "react"
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

import './index.css'

const Login=(props)=>{

    const {history} = props
    const [getUsername,setUsername] = useState('')
    const [getPassword,setPassword] = useState('')

    const onChangeUsername=(event)=>{
        setUsername(event.target.value)
    }

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }

    const getJwtToken=(token)=>{
        Cookies.set('jwt_token',token,{expires:30})
        history.replace('/')
    }

    const onSubmitDetails=async (event)=>{
        event.preventDefault()
        const userDetails={
            username:getUsername,
            password:getPassword
        }

        const url='https://bookstore-backend-f0o4.onrender.com/login'
            const options={
                method:"POST",
                headers :{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userDetails) ,
                
            }

            const response=await fetch(url,options)
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(response.ok){
                getJwtToken(data.generateToken)
            }
        
    }

    const token = Cookies.get('jwt_token')
    if (token!==undefined){
        <Redirect to='/'/>
    }
    return(
        <div className="login-container">
            <form onSubmit={onSubmitDetails} className="form-container">
                <h1>Login</h1>
            <div className="input-container">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="input-element" onChange={onChangeUsername}/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="input-element" onChange={onChangePassword}/>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )

}


export default Login