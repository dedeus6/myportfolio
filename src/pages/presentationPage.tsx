import RightSection from "@/components/RightSection";
import LeftSection from "@/components/LeftSection";

const PresentationPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center" data-aos="slide-left">
            <div className="flex-1 flex items-center justify-center">
                <LeftSection />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <RightSection />
            </div>
        </div>
    );
};

export default PresentationPage;