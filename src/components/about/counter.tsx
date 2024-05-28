import React from 'react';

export default function Counter() {
    const counters = [
        {
            title: "NEW VISITORS EVERY WEEK",
            number: "254"
        },
        {
            title: "HAPPY CUSTOMERS EVERY YEAR",
            number: "12168"
        },
        {
            title: "WON AWARDS",
            number: "172"
        },
        {
            title: "WEEKLY DELIVERIES",
            number: "732"
        }
    ];

    return (
        <div className="bg-cover p-10 relative" style={{ backgroundImage: "url(https://diamant.kwst.net/site/images/bg/14.jpg)" }}>
             <div className="absolute inset-0 bg-[#272535] opacity-60"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white relative'>
                {counters.map((counter, index) => (
                    <div key={index} className='relative text-center before:content before:absolute before:top-1/2 before:width-[1px] before:bg-white/20 before:height-[20px] block'>
                        <span className='text-5xl font-Playfair text-primary'>{counter.number}</span>
                        <h5 className='my-4 text-xl text-white'>{counter.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}
