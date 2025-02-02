import SvgComponent from "./SvgIcon";

interface SkillProps {
    name: string;
    svg: string;
    customViewBox: string;
}

const Skill = ({ name, svg, customViewBox }: SkillProps) => {
    return (
        <button className="group p-5 cursor-pointer relative text-xl font-bold border-0 flex items-center justify-center bg-transparen text-textColor h-[10rem] w-[170px] overflow-hidden transition-all duration-100">
            <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-[--purple] transition-all duration-500"></span>

            <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">
                <SvgComponent customViewBox={customViewBox} svg={svg} customWeightHeight="w-20 h-20"/>
            </p>

            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute translate-x-full opacity-0  transition-all duration-200">{name}</span>

            <span
                className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-[--purple] transition-all duration-500">
            </span>
        </button>
    );
}

export default Skill;