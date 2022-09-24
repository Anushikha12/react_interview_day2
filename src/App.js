import React, { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const login=(e)=>{
    e.preventDefault();
    const data={
      'email':email,
      'password':password
    }
   axios.post('http://localhost:4000/login',data).then((response)=>{
    response.data.log?console.log('logged-in'):console.log('wrong-credentials')
   }).catch((err)=>{
    console.log(err)
   })
  }
  return (
    <div className='container d-flex align-items-center justify-content-center flex-direction-column'>
      <form className='w-50 mt-5 shadow-lg p-3 mb-5 bg-white rounded'  onSubmit={login}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default App