const MailButton = () => {
    const email = 'filipedeus2015@gmail.com';

    const handleClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center">
            <div className="cursor-pointer">
                <button onClick={handleClick} className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-textColor transition duration-300 ease-out border-2 border-[--purple] rounded-full shadow-md group w-[8.5rem] h-[3rem]">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[--purple] group-hover:translate-x-0 ease">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 25"
                            className="size-6 fill-current group-hover:text-white dark:text-white text-textColor"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-textColor transition-all duration-300 transform group-hover:translate-x-full ease">Talk to me</span>
                    <span className="relative invisible">Continue</span>
                </button>
            </div>
        </div>
    );
}

export default MailButton;