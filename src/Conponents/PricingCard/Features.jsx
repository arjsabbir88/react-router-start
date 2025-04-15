import { CircleCheckBig } from 'lucide-react'
import React from 'react'

export const Features = ({feature}) => {
  return (
    <div>
        <p className='cursor-pointer'>
            <span className='flex gap-2
                hover:bg-cyan-950 rounded-lg p-2
            '>
                <CircleCheckBig className='text-cyan-400'></CircleCheckBig> {feature}
            </span>
        </p>
    </div>

)
}
