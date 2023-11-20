
"use client"

import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"
import Image from 'next/image'

import { useState } from 'react'
export default function Navbar() {


    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(show => !show)

    }

    const handleClose = () => {
        setShow(false)
    }


    const navLinks = [{ link: 'Home', to: "/" },{ link: 'Login', to: "/login" }, { link: 'Profille', to: "/profile" }

    ]
    return (

        <div className='  bg-gradient-to-r from-darkBlue to-darkestBlue  px-6 w-full md:px-24'>

            <div className="  mx-auto flex  justify-between  w-full items-center   py-4  ">

                <div className='text-6xl '>
                    <Link href='/'>
                        <Image src="/talosmart.png"
                            width={50}
                            height={50}
                            alt="image" />

                    </Link>
                </div>


                <div className=' hidden  md:flex  flex-col md:flex-row  justify-end'>
                    {navLinks.map((links) => {
                        return (


                            <Link href={links.to} className='text-white hover:text-lightBlue px-6 font-medium  tracking-wider text-base ' key={links} >{links.link}</Link>


                        )
                    })}


                </div>


                
              
                {!show && < div className=' flex items-center   hover:text-white  text-light justify-center md:hidden'>< RxHamburgerMenu className="font-bold text-lg text-white transition duration-500 rounded-4xl w-8 h-8 " onClick={handleShow} /></div>}

                {show && < div className=' flex items-center    hover:text-white   justify-center md:hidden'><AiOutlineClose className="font-bold text-lg text-white transition duration-500  rounded-4xl  w-8 h-8 " onClick={handleClose} /></div>}


            </div>

            {show && <div className=' flex  md:hidden flex-col pt-6  justify-start '>
                    {navLinks.map((links) => {
                        return (


                            <Link href={links.to} className='text-white hover:text-lightGreen py-3 font-medium  tracking-wider text-base ' key={links}  onClick={handleClose} >{links.link}</Link>


                        )
                    })}


                </div>}

        </div>

    )
}
