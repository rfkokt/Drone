import Link from "next/link";

export default function ItemFooter({h1, h2, h3, h4, h5}) {
    return (
        <>
            <div className={"md:w-2/12 w-full items-center mx-10"}>
                <div className={"items-center"}>
                    <Link href={"/"}>
                        <a>
                            <h1 className={"mb-5 "}>{h1}</h1>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a>
                            <h1 className={"mb-3 opacity-75 font-light"}>{h2}</h1>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a>
                            <h1 className={"mb-3 opacity-75 font-light"}>{h3}</h1>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a>
                            <h1 className={"mb-3 opacity-75 font-light"}>{h4}</h1>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a>
                            <h1 className={"md:mb-3 mb-5 opacity-75 font-light"}>{h5}</h1>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
