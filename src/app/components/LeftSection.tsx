'use client';

import MailButton from "@/app/components/MailButton";
import ResumeButton from "@/app/components/ResumeButton";
import { useTranslations } from "next-intl";

const LeftSection = () => {

    const t = useTranslations("presentation");

    return (
        <div className='flex flex-col'>
            <div className="flex flex-col justify-start">
                <p className="text-[2rem] text-textColor font-bold">{t("welcome")}</p>
                <div className="flex items-center justify-center bg-gradient-to-tr">
                    <div className="w-max">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 text-[2.6rem] text-purple font-bold">Filipe de Deus 👋</h1>
                    </div>
                </div>
                <p className="text-[2rem] text-secondaryTextColor">{t("role")}</p>
            </div>
            <div className="flex pt-3 justify-between">
                <ResumeButton />
                <MailButton />
            </div>
        </div>
    );
}

export default LeftSection;