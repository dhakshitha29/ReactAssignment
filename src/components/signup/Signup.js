import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate,Link} from 'react-router-dom'
import {hashSync} from 'bcryptjs'
import './Signup.css'

function Signup() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()

  function onSignedup(newUser){
    let h=hashSync(newUser.password,5)
    newUser.password=h;
      fetch('http://localhost:4000/users',{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(newUser)
      })
      .then(res=> {
        if(res.status===201){
          navigate('/login')
        }
      })
      .catch(cat=>console.log("error occured"))
  }
  return (
    <div className='hey'>
        <h2 className='text-white mb-4'>Sign up</h2>
        <form onSubmit={handleSubmit(onSignedup)}>
            <input type='text' {...register("firstname",{required:true, minLength:4, maxLength:10})} className='form-control mb-3 bg-transparent c text-white' placeholder='First Name'></input>
            {errors.firstname?.type==='required' && (<p className='text-white'>*firstname is required</p>)}
            {errors.firstname?.type==='minLength' && <p className='text-white'>*Minimum length is 4</p>}
            {errors.firstname?.type==='maxLength' && <p className='text-white'>*Maximum length is 10</p>}
            <input type='text' {...register("lastname",{required:true, minLength:4, maxLength:25})} className='form-control mb-3 bg-transparent c text-white' placeholder='Last Name'></input>
            {errors.lastname?.type==='required' && (<p className='text-white'>*lastname is required</p>)}
            {errors.lastname?.type==='minLength' && <p className='text-white'>*Minimum length is 4</p>}
            {errors.lastname?.type==='maxLength' && <p className='text-white'>*Maximum length is 25</p>}
            <input type='email'{...register("email",{required:true})}  className='form-control mb-3 bg-transparent c text-white' placeholder='Email'></input>
            {errors.email?.type==='required' && (<p className='text-white'>*email is required</p>)}
            <input type='text' {...register("username",{required:true, minLength:4, maxLength:13})} className='form-control mb-3 bg-transparent c text-white' placeholder='Username'></input>
            {errors.username?.type==='required' && (<p className='text-white'>*username is required</p>)}
            {errors.username?.type==='minLength' && <p className='text-white'>*Minimum length is 4</p>}
            {errors.username?.type==='maxLength' && <p className='text-white'>*Maximum length is 13</p>}
            <input type='password' {...register("password")} className='form-control mb-4 bg-transparent c text-white' placeholder='Password'></input>
            <button type='submit' className='btn mt-3 d-block mx-auto bg-white mb-2'>Sign up</button>
            <p className='text-white text-center'>Already Registered? 
            <Link to='/login' >login</Link>
            </p>
        </form>
    </div>
  )
}

export default Signup