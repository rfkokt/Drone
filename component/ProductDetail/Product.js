import Drone from '../../assets/images/droneTrans.png'
import './Product.module.css'
import Button from "../Button";
import DetailProduct from "./DetailProduct";

export default function Product() {
    return (
        <div className={"carousel"}>
            <DetailProduct/>
            <DetailProduct/>
        </div>
    )
}