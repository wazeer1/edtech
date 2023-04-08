import React, { useContext, useEffect } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Approute from '../Routes/Approute'
import Approuter from './Approuter'
import Authrouter from './AuthRouter'
import Authroute from '../Routes/Authroute'
import { Context } from '../../context/Store'


const Mainrouter = () => {
  const {dispatch}=useContext(Context)
        useEffect(()=>{
            let userData=localStorage.getItem('userData');
            userData = JSON.parse(userData);
            dispatch({
              type:"UPDATE_USER_DATA",
              payload: userData
            })
          },[])
  return (
    <div>
        <Routes>
            <Route path='/*' element={<Approute><Approuter/></Approute>}/>
            <Route path='/auth/*' element={<Authroute><Authrouter/></Authroute>}/>
        </Routes>
    </div>
  )
}

export default Mainrouter