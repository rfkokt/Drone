import Button from "../Button";

export default function DetailProduct() {
    return (
        <>
            <div className="flex carousel-item items-center justify-center w-full h-screen overflow-hidden">
                <div className="box-wrapper relative w-2/3 h-4/5  p-16 select-none">
                    <div className="left-circle rounded-full border border-white w-6 h-6 absolute left-0 top-12"></div>
                    <div className="two-circle w-10 h-10 absolute right-0 top-0">
                        <div className="rounded-full border border-white w-full h-full absolute right-0 top-0"></div>
                        <div className="rounded-full border-2 border-white w-6 h-6 absolute left-6 top-4"></div>
                    </div>
                    <div className="two-circle w-8 h-8 absolute left-0 bottom-0">
                        <div className="absolute left-6 top-0 text-white">
                            <svg className="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M466.271 21.333L256 21.354l-210.271-.021C20.521 21.333 0 41.979 0 67.375c0 6.938 1.583 13.667 4.688 20 34.083 69.958 91.25 169.167 141.688 256.708 26.354 45.75 51.25 88.958 69.25 121.792 8.521 15.521 23.604 24.792 40.396 24.792 16.771 0 31.854-9.271 40.375-24.792 17.979-32.813 42.854-76 69.188-121.708 50.458-87.563 107.625-186.813 141.729-256.75C510.417 81.063 512 74.313 512 67.375c0-25.396-20.521-46.042-45.729-46.042z"/>
                            </svg>
                        </div>
                        <div className="absolute left-16 top-5 text-white">
                            <svg className="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M466.271 21.333L256 21.354l-210.271-.021C20.521 21.333 0 41.979 0 67.375c0 6.938 1.583 13.667 4.688 20 34.083 69.958 91.25 169.167 141.688 256.708 26.354 45.75 51.25 88.958 69.25 121.792 8.521 15.521 23.604 24.792 40.396 24.792 16.771 0 31.854-9.271 40.375-24.792 17.979-32.813 42.854-76 69.188-121.708 50.458-87.563 107.625-186.813 141.729-256.75C510.417 81.063 512 74.313 512 67.375c0-25.396-20.521-46.042-45.729-46.042z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="box rounded-2xl w-full h-full bg-gray-100 flex flex-wrap shadow-theme-1">

                        <div
                            className="left-side bg-gradient-to-tr from-abu-900 to-abu-400 w-1/2 h-full rounded-2xl transform scale-105 shadow-theme-2">
                            <div className="shoe h-full w-full flex items-end justify-center group">
                                <div className="relative">
                                    <h1 className="text-5xl font-bold text-white text-center transition-all duration-500 transform group-hover:-rotate-15 group-hover:scale-125">Mini
                                        Drone</h1>
                                    <img src='https://i.ibb.co/0YFrqqk/test-Trans.png' alt="shoe"
                                         className="transition-all duration-500 transform group-hover:scale-150 mb-36"/>
                                </div>
                            </div>
                        </div>
                        <div className="left-side bg-gray-200 w-1/2 h-full rounded-2xl pl-20 pr-8 py-6">
                            <div className="text-logo flex justify-end">
                                <img src="https://i.ibb.co/HFpkHLc/text-logo.png" className="w-56" alt="logo"/>
                            </div>

                            <div className="paragraph py-3 mt-20">
                                <span className="font-bold text-3xl text-gray-600">$199</span>
                                <p className="leading-6 mt-3 text-gray-700 text-lg">Experience sports, traning, shopping
                                    and everything else that`s new at Nike from any country in the world.</p>
                                <Button variant={"blue"} className={"mt-10"} to={'/store'}>Get Now</Button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#" className="btn btn-circle">❮</a>
                    <a href="#" className="btn btn-circle">❯</a>
                </div>
            </div>

        </>
    )
}