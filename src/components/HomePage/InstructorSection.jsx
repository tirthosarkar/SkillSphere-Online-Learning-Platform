import React from 'react';
import InstructorCard from './InstructorCard';
import FadeIn from '../MotionWrapper/FadeIn';

const InstructorSection = async () => {
    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/instructor.json",
        { cache: "no-store" });
    const instructor = await res.json();

    console.log(instructor);

    return (
        <div className='container mx-auto p-2 py-8'>
            <FadeIn delay={0.3}>
                <h2 className='text-3xl lg:text-4xl font-bold text-[#0B1C30] text-center py-8'>Top Instructors</h2>
            </FadeIn>

            <FadeIn delay={0.4}>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-5'>
                    {
                        instructor.map(ins => <InstructorCard key={ins.id} ins={ins}></InstructorCard>)
                    }
                </div>
            </FadeIn>

            <FadeIn delay={0.4}>
                <div className='lg:w-2xl mx-auto border  border-gray-100 shadow-2xl mt-10 space-y-6 py-8 flex justify-center items-center flex-col rounded-2xl p-5'>
                    <h2 className='text-[#0B1C30] text-lg'>Ready to transform your career?</h2>
                    <button className='btn btn-primary rounded-3xl py-5'>Join the Community</button>
                </div>
            </FadeIn>
        </div>
    );
};

export default InstructorSection;