import Drone from '../../assets/images/droneTrans.png'
import './Product.module.css'
import Button from "../Button";
import DetailProduct from "./DetailProduct";

export default function Product() {
    return (
        <div className={"py-10"}>
            {/*<div className={"container mx-auto"}>*/}
                <div className={"text-center mb-10"}>
                    <h1 className={"text-4xl font-medium"}>New Product</h1>
                    <p className={"text-xl mt-10 text-blackContent opacity-75 font-light"}>
                        New innovation, best quality than before.
                        <br/>
                        Make every moment flying operation become unforgettable.</p>
                </div>

                <div className={"carousel carousel-center "}>
                    <DetailProduct name={"Mini Drone"} desc={"Powerful camera drone at an\n" +
                    "affordable price range. Camera\n" +
                    "up to 4K resolution, optimize shots\n" +
                    "automatically."} price={"$232"} src={"https://i.ibb.co/0YFrqqk/test-Trans.png"}/>
                    <DetailProduct name={"Drone Light"} desc={"Drone light is every creators dream.\n" +
                    "Setting apperture manually and high\n" +
                    "battery  performance. Drone light is\n" +
                    "everything you need."} price={"$454"} src={"https://i.ibb.co/PQ16d2M/test-Drone2.png"}/>
                    <DetailProduct name={"Phantom Drone"} desc={"Inspired by phantom, drone\n" +
                    "can move faster and quickly like a ghost.\n" +
                    "Focus on speed so you can investigate\n" +
                    "environtment quickly."} price={"$654"}
                                   src={"https://i.ibb.co/n6Mh2jd/kisspng-mavic-pro-phantom-unmanned-aerial-vehicle-camera-d-drone-5abd494be83616-24713010152235450795.png"}/>
                </div>

            {/*</div>*/}
        </div>

    )
}
