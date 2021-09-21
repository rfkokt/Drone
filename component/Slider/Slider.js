import ItemSlider from "./ItemSlider";

import miniDrone from "../../assets/images/mini_drone1.png"
import droneLight from "../../assets/images/drone_light1.png"

const phantomDrone = `https://images.unsplash.com/photo-1508444845599-5c89863b1c44`

export default function Slider() {
    const item = [
        {
            id: 1,
            name: "Mini Drone",
            desc: "Powerful camera drone at anaffordable price range. Camera up to 4K resolution, optimize shots automatically.",
            img: `../../assets/images/mini_drone1.png`
        },
        {
            id: 2,
            name: "Drone Light",
            desc: "Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.",
            img: `../../assets/images/mini_drone1.png`
        },
        {
            id: 3,
            name: "Phantom Drone",
            desc: "Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.",
            img: `../../assets/images/mini_drone1.png`
        },
    ]
    return (
        <div className={"md:py-10"}>
            <div className={"container mx-auto"}>
                <div className={"text-center mb-10"}>
                    <h1 className={"text-4xl font-medium"}>New Product</h1>
                    <p className={"text-xl mt-10 text-blackContent opacity-75 font-light"}>
                        New innovation, best quality than before.
                        <br/>
                        Make every moment flying operation become unforgettable.</p>
                </div>

                <div className="flex justify-center">
                    {item.map(item => (
                        <ItemSlider key={item.id} name={item.name} desc={item.desc}/>
                    ))}
                    {/*<ItemSlider/>*/}
                    {/*<ItemSlider/>*/}
                    {/*<ItemSlider/>*/}
                </div>
            </div>
        </div>
    )
}