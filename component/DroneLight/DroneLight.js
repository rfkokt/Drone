import Image from "next/image";
import DroneL from "../../assets/images/benefit_feature_image1.png"

export default function DroneLight() {
    return (
        <div className={"bg-abu-150"}>
            <div className={"container mx-auto"}>
                <div className={"flex flex-wrap"}>
                    <div className={"lg:w-4/12 text-center w-full py-6 px-20 lg:px-0 lg:py-20 lg:pl-32"}>
                        <Image src={DroneL}/>
                    </div>
                    <div className={"lg:w-8/12 w-full text-center lg:text-left lg:py-20 lg:pl-20"}>
                        <h1 className={"md:text-5xl text-4xl mx-auto leading-relaxed font-medium mb-5"}>
                            Why drone light?
                        </h1>
                        <p className={"text-xl text-blackContent font-light px-5 md:px-0 lg:pr-40 mb-8 mx-auto leading-relaxed"}>
                            We provide a best self drone easy to use and operate. With
                            auto pilot, the device will take a beautiful view for the
                            best of flying operation.
                        </p>
                        <div className={"flex flex-wrap px-10 lg:px-0 md:text-center lg:-ml-6 lg:pr-40"}>
                            <div className={"lg:w-3/12 w-6/12 md:mb-10 md:pr-0 pr-2"}>
                                <h1 className={"text-4xl font-medium"}>4K</h1>
                                <p className={"text-xl text-blackContent opacity-75 font-light"}>Camera Resolution</p>
                            </div>
                            <div className={"lg:w-3/12 w-6/12 md:pr-0 pr-2"}>
                                <h1 className={"text-4xl font-medium"}>2 TB</h1>
                                <p className={"text-xl text-blackContent opacity-75 font-light"}>Storage Capacity</p>
                            </div>
                            <div className={"lg:w-3/12 w-6/12 md:pr-0 pr-2"}>
                                <h1 className={"text-4xl font-medium"}>60 m/s</h1>
                                <p className={"text-xl text-blackContent opacity-75 font-light"}>Super <br/> Max Speed</p>
                            </div>
                            <div className={"lg:w-3/12 w-6/12 md:pr-0 pr-2"}>
                                <h1 className={"text-4xl font-medium"}>30 mins</h1>
                                <p className={"text-xl text-blackContent opacity-75 font-light"}>Long Flight <br/>Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
