import { title } from 'process'
import React from 'react'

export default function Services() {

    const service = [
        {
            icon:"",
            number:"01.",
            title:"PICK UP & DROP",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon:"",
            number:"02.",
            title:"PARKING SPACE",
            des:"Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat."
        },
        {
            icon:"",
            number:"03.",
            title:"ROOM SERVICE",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon:"",
            number:"04.",
            title:"FREE WIFI",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon:"",
            number:"05.",
            title:"FREE BREAKFAST",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon:"",
            number:"06.",
            title:"TRAVEL ACCOMODATION",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon:"",
            number:"07.",
            title:"AIRPORT SHUTTLE",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon:"",
            number:"08.",
            title:"WHEELCHAIR FRIENDLY",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }
    ]
  return (
    <div className='m-10'>
        <div className="text-center my-5">
            <span className="border-t-2 h-[1px] w-10 border-primary block my-5 mx-auto"></span>
            <h5 className="text-primary italic text-lg">OTHER AMINITES AND SERVICES</h5>
            <h1 className="text-3xl my-5">ENJOY COMPLETE & BEST QUALITY COOPERATION</h1>
        </div>
        <div className='my-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10'>
            {
                service?.map((item,index)=>(
                    <div className='p-8 shadow-lg rounded-md relative hover:shadow-2xl'>
                        <span className='flex justify-center items-center absolute top-0 right-0 z-10 h-12 w-12 border-[1px] border-[#eee] rounded-bl-lg bg-primary/10 text-primary'>{item.number}</span>
                        <h1 className='my-4'>{item.title}</h1>
                        <p className='leading-loose text-sm'>{item.des}</p>
                        <span className='border-b-[1px] opacity-10 border-primary block h-1 w-full shadow-lg'></span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
