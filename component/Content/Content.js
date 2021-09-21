import ultraLight from "../../public/ultra_light1.png"

export default function Content() {
    return (
        <>
        <section className={"py-8"}>
            <div className={"container mx-auto"}>
                <div className={"flex flex-wrap"}>
                    <div className={"lg:w-6/12 text-center px-3"}>
                        <div
                            className={"bg-ultra-light h-[480px] md:h-[660px] bg-cover bg-center mb-5"}
                        >
                            <h1 className={" text-4xl md:text-5xl md:pt-16 pt-10 mb-5 font-medium text-blackContent mx-auto leading-relaxed"}>
                                Ultra
                                Light</h1>
                            <p className={"text-2xl md:text-3xl text-abu-300 px-11 md:px-18"}>Drone move faster with weighing component <span
                                className={"text-abu-900"}>under 200 g</span></p>
                        </div>
                    </div>
                    <div className={"lg:w-6/12 w-full text-center px-3"}>
                        <div
                            className={"bg-best-resolution  h-[480px] md:h-[660px] bg-cover bg-center mb-5"}
                        >
                            <h1 className={" text-4xl md:text-5xl md:pt-16 pt-10 mb-5 font-medium text-white mx-auto leading-relaxed"}>
                                Best Resolution</h1>
                            <p className={"text-2xl md:text-3xl text-abu-300 px-5 md:px-16"}>Take a beautiful view with best camera
                                up to <span className={"text-white"}>4K Camera Resolution</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
