import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";


function Cards() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/60 px-8 py-10 overflow-hidden text-white'>
        <FaFileLines />
        <p className='text-sm mt-5 font-semibold leading-tight'>
            Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className='card-footer absolute bottom-0 h-12 py-3 px-8 w-full left-0'>
            <div className='flex items-center justify-between mb-5'>
                <h5>.6mb</h5>
                <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
                    <MdOutlineFileDownload className='cursor-pointer' />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Cards