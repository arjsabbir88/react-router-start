import React from 'react'

export const Link = ({route}) => {
    const {name,path} = route;
    
  return (
    <div>
        <ul className='flex'>
            <li className='ml-8 cursor-pointer hover:underline'>
            <a href={path}>{name}</a></li>
        </ul>
    </div>
  )
}
