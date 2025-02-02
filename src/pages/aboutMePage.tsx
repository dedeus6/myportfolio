import Image from "next/image";
import me from "../../assets/me.png";

const AboutMePage = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center p-10 md:p-[10rem] gap-8"
            data-aos="slide-right"
        >
            {/* Seção da Imagem */}
            <div className="flex-1 flex items-center justify-center">
                <Image
                    src={me}
                    alt="Minha imagem"
                    width={500}
                    height={500}
                    className="rounded-full w-64 md:w-[500px] h-auto"
                />
            </div>

            {/* Seção de Texto */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-screen-lg flex flex-col justify-center items-center text-center">
                    <p className="text-2xl md:text-[2rem] text-textColor font-bold pb-5">About Me</p>
                    <p className="text-textColor text-sm md:text-base">
                        Software engineer with 5 years of experience, specialized in backend with a strong foundation in frontend. I work with <strong>Java</strong>, <strong>Python</strong>, <strong>TypeScript</strong>, <strong>SQL/NoSQL databases</strong>, and <strong>AWS</strong>, developing scalable and high-performance systems.
                    </p>
                    <br />
                    <p className="text-textColor text-sm md:text-base">
                        I have worked on the development of a comprehensive platform for QA professionals management, the modernization of legacy systems, and high-load critical projects. Currently, I am part of the team responsible for Pix at Cielo, ensuring the stability and performance of one of Brazil&apos;s main payment methods, using reactive programming with Spring WebFlux. My experience includes process optimization, scalability, and delivering robust solutions for large transaction volumes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;