import data from '../data'
import { useState, useEffect } from 'react'

export default function Home() {
    
    return (
        <div className='w-full'>
            <div className='w-full h-full lg:flex md:flex sm:inline-block gap-2'>
                <div className='relative lg:basis-3/5 sm:basis-5/5 '>
                    <img src={data[0].image} alt='profile' className='object-cover h-full w-full' />
                    <div className='absolute bottom-0 left-0 text-white p-2 bg-zinc-900/50'>
                        <p>{data[0].address}</p>
                    </div>
                </div>
                <div className='lg:basis-2/5 sm:basis-0/5 flex-col lg:gap-2 md:gap-1 lg:flex md:flex sm:hidden '>
                    {data.slice(0, 4).map((item, index) => {
                        return (
                            <div key={index} className='lg:flex md:flex w-full basis-2/3 lg:gap-2 md:gap-2 sm:hidden'>
                                <div className='basis-2/5'>
                                    <img src={item.image} alt='profile' className='object-cover lg:h-24 md:h-20 w-full lg:block md:block sm:hidden' />
                                </div>
                                <div className='basis-3/5 lg:text-lg md:text-md font-bold hover:underline underline-offset-1'>{item.name}</div>
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
                                    <img src={item.image} alt='profile' className='object-cover h-32 w-full m-0' />
                                    <div className='flex justify-between w-full py-2'>
                                        <h1 className='font-bold text-sm hover:underline underline-offset-1'>{item.name}</h1>
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

            <div className='w-full flex justify-center mt-20'>
                <div className='basis-8/12'>
                    <h1 className='font-bold text-lg mb-2'>Latest Stories</h1>
                    <div className='flex flex-col gap-2 w-full'>
                        {data.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex justify-start h-40 w-full'>
                                    <div className='basis-7/12 pt-3'>
                                        <div className='flex justify-start mb-2'>
                                            <img src={item.image} alt="" className='object-cover rounded-full w-6 h-6' />
                                            <span className='px-1'>abcdefghijk</span>
                                        </div>
                                        <h1 className='font-bold text-sm hover:underline underline-offset-1 mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat.</h1>
                                        <p className='text-xs text-zinc-900'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magni labore eveniet ipsum! Nostrum animi corporis, quia magni consequuntur quo.</p>
                                    </div>
                                    <div className='basis-1/12'>

                                    </div>
                                    <div className='basis-3/12'>
                                        <img src={item.image} alt="" className='object-cover h-full w-full' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='basis-4/12'>
                    <h1 className='font-bold text-lg mb-2'>Upcoming streaming</h1>
                    <div className='flex flex-col gap-2 w-full pl-2'>
                        {data.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex gap-2 h-20'>
                                    <div className='basis-3/12'>
                                        <img src={item.image} alt="" className='object-cover h-full w-full' />
                                    </div>
                                    <div className='basis-9/12 pt-3'>
                                        <div className='flex justify-start mb-2'>
                                            <p className='text-xs'>jugjhgj</p>
                                        </div>
                                        <h1 className='font-bold text-sm hover:underline underline-offset-1 mb-2'>Lorem, sit amet consectetur adipisicing elit. Vitae, repellat.</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
