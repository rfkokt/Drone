import Button from "../Button";
import {useEffect, useState} from "react";

// function getWindowDimensions() {
//     const {innerWidth: width, innerHeight: height} = window;
//     return {
//         width,
//         height
//     };
// }
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default function DetailProduct({name, price, desc, src}) {
    const size = useWindowSize();
    console.log('debug', size)
    return (
        <>
            {size.width > 942 ?
                <div className="flex carousel-item items-center justify-center w-full xl:h-screen overflow-hidden">
                    <div className="box-wrapper relative w-2/3 h-4/5  p-16 select-none">
                        <div className="rounded-2xl w-full h-full bg-gray-100 flex flex-wrap">
                            <div
                                className="bg-gradient-to-tr from-blue-700 to-blue-500 w-1/2 h-full rounded-2xl transform scale-105 shadow-theme-2">
                                <div className="h-full w-full flex items-end justify-center">
                                    <div className="relative">
                                        <h1 className="text-5xl font-bold text-white text-center transition-all duration-500 transform group-hover:-rotate-15 group-hover:scale-125">{name}</h1>
                                        <img src={src} alt="drone"
                                             className="transition-all duration-500 transform group-hover:scale-150 mb-20"/>
                                    </div>
                                </div>
                            </div>
                            <div className="left-side bg-gray-200 w-1/2 h-full rounded-2xl pl-20 pr-8 py-6">
                                <div className="text-logo flex justify-end">
                                    <img src="https://i.ibb.co/HFpkHLc/text-logo.png" className="w-56" alt="logo"/>
                                </div>

                                <div className="paragraph py-3 mt-10 xl:mt-20">
                                    <span className="font-bold text-3xl text-gray-600">{price}</span>
                                    <p className="leading-6 mt-3 text-gray-700 text-lg">{desc}</p>
                                    <Button variant={"blue"} className={"mt-10"} to={'/store'}>Get Now</Button>

                                </div>
                            </div>
                            <div
                                className="text-center w-full mt-12 uppercase text-xl tracking-more-wide text-black">{"<--- Swipe --->"}
                            </div>
                        </div>
                    </div>
                </div> :

                <div
                    className="carousel-item items-center w-full h-full overflow-hidden">
                    <div className="w-full h-full p-10">
                        <div className="bg-gradient-to-tr from-blue-700 to-blue-500 w-full h-full rounded-2xl ">
                            <div className="h-full w-full">
                                <div className="">
                                    <br/>
                                    <h1 className="text-5xl font-bold text-white text-center">{name}</h1>
                                    <br/>
                                    <div className={"justify-center text-center items-center"}>

                                        <img src={src} alt="drone"/>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-10 bg-gray-100 rounded-2xl overflow-hidden scale-105 shadow-theme-3"}>
                                <p className="text-gray-600 md:text-2xl text-lg">{desc}</p>
                                <div className={"flex items-center justify-between mt-10"}>
                                    <p className="font-bold text-3xl text-gray-700 text-white">{price}</p>
                                    <Button variant={"blue"} className={""} to={'/store'}>Get
                                        Now</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}
