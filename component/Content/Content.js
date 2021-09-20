import ultraLight from "../../public/ultra_light1.png"

export default function Content() {
    return (
        <section className={"py-10"}>
            <div className={" container mx-auto"}>
                <div className={"flex -mx-10"}>
                    <div className={"w-48 md:w-6/12 text-center px-10"}>
                        <div
                            className={"bg-ultra-light bg-cover h-[680px] mb-20"}
                        >
                            <h1 className={"text-5xl font-medium text-blackContent w-2/3 md:w-10/12 mx-auto leading-relaxed"}>
                                <br/>
                                Ultra
                                Light</h1>
                            <p className={"text-3xl text-abu-300 px-16"}>Drone move faster with weighing component <span
                                className={"text-abu-900"}>under 200 g</span></p>
                        </div>
                    </div>
                    <div className={"w-48 md:w-6/12 text-center px-10"}>
                        <div
                            className={"bg-best-resolution bg-cover h-[680px] mb-20"}
                        >
                            <h1 className={"text-5xl font-medium text-white w-2/3 md:w-10/12 mx-auto leading-relaxed"}>
                                <br/>
                                Best Resolution</h1>
                            <p className={"text-3xl text-abu-300 px-16"}>Take a beautiful view with best camera
                                up to <span className={"text-white"}>4K Camera Resolution</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}