import RightSection from "@/components/RightSection";
import LeftSection from "@/components/LeftSection";

const PresentationPage = () => {
    return (
        <div 
            className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-4 p-4"
            data-aos="slide-left"
        >
            <div className="flex-1 w-full flex items-center justify-center">
                <LeftSection />
            </div>
            <div className="flex-1 w-full flex items-center justify-center">
                <RightSection />
            </div>
        </div>
    );
};

export default PresentationPage;