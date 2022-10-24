import React from 'react'
import '../Nav.css'
import { FaRegCopyright } from 'react-icons/fa'

export default function Footer() {
   return (
      <div className='body1 d-flex justify-content-center p-4 mt-4'>
         <p>Copyright <FaRegCopyright/> Viagens Fantásticas 2022</p>
      </div>
   )
}