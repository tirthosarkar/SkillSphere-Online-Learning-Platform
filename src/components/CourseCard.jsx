import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdStar } from 'react-icons/io';

const CourseCard = ({ data }) => {
    const { category } = data
    return (
        <div className='group p-4 lg:p-0 transition-all duration-300 hover:-translate-y-2'>
            <div className=' flex h-full flex-col relative border border-gray-200 shadow-2xl space-y-3 rounded-2xl p-4'>
                <div className='w-full relative aspect-video flex justify-center items-center'>
                    <Image
                        src={data.image}
                       fill
                        className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-102'
                        alt={data.title}
                    ></Image>
                </div>
                <div className='grow space-y-3 mt-3'>
                    <h4 className='flex items-center text-amber-600 font-semibold'>
                        <IoMdStar size={20} />{data.rating}</h4>
                    <h2 className='text-[#0B1C30] text-2xl font-medium min-h-16 line-clamp-2'>{data.title}</h2>
                    <p className='text-[#464555] text-sm'>Instructor: {data.instructor}</p>
                </div>

                <div className='mt-5'>
                    <Link href={`/courses/${data.id}`}>
                        <button className='btn btn-primary w-full'>See Details</button>
                    </Link>
                </div>
                <div
                    className={`absolute badge text-xs top-5 right-5 
                ${category === "Development" ? "badge-primary" : category === "Design" ? "badge-error" : "badge-info"}`}>
                    <p className='text-xs'>{data.category}</p>
                </div>
            </div>


        </div>
    );
};

export default CourseCard;