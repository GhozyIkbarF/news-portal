import data from '../data'
import { useState, useEffect } from 'react'

export default function Home() {
    return (
        <div className='w-full'>
            <div className='w-full h-full flex gap-2'>
                <div className='relative basis-3/5'>
                    <img src={data[0].image} alt='profile' className='object-cover h-full w-full' />
                    <div className='absolute bottom-0 left-0 text-white p-2 bg-zinc-900/50'>
                        <p>{data[0].address}</p>
                    </div>
                </div>
                <div className='basis-2/5 flex flex-col pl-2 gap-3'>
                    {data.slice(0, 4).map((item, index) => {
                        return (
                            <div key={index} className='flex w-full basis-2/3 gap-2'>
                                <div className='basis-2/5'>
                                    <img src={item.image} alt='profile' className='object-cover h-24 w-full' />
                                </div>
                                <div className='basis-3/5 font-bold'>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='w-full mt-10'>
                <h1 className='font-extrabold text-lg'>Top Stories</h1>
                <div className='grid grid-cols-5 gap-2'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-between p-0'>
                                <div>
                                    <img src={item.image} alt='profile' className='object-cover h-32 w-full m-0'/>
                                    <div className='flex justify-between w-full py-2'>
                                        <h1 className='font-bold text-sm'>{item.name}</h1>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="currentColor" 
                                            class="bi bi-three-dots rotate-90 h-4 w-4 cursor-pointer" 
                                            viewBox="0 0 16 16"> 
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> 
                                        </svg>
                                    </div>

                                </div>
                                <p className='text-xs'>{item.address}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
