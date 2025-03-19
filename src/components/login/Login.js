import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useForm  } from 'react-hook-form'
import './Login.css'
import { compareSync } from 'bcryptjs'

function Login() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()

  function onloggedin(userobj){
    fetch(`http://localhost:4000/users?username=${userobj.username}`)
    .then(res=> res.json())
    .then((objarray)=>{
      if(objarray.length===0){
        alert("Invalid username");
      }else{
        let result=compareSync(userobj.password,objarray[0].password)
        if(result===true){
            navigate(`/userdashboard/${userobj.username}`,{state : objarray[0]})
        }else{
          alert('Invalid password');
        }
      }
    });
  }

  return (
    <div className='log'>
         <h2 className='text-white text-center mb-4'>Login</h2>
        <form onSubmit={handleSubmit(onloggedin)}>
            <input type='text' {...register("username",{required:true, minLength:4, maxLength:13})} className='form-control mb-3 bg-transparent c text-white' placeholder='Username'></input>
            {errors.username?.type==='required' && (<p className='text-white'>*username is required</p>)}
            {errors.username?.type==='minLength' && <p className='text-white'>*Minimum length is 4</p>}
            {errors.username?.type==='maxLength' && <p className='text-white'>*Maximum length is 13</p>}
            <input type='password' {...register("password")} className='form-control mb-1 bg-transparent c text-white' placeholder='Password'></input>
            {errors.password?.type==='required' && (<p className='text-white'>*password is required</p>)}
            <input type='checkbox' className='form-check-input' id='reme' />
          <label className='form-check-label text-white ms-1' htmlFor='reme'>Remember me</label>
            <button type='submit' className='btn mt-5 d-block mx-auto mb-2 bg-white'>Login</button>
            <p className='text-white text-center'>Not Registered? 
            <Link to='/signup' >Signup</Link>
            </p>
        </form>
    </div>
  )
}

export default Login