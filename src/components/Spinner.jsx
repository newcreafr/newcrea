export default function SpinnerDots() {
    return (
        <div className="flex flex-col items-center justify-center py-10 w-full max-w-xs mx-auto text-center">
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="absolute left-0 top-0 h-full w-full bg-paletteColor2 animate-[loadingBar_1.5s_ease-in-out_infinite]"/>
            </div>
            <p className="mt-4 text-md text-paletteColor1 tracking-wide">Chargement...</p>

            <style jsx>{`
                @keyframes loadingBar {
                    0% {
                        transform: translateX(-100%);
                    }
                    50% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    );
}
