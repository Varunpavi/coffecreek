import React from 'react'

export default function Preloader() {
    return (
        <>
            {/* <div id="preloader" className="fixed top-0 w-[100%] h-[100%] flex items-center">
                <div id="loader" className="relative left-[50%] right-[50%] w-[150px] h-[150px] rounded-[50%] border-2 border-solid border-transparent border-t-[#9370DB] animate-spin duration-300 delay-900 ease-linear before:content-[''] before:absolute  before:top-[5px] before:left-[5px] before:right-[5px] before:bottom-[5px] before:rounded-[50%] before:border-2 before:border-solid before:border-transparent before:border-t-[#BA55D3] before:animate-spin before:duration-100 before:delay-800 before:ease-linear after:content-[''] after:absolute  after:top-[15px] after:left-[15px] after:right-[15px] after:bottom-[15px] after:rounded-[50%] after:border-2 after:border-solid after:border-transparent after:border-t-[#FF00FF] after:animate-spin after:duration-600 after:delay-700 after:ease-linear">
                    <span></span>
                </div>
            </div> */}
            <div id="preloader">
                <div id="loader">
                    <span></span>
                </div>
            </div>
        </>
    )
}
