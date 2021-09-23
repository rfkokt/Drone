import Card from "./Card";

export default function Testimoni() {
    return (
        <>

            <div className={"py-20 mb-28"}>
                <div className={"container mx-auto"}>
                    <div className={"w-2/3 mb-20"}>
                        <h1 className={"md:text-7xl text-4xl ml-4 mx-auto leading-relaxed font-medium mb-5"}>
                            What Our “Pilots
                            <br/>
                            Are Saying</h1>
                    </div>
                    <div className={"flex flex-wrap justify-center"}>
                        <div className={"lg:w-3/12 w-full lg:ml-10 lg:mb-0 ml-5 mb-10 mx-5 ml-4 "}>
                            <Card
                                name={"Hugo Adams"}
                                desc={" With high resolution camera,\n" +
                            "picture become clear and beautiful.\n" +
                            "It’s so easy to operate drone."}
                                src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                work={"Content Creator"}
                            />
                        </div>
                        <div className={" lg:w-3/12 w-full  lg:ml-10 lg:mb-0 ml-5 mb-10 mx-5 ml-4"}>
                            <Card
                                name={"Jennie Obrien"}
                                desc={"Taking high view video become easy and faster. Battery performance really helping for making film."}
                                src={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                work={"Director Film"}
                            />
                        </div>
                        <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-0 ml-5 mb-10 mx-5 ml-4"}>
                            <Card
                                name={"Lisa Millz"}
                                desc={"Making video content for my trip\n" +
                                "vlog so powerful and wonderful.\n" +
                                "Love the video quality."}
                                src={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                work={"Content WQCreator"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
