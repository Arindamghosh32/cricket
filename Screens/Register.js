import React from 'react'
import Header from './../component/Header';
import Reg from './../component/Reg';
import './../css/register.css'

export default function Register() {
  return (
    <>
    <div className="reg-background">
    <Header/>
    <br></br>
    <Reg/>
    </div>
    </>
  )
}
