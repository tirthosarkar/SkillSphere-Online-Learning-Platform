import Image from 'next/image';
import React from 'react';
import { CiClock1 } from 'react-icons/ci';
import { FaRegFolderOpen } from 'react-icons/fa';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(id, "params");

    const resp = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/db.json",
        { cache: 'no-store' });
    const courseData = await resp.json();

    const course = courseData.find(data => data.id == id);
    // console.log(course, "expected course");

    const { image, title, instructor, description, category, level, rating, duration, price } = course;

    const staticCurriculum = [
        "Introduction to the Course",
        "Fundamental Concepts & Best Practices",
        "Hands-on Project Work & Implementation",
        "Advanced Tools and Techniques",
        "Final Assessment and Certification"
    ];
    return (
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 container mx-auto my-10 px-5 lg:px-0'>
            <div className='w-full  flex justify-center items-start'>
                <Image
                    src={image}
                    width={400}
                    height={400}
                    className='w-full h-auto rounded-2xl shadow-md object-contain'
                    alt={title}
                />
            </div>
            <div className='w-full  space-y-6'>

                <div>
                    <span className='px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold uppercase'>
                        {level}
                    </span>
                    <h1 className='text-4xl font-bold text-[#0B1C30] mt-3'>{title}</h1>
                    <p className='text-gray-500 mt-2 font-medium'>Instructor: <span className='text-indigo-600'>{instructor}</span></p>
                </div>


                <div className='flex items-center gap-2'>
                    <span className='text-yellow-500 font-bold text-lg'>{rating}</span>
                    <div className='flex text-yellow-400'> ★ ★ ★ ★ ★ </div>
                    <span className='text-gray-400 text-sm'>(2.5k reviews)</span>
                </div>


                <p className='text-gray-600 leading-7 text-justify border-b pb-6'>
                    {description}
                </p>


                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-gray-100 rounded-lg'><CiClock1 /></div>
                        <div>
                            <p className='text-xs text-gray-400 uppercase'>Duration</p>
                            <p className='font-semibold'>{duration}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-gray-100 rounded-lg'><FaRegFolderOpen /></div>
                        <div>
                            <p className='text-xs text-gray-400 uppercase'>Category</p>
                            <p className='font-semibold'>{category}</p>
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-between pt-6'>
                    <div>
                        <p className='text-sm text-gray-400'>Course Price</p>
                        <p className='text-3xl font-bold text-[#0B1C30]'>${price}</p>
                    </div>
                    <button className='bg-[#3525CD] text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200'>
                        Enroll Now
                    </button>
                </div>
                
                <div className='mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100'>
                    <h3 className='text-2xl font-bold text-[#0B1C30] mb-5'>Course Curriculum</h3>
                    <div className='space-y-3'>
                        {staticCurriculum.map((item, index) => (
                            <div key={index} className='flex items-center gap-4 p-3 hover:bg-indigo-200 bg-white rounded-lg shadow-sm border border-gray-50'>
                                <span className='flex justify-center items-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm'>
                                    {index + 1}
                                </span>
                                <p className='text-gray-700 font-medium'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;