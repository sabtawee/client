import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LoginPage from './Login/LoginPage';

export default function HomePage() {
  const EMP_NO = JSON.parse(localStorage.getItem("EMP_NO"));

  if(!EMP_NO){
    return <LoginPage url="/camarema"/>
  }


  return (
    <div>
      Home
    </div>
  )
}
