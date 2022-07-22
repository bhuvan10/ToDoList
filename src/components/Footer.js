import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"relative",
    top:"100vh",
    width:"100%"
  }
  return (
    <div className='bg-dark py-3 text-light' style={footerStyle} >
      <p className='text-center'>Copyright &copy; MyToDoList.com</p>
    </div>
  )
}
