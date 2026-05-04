import Banner from "@/components/HomePage/Banner";
import InstructorSection from "@/components/HomePage/InstructorSection";
import LearningTips from "@/components/HomePage/LearningTips";
import PopularCourses from "@/components/HomePage/PopularCourses";


export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <LearningTips/>
      <InstructorSection/>
    </div>
  );
}
