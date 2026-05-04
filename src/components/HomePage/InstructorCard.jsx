'use client'
import Image from 'next/image';
import React from 'react';
import { easeInOut, motion } from "motion/react"

const InstructorCard = ({ins}) => {
    const {name,image, role} = ins
    return (
        <motion.div 
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        whileHover={{scale: 1.06}}
        whileTap={{scale: 0.9}}
        transition={{duration: 0.2, ease: easeInOut}}

        className='p-9 border border-gray-200 shadow-xl rounded-2xl'>
            <motion.div 
            whileHover={{rotate: 360}}
            transition={{duration: 0.3, ease: easeInOut}}
            className='flex w-full rounded-full p-5 border-3 border-green-500 relative aspect-square justify-center items-center '>
                <Image 
                src={image}
                fill
                alt={name}
                className='rounded-full object-cover w-full'
                />
            </motion.div>
            <div className='text-center space-y-2 pt-4'>
                <h2 className='text-[#0B1C30] font-semibold'>{name}</h2>
                <p className='text-[#3525CD] font-medium'>{role}</p>
            </div>
        </motion.div>
    );
};

export default InstructorCard;