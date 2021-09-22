import Hero from "../component/Hero/Hero";
import Content from "../component/Content/Content";
import DroneLight from "../component/DroneLight/DroneLight";
import Product from "../component/ProductDetail/Product";

export default function Home() {

    return (
        <>
            <Hero/>
            <Content/>
            <DroneLight/>
            {/*<Slider/>*/}
            <Product/>
            {/*<Carousel/>*/}
        </>
    )
}
