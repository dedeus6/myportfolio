interface SkillProps {
    svg: string;
    customViewBox: string;
    customWeightHeight: string;
}

const SvgComponent = ({ svg, customViewBox, customWeightHeight }: SkillProps) => {
    return (
        <svg
            viewBox={customViewBox}
            className={`${customWeightHeight} text-icon-color`}
            fill="currentColor"
        >
            <path d={svg}></path>
        </svg>
    );
}

export default SvgComponent;