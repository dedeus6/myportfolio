"use client";

import { getCookie, setCookie, useGetCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import usFlag from '../assets/flag-us.png';
import brazilFlag from '../assets/flag-brazil.png';

const LanguageSwitcherButton = () => {

    const [locale, setLocale] = useState<string>("en");
    const router = useRouter();

    useEffect(() => {
        const savedLocale = getCookie("LOCALE")?.toString() || "en";
        setLocale(savedLocale);
    }, []);

    const changeLanguage = () => {
        const newLocale = locale === "en" ? "pt" : "en";
        setCookie("LOCALE", newLocale);
        setLocale(newLocale);
        router.refresh();
    };

    return (
        <button onClick={() => changeLanguage()} className="h-12 w-12 rounded-lg p-2 hover:scale-110">
            {
                locale == "en" ? (
                    <Image alt="Brazil flag" src={brazilFlag} width={100} height={100} />
                ) : (
                    <Image alt="United States flag" src={usFlag} width={100} height={100} />
                )
            }
        </button>
    );
}

export default LanguageSwitcherButton;