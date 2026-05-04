import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='mt-10 bg-base-200 border-t border-gray-200'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 py-12 px-5'>

                <div className='col-span-1 md:col-span-5 space-y-5'>
                    <h2 className='text-3xl font-bold text-indigo-600'>SkillSphere</h2>
                    <p className='text-[#464555] text-base max-w-sm leading-relaxed'>
                        Revolutionizing online education through immersive, expert-led courses and modern learning methodologies.
                    </p>
                </div>

           
                <div className='col-span-1 md:col-span-3'>
                    <h2 className='text-[#0B1C30] font-bold mb-5 uppercase tracking-wider text-sm'>Contact Info</h2>
                    <ul className='text-[#464555] text-sm space-y-3'>
                        <li className='flex items-center gap-3'>
                            <FaEnvelope className='text-indigo-600' /> support@skillsphere.com
                        </li>
                        <li className='flex items-center gap-3'>
                            <FaPhoneAlt className='text-indigo-600' /> +880 1234-567890
                        </li>
                        <li className='flex items-center gap-3'>
                            <FaMapMarkerAlt className='text-indigo-600' /> Nilphamari, Bangladesh
                        </li>
                    </ul>
                </div>

           
                <div className='col-span-1 md:col-span-2'>
                    <h2 className='text-[#0B1C30] font-bold mb-5 uppercase tracking-wider text-sm'>Legal</h2>
                    <ul className='text-[#464555] text-sm space-y-3'>
                     
                        <li className="hover:text-indigo-600 cursor-pointer transition-colors"
                        >Terms & Conditions</li>
                        <li className="hover:text-indigo-600 cursor-pointer transition-colors"
                        >Privacy Policy</li>
                        <li className="hover:text-indigo-600 cursor-pointer transition-colors"
                        >Refund Policy</li>
                    </ul>
                </div>

          
                <div className='col-span-1 md:col-span-2'>
                    <h2 className='text-[#0B1C30] font-bold mb-5 uppercase tracking-wider text-sm'>Social Links</h2>
                    <div className='flex gap-4'>
                        <a href="#" className="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                            <FaLinkedin size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-sky-500 hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaFacebook size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-300 opacity-50 container mx-auto'></div>

            <div className='text-center py-8'>
                <p className='text-gray-500 text-xs tracking-wide'>
                    © {new Date().getFullYear()} <span className='font-semibold'>SkillSphere</span>. Empowering learners worldwide.
                </p>
            </div>
        </footer>
    );
};

export default Footer;