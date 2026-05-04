import CourseCard from '@/components/CourseCard';
import SearchBar from '@/components/HomePage/SearchBar';
import FadeIn from '@/components/MotionWrapper/FadeIn';
import React from 'react';
import image from "@/assets/CourseNotFound.jpg"
import Image from 'next/image';


const CoursePage = async ({ searchParams }) => {
    console.log(searchParams, "search params from all courses");
    

    const query = (await searchParams)?.search || "";

    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/db.json",
        { cache: 'no-store' });

    const allCourses = await res.json();

    const filteredCourses = allCourses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='container mx-auto'>
            <FadeIn delay={0.2}>
                <h2 className='text-2xl font-bold text-center py-8'>All Courses</h2>
                <div className='max-w-md mx-auto p-4 mb-10'>
                    <SearchBar defaultValue={query} />
                </div>
            </FadeIn>
            {
                filteredCourses.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 lg:gap-6 mb-10'>
                        {filteredCourses.map((data, index) => (
                            <FadeIn key={data.id} delay={index * 0.1}>
                                <CourseCard data={data} />
                            </FadeIn>
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-20'>

                        <div className='flex justify-center items-center'>
                            <Image
                            src={image}
                            width={400}
                            height={400}
                            alt='not Found'
                            />
                        </div>
                        <p className='text-xl text-gray-500'>No courses found for {query}</p>
                    </div>
                )
            }
        </div>
    );
};

export default CoursePage;