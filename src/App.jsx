
import { Suspense } from 'react'
import './App.css'
import { Navbar } from './Conponents/NavBar/Navbar'
import { PricingCard } from './Conponents/PricingCard/PricingCard'


const pricingPromise = fetch("PricingData.json")
.then(res => res.json())

function App() {


  return (
    <>
      
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Suspense>
          <PricingCard key={pricingPromise.id} 
            pricingPromise = {pricingPromise}>
          </PricingCard>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
