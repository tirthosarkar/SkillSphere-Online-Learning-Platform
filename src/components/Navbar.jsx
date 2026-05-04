"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {
    const userData = authClient.useSession();
    const router = useRouter()
    const user = userData.data?.user

    // console.log(user, "user data");

    const pathName = usePathname();

    const links = <>
        <li
            className={`${pathName === '/' ?
                "font-bold text-indigo-700 border-b-4 border-indigo-700" : ''}mx-2`}><Link href={'/'}>Home</Link></li>
        <li
            className={`${pathName === '/courses' ?
                "font-bold text-indigo-700 border-b-4 border-indigo-700" : ''}mx-2`}
        ><Link href={'/courses'}>All Courses</Link></li>
        <li
            className={`${pathName === '/profile' ?
                "font-bold text-indigo-700 border-b-4 border-indigo-700" : ''}`}
        ><Link href={'/profile'}>My Profile</Link></li>
    </>

    const handleSignOut=async()=>{
        await authClient.signOut()
         router.push('/');
    }
    
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <h2 className='text-[#4F46E5] text-xl lg:text-2xl font-bold'>SkillSphere</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-[#475569]">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user &&
                        <ul className='flex gap-2 lg:gap-3'>
                            <Link href={'/login'}><button className='btn btn-primary btn-outline'>Login</button></Link>
                            <Link href={'/register'}><button className='btn btn-primary'>Register</button></Link>
                        </ul>}

                    {
                        user &&
                        <div className='flex items-center gap-1.5'>
                            <div className='border-3 border-indigo-700 rounded-full'>
                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy='no-referrer'
                                        />
                                        
                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                </Avatar>
                            </div>
                            <button 
                            onClick={handleSignOut}
                            className='btn btn-primary text-white'><MdOutlineLogout />Logout</button>  
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;