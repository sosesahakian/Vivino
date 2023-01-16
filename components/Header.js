import { TextField } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import vivino from '../public/vivino.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <div className=' border-b shadow-md h-22'>
            <div className='flex justify-between'>
                <div className='flex '>
                    {/* Logo */}
                    <div>
                        <Image 
                            src={vivino}
                            width={100}
                            height={100}
                            alt="vivino logo"
                        />
                    </div>
                    {/* search bar */}
                    <div className='flex items-center px-2 '>
                        <i className='absolute p-3'> <SearchOutlinedIcon  className=' opacity-10'/></i>
                        <input className='rounded-full border h-10 pl-10 w-48' placeholder='Search any wine' />
                    </div>
                </div>
                <div className='flex w-28 items-center justify-around'>
                    <AccountCircleIcon className='h-20 w-12 opacity-30' />
                    <ShoppingCartOutlinedIcon className=' opacity-20 w-10 h-10' />
                </div>
            </div>
        </div>
    )
}
export default Header;