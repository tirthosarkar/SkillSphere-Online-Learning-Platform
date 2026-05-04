import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import banner from "@/assets/loginBanner.png"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ZoomIn from "../MotionWrapper/ZoomIn";
import FadeIn from "../MotionWrapper/FadeIn";
const SideContent = () => {
    return (

        <div className="space-y-5 border border-gray-100 rounded-2xl p-5">
            <ZoomIn delay={0.2}>
                <div>
                    <h2 className="text-5xl font-bold text-[#3525CD] pb-9">SkillSphere</h2>
                    <p className="text-[#464555]">The premium destination for cognitive clarity and
                        academic progress. <br /> Join a community of over 2 million
                        learners worldwide.</p>
                </div>
            </ZoomIn>
            <div className="flex gap-5">
                <div className="w-65 border border-gray-200 rounded-2xl p-4 space-y-1">
                    <FadeIn delay={0.3}>
                        <FaGraduationCap size={30} className="text-indigo-600" />
                        <h2 className="text-[#0B1C30] font-medium text-sm">Expert Tutors</h2>
                        <p className="text-[#464555] font-medium text-sm">Learn from industry leaders and
                            academic pioneers.</p>
                    </FadeIn>
                </div>
                <div className="w-65 border border-gray-200 rounded-2xl space-y-1  p-4">
                    <FadeIn delay={0.3}>
                        <RiVerifiedBadgeFill size={30} className="text-green-600" />
                        <h2 className="text-[#0B1C30] font-medium text-sm">Certifications</h2>
                        <p className="text-[#464555] font-medium text-sm">Earn recognized credentials for your
                            achievements.</p>
                    </FadeIn>
                </div>
            </div>
            <ZoomIn delay={0.3}>
                <div>
                    <Image
                        width={600}
                        height={600}
                        alt="banner"
                        className="rounded-2xl"
                        src={banner} />
                </div>
            </ZoomIn>
        </div>
    );
};

export default SideContent;