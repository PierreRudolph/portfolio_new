export function GatterBg() {
    return (
        <div className="absolute inset-0">
            <svg
                className="w-full h-full dark:text-white"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect width="40" height="40" fill="transparent" />
                        <path
                            d="M0 0 H40"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.06"
                        />
                        <path
                            d="M0 0 V40"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.06"
                        />
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    );
}