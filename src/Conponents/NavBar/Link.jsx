import React from 'react'

export const Link = ({route}) => {
    const {name,path} = route;
    
  return (
    <div>
        <ul className='flex'>
            <li className='m-2 border-b-black px-4 cursor-pointer hover:underline'>
            <a href={path}>{name}</a></li>
        </ul>
    </div>
  )
}
