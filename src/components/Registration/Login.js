import React from 'react'

function Login() {
  return (
    <div>
        <h2>Login</h2>
        <div style={{margin:"40px"}}>
            <label htmlFor="">Email</label>
            <input type="email" /><br/>
            <label htmlFor="">Password</label>
            <input type="password" />
            <br/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Login