import React from 'react'
import notFound from '../../Images/undraw_page_not_found_su7k (1).svg'
import './NotFound.style.css'
export const NotFound = () => {
  return (
    <div className='Nf_background'>
      <img
        className='Nf_image'
        src={notFound} alt="" />
    </div>
  )
}
