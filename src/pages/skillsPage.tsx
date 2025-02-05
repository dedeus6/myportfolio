"use client";

import Skill from "@/components/Skill";
import { useTranslations } from "next-intl";
import skills from "@/data/SkillsData";

const SkillsPage = () => {

    const t = useTranslations("skills");

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center" data-aos="slide-left">
            <p className="text-[2rem] text-textColor font-bold pb-5">{t("skillsTitle")}</p>
            <div className="w-full flex justify-center px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full max-w-screen-lg">
                    {skills.map(({ name, svg, customViewBox }) => (
                        <Skill key={name} name={name} svg={svg} customViewBox={customViewBox} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;