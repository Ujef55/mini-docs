import React from 'react'
import Cards from './Cards'

function Foreground() {
  const data = [{
    desc: ' Lorem ipsum dolor sit amet consectetur.',
    filesize: '.7mb',
    closeIcon: true,
    tag: {isOpen: true, tagTitle: 'Download now', tagColor: 'green'}
  },
  {
    desc: ' Lorem ipsum dolor sit amet consectetur.',
    filesize: '.7mb',
    closeIcon: true,
    tag: {isOpen: true, tagTitle: 'Download now', tagColor: 'green'}
  },
  {
    desc: ' Lorem ipsum dolor sit amet consectetur.',
    filesize: '.7mb',
    closeIcon: true,
    tag: {isOpen: true, tagTitle: 'Download now', tagColor: 'green'}
  },
];
  return (
    <div className='fixed top-0 left-0 w-full z-[3] h-full p-5 flex gap-5 flex-wrap'>
        {data.map((item, index) => (
          <Cards data={item} />
        ))}
    </div>
  )
}

export default Foreground