import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../../context/Store'
import { axiosConfig } from '../../general/accountConfig'
import Dashboard from '../../screens/Dashboard'
import StudentDashboard from '../../screens/StudentDashboard'

const Approuter = () => {
  const {state:{userData:{access}},state,dispatch}=useContext(Context)

  useEffect(()=>{
    axiosConfig.get('accounts/minimal/',{
      headers: {
        Authorization: `Bearer ${access}`,
    },
    }).then(function(res){
      if(res.data.StatusCode == 6000){
        dispatch({
          type: "UPDATE_USER_DETAILS",
          payload: {
              name:res.data.data.name,
              photo:res.data.data.photo,
              points:res.data.data.points,
              end_date:res.data.data.end_date
          },
        })
      }
    })
  },[])
  console.log(state);
  return (
    <Routes>
        <Route path='/*' element={<StudentDashboard/>}/>
    </Routes>
  )
}

export default Approuter