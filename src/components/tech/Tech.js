import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './Tech.css'

function Tech() {
  return (
    <div  className='bg-black'>
      <h4 className='text-white p-4 '>Technologies</h4>
    <div className='container' >
      <div >
        <img className='i ' src='https://www.pngitem.com/pimgs/m/174-1746684_java-java-logo-black-png-transparent-png.png' alt=''></img>
        <div style={{ textAlign: 'center' }}>
        <Link className='active' to='java'>Java</Link>
        </div>
      </div>
      <div >
        <img className='i' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH74PKQE1r4T0vzRg8HoHS842QwZMKkYrWRg&usqp=CAU' alt=''></img>
        <div style={{ textAlign: 'center' }}>
      <Link className='active' to='nodejs'>Nodejs</Link>
</div>

      </div>
      <div>
        <img className='i' src='https://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-PNG-Image.png' alt=''></img>
        <div style={{ textAlign: 'center' }}>
        <Link className='active' to='python'>Python</Link>
        </div>
      </div>
      <div>
        <img className='i' src='https://shethink.in/wp-content/uploads/2021/07/react.js-img.png' alt=''></img>
        <div style={{ textAlign: 'center' }}>
        <Link className='active' to='reactjs'>Reactjs</Link>
        </div>
      </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Tech