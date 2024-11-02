import { UserButton } from '@clerk/nextjs';
import Button from '@mui/material/Button'; // Correctly importing Material-UI Button
import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <div className='p-3 px-5 flex items-center justify-between shadow-md'>
            <div className='flex gap-3 items-center'>
                <Image src={'/logo.png'} width={50} height={60} alt="Logo" />
                <h2 className='font-bold text-xl'>Ai Short Vid</h2>
            </div>
            <div className='flex gap-3 items-center'>
                <Button variant="contained">Dashboard</Button>
                <UserButton />
            </div>
        </div>
    );
}

export default Header;
