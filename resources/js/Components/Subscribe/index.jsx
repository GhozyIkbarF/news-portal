import React from 'react'
import data from '../../Data'

export default function index() {
  return (
    <div className='w-full relative left-0 mt-20 h-60'>
        <img src={data[0].image} alt="" className='object-cover h-full w-full'/>
    </div>
  )
}
