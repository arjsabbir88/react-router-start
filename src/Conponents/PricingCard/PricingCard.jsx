import React, { use } from 'react'
import { Cards } from './Cards';

export const PricingCard = ({pricingPromise}) => {

    const  pricingData = use(pricingPromise);

  return (
    
    <div className='max-w-11/12 mx-auto'>
        <h1 className='text-5xl my-10'>Get Your Choice</h1>
        <div className=' grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                pricingData.map(cardData => <Cards key={cardData.id}
                    cardData={cardData}>
                    </Cards>)
            }
        </div>
    </div>
  )
}
