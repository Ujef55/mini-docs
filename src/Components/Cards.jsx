import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";



function Cards({data}) {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/80 px-8 py-10 overflow-hidden text-white'>
        <FaFileLines />
        <p className='text-sm mt-5 font-semibold leading-tight'>
            {data.desc}
        </p>
        <div className='card-footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center'>
                    {data.closeIcon ? <IoClose className='cursor-pointer' size='.7em' color='#fff'  /> : <MdOutlineFileDownload className='cursor-pointer' size='.7em' color='#fff' />}  
                </span>
            </div>
            {data.tag.isOpen && (
                    <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 px-8 flex items-center justify-center`}>
                        <h3 className='cursor-pointer'>{data.tag.tagTitle}</h3>
                    </div>
            )}
        </div>
    </div>
  )
}

export default Cards