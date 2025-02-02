import ThemeSwitcherButton from "@/components/ThemeSwticherButton";

const Header = () => {
    return (
        <div className="fixed z-50 p-[2rem] w-full max-h-64 flex justify-end">
            <ThemeSwitcherButton />
        </div>
    )
}

export default Header;