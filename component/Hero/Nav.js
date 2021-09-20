import Link from "next/link"

export default function Nav({to}) {
    const menu = [
        {
            id : 1,
            nama : "Home",
            to : to,
        },
        {
            id : 2,
            nama : "Gallery",
            to : to,
        },
        {
            id : 3,
            nama : "Products",
            to : to,
        },
        {
            id : 4,
            nama : "Review",
            to : to,
        },
        {
            id : 5,
            nama : "Support",
            to : to,
        },
    ]
    return (
        <ul className={"md:flex justify-center md:space-x-10 md:py-10 lg:space-x-20 lg:py-20"}>
            <li className={"text-white uppercase font-light"}>
                <Link href={"/"}>
                    <a href="">Home</a>
                </Link>
            </li>
            <li className={"text-white uppercase font-light"}>
                <a href="">Gallery</a>
            </li>
            <li className={"text-white uppercase font-light"}>
                <a href="">Products</a>
            </li>
            <li className={"text-white uppercase font-light"}>
                <a href="">Review</a>
            </li>
            <li className={"text-white uppercase font-light"}>
                <a href="">Support</a>
            </li>

        </ul>
    )
}