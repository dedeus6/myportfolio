"use client";

import ThemeSwitcherButton from "@/app/components/ThemeSwticherButton";
import LanguageSwitcherButton from "./LanguageSwitcherButton";


const Header = () => {

    return (
        <div className="fixed z-50 p-[2rem] w-full max-h-64 flex justify-end">
            <ThemeSwitcherButton />
            <LanguageSwitcherButton />
        </div>
    )
}

export default Header;