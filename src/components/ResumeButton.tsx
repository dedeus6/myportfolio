const ResumeButton = () => {

    const handleDownload = () => {
        alert("Under construction...")
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center">
            <div className="cursor-pointer">
                <button onClick={handleDownload} className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-textColor transition duration-300 ease-out border-2 border-[--purple] rounded-full shadow-md group w-[8.5rem] h-[3rem]">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-textColor duration-300 -translate-x-full bg-[--purple] group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6 text-gray-800 text-whiteColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                    </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-textColor transition-all duration-300 transform group-hover:translate-x-full ease">Resume</span>
                    <span className="relative invisible">Continue</span>
                </button>
            </div>
        </div>
    );
}

export default ResumeButton;