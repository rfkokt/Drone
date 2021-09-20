import NavBar from "./NavBar";
import Button from "../Button";

export default function Hero(){
    return(
        <>
            <div className={"bg-hero bg-center h-screen"}>
                <div className={"container mx-auto"}>
                    <NavBar/>
                    <div className={"text-center"}>
                        <h1 className={"text-4xl font-medium text-white w-2/3 md:w-10/12 mx-auto xl:mt-20 md:mt-0 mt-16 leading-relaxed"}>Representing
                            Drone Light </h1>
                        <p className={'text-lg font-light text-gray-200 text-opacity-60 w-10/12 md:w-7/12 mx-auto mt-2 leading-relaxed'}>
                            Look up the sky and beautiful world with simple navigation. <br/>
                            Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
                        <Button variant={"blue"} className={"mt-10"} to={'/store'}>Get Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}