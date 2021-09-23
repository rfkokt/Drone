import Image from "next/image";
import Logo from "../../assets/icon/Logo.svg";
import Link from "next/link";
import ItemFooter from "./ItemFooter";

export default function Footer() {
    const item = [
        {
            h1: "Explore",
            h2: "Our Sevices",
            h3: "Specification",
            h4: "Refund",
            h5: "Playlist",
        },
        {
            h1: "Account",
            h2: "My Account",
            h3: "Top Benefit",
            h4: "How-to Tutorials",
            h5: "Moment",
        },
        {
            h1: "Office",
            h2: "+021 2208 1996",
            h3: "SCBD, Jakarta",
            h4: "No.2 (Autodrone)",
            h5: "support@autodrone.id",
        },
    ]
    return (
        <>
            <div className={"bg-black text-white"}>
                <div className={"container mx-auto"}>
                    <div className={"flex flex-wrap py-28"}>
                        <div className={"md:w-3/12 w-full mb-10 mx-10"}>
                            <div className={"flex flex-wrap items-center"}>
                                <Link href={"/"}>
                                    <a>
                                        <Image src={Logo}/>
                                    </a>
                                </Link>
                                <h1 className={"text-2xl"}>autodrone</h1>
                            </div>
                            <br/>
                            <div>
                                <p className={"text-lg text-white opacity-75 font-light"}>
                                    Look up the sky and beautiful
                                    world easily.</p>
                            </div>
                        </div>
                        {item.map((item, index) => (
                            <ItemFooter
                                key={index}
                                h1={item.h1}
                                h2={item.h2}
                                h3={item.h3}
                                h4={item.h4}
                                h5={item.h5}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
