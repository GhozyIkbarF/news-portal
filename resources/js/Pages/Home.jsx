import data from '../data'
import { useState, useEffect } from 'react'

export default function Home() {
    
    return (
        <div className='w-full'>
            <div className='w-full flex items-center gap-2'>
                <div className='basis-3/5 border border-black'>
                    <img src={data[0].image} alt='profile' className='object-cover h-96 w-full' />
                    <p>{data[1].name}</p>
                </div>
                <div className='basis-2/5 h-96 border border-black'>dfgdfgs</div>
            </div>
        </div>
    )
}
