import Hero from "../component/Hero/Hero";
import Content from "../component/Content/Content";
import DroneLight from "../component/DroneLight/DroneLight";
import Product from "../component/ProductDetail/Product";
import Testimoni from "../component/Testimoni/Testimoni";
import Footer from "../component/Footer/Footer";

export default function Home() {

    return (
        <>
            <Hero/>
            <Content/>
            <DroneLight/>
            <Product/>
            <Testimoni/>
            <Footer/>
        </>
    )
}
