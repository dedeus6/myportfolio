import Image from "next/image";
import me from "../assets/me.png";
import SvgComponent from "@/app/components/SvgIcon";
import { useTranslations } from "next-intl";

const AboutMePage = () => {

    const t = useTranslations("aboutMe");

    return (
        <div
            className="w-full min-h-screen flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto items-center md:p-[10rem] gap-8"
            data-aos="slide-right"
        >
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-screen-lg flex flex-col justify-center items-center text-center">
                    <p className="text-2xl md:text-[2rem] text-textColor font-bold pb-5">{t("aboutTitle")}</p>
                    <p className="text-textColor text-sm md:text-base">
                        {t("aboutTextFirst")}
                    </p>
                    <br />
                    <p className="text-textColor text-sm md:text-base">
                        {t("aboutTextSecond")}
                    </p>
                    <div className="flex flex-1 justify-between items-center pt-[2rem] text-textColor">
                        <a href="https://www.linkedin.com/in/filipededeus" target="_blank" className="hover:scale-110">
                            <SvgComponent customViewBox="0 0 50 50" customWeightHeight="w-12 h-12" svg="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                        </a>
                        <a href="https://github.com/dedeus6" target="_blank" className="hover:scale-110">
                            <SvgComponent customViewBox="0 0 50 50" customWeightHeight="w-12 h-12" svg="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-start order-last md:order-first">
                <Image
                    src={me}
                    alt="Minha imagem"
                    width={400}
                    height={400}
                    className="rounded-full w-64 md:w-[500px] h-auto"
                />
            </div>
        </div>
    );
};

export default AboutMePage;