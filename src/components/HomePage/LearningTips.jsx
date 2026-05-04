
import React from 'react';
import { FiZap } from 'react-icons/fi';
import { LuAlarmClockCheck, LuBrainCircuit } from 'react-icons/lu';
import { PiUsersThreeFill } from 'react-icons/pi';
import FadeIn from '../MotionWrapper/FadeIn';


const LearningTips = () => {
    return (
        <div className='container mx-auto p-5 my-14'>
            <FadeIn delay={0.4}>
                <h2 className='text-center text-3xl lg:text-4xl font-bold text-[#0B1C30] py-6'>Smart Learning Tips</h2>
            </FadeIn>
            <FadeIn delay={0.5}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 md:p-2  gap-4'>
                    <div className='p-4 shadow-2xl  border-b-4 border-green-500 rounded-2xl space-y-3'>
                        <div className=' flex justify-center items-center'>
                            <span className='bg-green-300 p-4 rounded-full'><LuAlarmClockCheck size={30} /></span>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-[#0B1C30]'>Pomodoro Technique</h2>
                            <p className='text-[#444651] text-sm font-medium'>Study for 25 minutes, then take a
                                5-minute break to stay fresh and
                                focused.</p>
                        </div>
                    </div>
                    <div className='p-4 shadow-2xl  border-b-4 border-purple-500 rounded-2xl space-y-3'>
                        <div className=' flex justify-center items-center'>
                            <span className='bg-purple-300 p-4 rounded-full'><FiZap size={30} /></span>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-[#0B1C30]'>Active Recall</h2>
                            <p className='text-[#444651] text-sm font-medium'>Testing yourself is 3x more
                                effective than just re-reading
                                course materials..</p>
                        </div>
                    </div>
                    <div className='p-4 shadow-2xl  border-b-4 border-yellow-500 rounded-2xl space-y-3'>
                        <div className=' flex justify-center items-center'>
                            <span className='bg-yellow-300 p-4 rounded-full'><LuBrainCircuit size={30} /></span>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-[#0B1C30]'>Mind Mapping</h2>
                            <p className='text-[#444651] text-sm font-medium'>Connect new concepts to old ones
                                to build a stronger mental
                                framework.</p>
                        </div>
                    </div>
                    <div className='p-4 shadow-2xl  border-b-4 border-blue-500 rounded-2xl space-y-3'>
                        <div className=' flex justify-center items-center'>
                            <span className='bg-blue-300 p-4 rounded-full'><PiUsersThreeFill size={30} /></span>
                        </div>
                        <div className='space-y-2 '>
                            <h2 className='text-[#0B1C30]'>Teach Others</h2>
                            <p className='text-[#444651] text-sm font-medium'>Explaining a topic to someone else
                                is the best way to master it
                                yourself.</p>
                        </div>
                    </div>


                </div>
            </FadeIn>
        </div >
    );
};

export default LearningTips;