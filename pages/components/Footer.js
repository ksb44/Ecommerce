import React from 'react';
import Link from 'next/link';
function Footer() {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
     <img src="/1.jpg" alt=""/>
      </a>
      <p className="mt-2 text-sm text-gray-500">Welcome to e-commerce store</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Shop</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href='/tshirts' className="text-gray-400 hover:text-white">Tshirts</Link>
          </li>
          <li>
          <Link href='/hoodies'className="text-gray-400 hover:text-white">Hoodies</Link>
          </li>
          <li>
          <Link href='/stickers' className="text-gray-400 hover:text-white">Stickers</Link>
          </li>
          <li>
          <Link href='/mugs'className="text-gray-400 hover:text-white">Mug</Link>
          </li>
        </nav>
      </div>

    </div>
  </div>


</footer>
        </div>
    )
}
export default Footer;