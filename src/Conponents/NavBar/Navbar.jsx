import React, { useState } from 'react'
import { Link } from './Link';
import { Menu, X } from 'lucide-react';

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Blog", path: "/blog" },
    { id: 6, name: "Contact", path: "/contact" }
  ];
  
    const links = navigation.map(route => <Link key={route.id} route={route}></Link>);

export const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav className='max-w-11/12 mx-auto flex justify-between mt-2'>

        <span className='flex' onClick={()=> setOpen(!open)}>
            {
                open? 
                    <X className='md:hidden'></X> 
                    :<Menu className='md:hidden'></Menu>
            }
            <ul className='md:hidden'>
                {
                    links
                }
            </ul>
            <h1 className='btn hidden md:block' >MyNavBar</h1>
        </span>

        <ul className='md:flex hidden'>
            {
                links
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
        <button className='btn'>Sign In</button>
    </nav>
  )
}
