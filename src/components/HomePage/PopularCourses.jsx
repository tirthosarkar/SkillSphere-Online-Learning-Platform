import React, { cache } from 'react';
import CourseCard from '../CourseCard';
import Link from 'next/link';
import FadeIn from '../MotionWrapper/FadeIn';

import { FaArrowRight } from 'react-icons/fa';


const PopularCourses = async () => {
    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/db.json",
        { cache: 'no-store' });

    const courseData = await res.json();

    const popularCourse = courseData.sort((a, b) => b.rating - a.rating).slice(0, 3);
    // console.log(popularCourse);


    return (
        <div className='container mx-auto p-5'>
            <div className='flex  text-center lg:text-start flex-col lg:flex-row justify-between space-y-4'>
                <div >
                    <FadeIn delay={0.3}>
                        <h2 className='text-[#0B1C30] text-2xl lg:text-3xl font-bold'>Popular Courses</h2>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p className='text-[#464555] text-xs lg:text-sm'>Our most enrolled programs this month</p>
                    </FadeIn>
                </div>
                <FadeIn delay={0.3}>
                    <Link href={'/courses'}>
                        <button className='text-[#3525CD] text-sm  btn btn-outline'>View All Courses <FaArrowRight /></button>
                    </Link>
                </FadeIn>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2 lg:gap-6'>
                {popularCourse.map((data, index) => (
                    <FadeIn key={data.id} delay={index * 0.1}> 
                        <CourseCard data={data} />
                    </FadeIn>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;