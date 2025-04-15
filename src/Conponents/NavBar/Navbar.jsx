import React from 'react'
import { Link } from './Link';

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Blog", path: "/blog" },
    { id: 6, name: "Contact", path: "/contact" }
  ];
  

export const Navbar = () => {
  return (
    <div>

        <ul className='flex'>
            {
                navigation.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>

        {/* <ul className='flex'>
            {navigation.map(router => (<li className='ml-8 cursor-pointer hover:underline'>
                <a href="{router.path}"></a>{router.name}</li>))}
        </ul> */}

        {/* <ul className='flex'>
            <li className= "ml-6"><a href="/">Home</a></li>
            <li className= "ml-6"><a href="/">About</a></li>
            <li className= "ml-6"><a href="/">Contract</a></li>
        </ul> */}
    </div>
  )
}
