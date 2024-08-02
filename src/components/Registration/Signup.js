import React from 'react'

function Signup() {
  return (
    <div>
        <h1>SignUp</h1>
        <div style={{margin:"40px"}}>
            <label htmlFor="">Nmae : </label>
            <input type="text" name="" id="" /><br/>
            <label htmlFor="">Email : </label>
            <input type="email" /><br/>
            <label htmlFor="">Password : </label>
            <input type="password" /><br/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Signup