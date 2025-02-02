import Image from 'next/image';
import meImage from '../../assets/me-real.png';

const RightSection = () => {
    return (
        <div className="flex flex-1 justify-center items-center text-textColor light:text-color">
            <div className="flex flex-col items-center justify-center">
                <div className="border-4 border-[#C4C9F0] rounded-full p-2">
                    <Image 
                        src={meImage} 
                        alt="Minha imagem"
                        width={350}
                        height={350}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSection;