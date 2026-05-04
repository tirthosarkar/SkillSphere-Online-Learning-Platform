"use client"
import bannerImg from "@/assets/banner2.jpg"
import Image from "next/image";
import { easeInOut, motion } from "motion/react"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineNotStarted } from "react-icons/md";

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse lg:flex-row  justify-between my-10 lg:my-20'>
            <div className="space-y-6 lg:space-y-8 p-5">
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: easeInOut, duration: 0.5 }}
                    className="badge bg-[#E2DFFF] text-[#0F0069]">PREMIUM LEARNING PLATFORM</motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: easeInOut, delay: 0.2, duration: 0.6 }}

                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C30]">Upgrade Your Skills <br /> Today 🚀</motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: easeInOut, delay: 0.3, duration: 0.6 }}

                    className="text-[#464555] font-normal">Learn from Industry Experts with carefully curated
                    designed <br className="hidden lg:block" /> to  accelerate your career growth in
                    the modern economy.</motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: easeInOut, delay: 0.5, duration: 0.4 }}
                >
                    <Link href={'/courses'}>
                        <button className='btn btn-primary mr-5'>Explore Courses <FaArrowRight /></button>
                    </Link>

                    <Link href={"/register"}>
                        <button className='btn btn-primary btn-outline'><MdOutlineNotStarted />Get Started</button>
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }} 
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20, 
                    delay: 0.4 
                }}

                className="w-full lg:w-1/2 order-1 lg:order-2 p-3 lg:p-0 rounded-2xl shadow-2xl">
                <Image
                    className="w-full h-auto rounded-2xl shadow lg:shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                    src={bannerImg}
                    width={800}
                    height={600}
                    alt="BannerImage" />
            </motion.div>
        </div>
    );
};

export default Banner;