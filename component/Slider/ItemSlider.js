import Button from "../Button";
import Image from "next/image";
import test from '../../assets/images/mini_drone1.png'

export default function ItemSlider({name, desc, img}) {
    console.log('debug',img)
    return (
        <div className={"px-10"}>
            <div
                className="text-center w-full p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <div className="w-96 object-cover rounded-t-md">
                    <Image src={test} width={"410px"} height={"240px"} alt=""/>
                </div>
                <div className="mt-4">
                    <h1 className="text-4xl font-bold text-blackContent">{name}</h1>
                    <p className="text-xl mt-2 text-blackContent">{desc}</p>

                    <div className="mt-4 mb-2">
                        <Button variant={"blue"} className={"mt-10"} to={'/store'}>Get Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}